<script setup>
// Stany i lifecycles
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue";

// Funkcje
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { useUser } from "@/composables/useUser";

// Firebase
import {
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { db } from "@/firebaseConfig";

// Firestore
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Powiadomienia i blokada scrolla
import { showToast } from "@/composables/useToast";
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";

// Router
import router from "@/router";

// Emitowane zdarzenia
const emit = defineEmits(["close", "deleted"]);

// Dane użytkownika
const { authUser } = useUser();

// Provider użytkownika
const providerId = computed(
  () => authUser.value?.providerData?.[0]?.providerId || "password"
);

// Pola i stany formularza
const password = ref("");
const passwordError = ref("");
const showPassword = ref(false);
const caps = ref(false);
const deleting = ref(false);

// Referencje
const modalRef = ref(null);
const passwordRef = ref(null);

// Lokalny stan widoczności (do animacji zamykania)
const visible = ref(false);

// Zamknięcie modala
function closeModal() {
  visible.value = false;
}

// Wykrywanie CAPS LOCK
const detectCaps = (e) => {
  caps.value = e.getModifierState?.("CapsLock");
};

// Resetowanie pola formularza
function clearAllFields() {
  password.value = "";
  caps.value = false;
  showPassword.value = false;
}

// Walidacja formularza
function validate() {
  if (!password.value) {
    passwordError.value = "Wpisz swoje hasło.";
    password.value = "";
    nextTick(() => passwordRef.value?.focus());
    return false;
  }
  return true;
}

// Re-autoryzacja dla kont Google i Facebook
async function reauthWithProvider() {
  try {
    let provider;

    if (providerId.value === "google.com") {
      provider = new GoogleAuthProvider();
    } else if (providerId.value === "facebook.com") {
      provider = new FacebookAuthProvider();
    } else {
      throw new Error("unsupported");
    }

    // Popup z prośbą o potwierdzenie operacji
    await reauthenticateWithPopup(authUser.value, provider);

    return true;
  } catch (e) {
    console.error(e);

    if (e.code === "auth/popup-blocked") {
      showToast("Przeglądarka zablokowała okno potwierdzenia 😕");
    } else if (e.code === "auth/popup-closed-by-user") {
      showToast("Okno potwierdzenia zostało zamknięte.");
    } else {
      showToast("Nie udało się potwierdzić tożsamości.");
    }

    return false;
  }
}

// Kasowanie subkolekcji
async function deleteSubcollection(uid, name) {
  const snap = await getDocs(collection(db, "users", uid, name));
  await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)));
}

// Usuwanie konta użytkownika
async function confirmDelete() {
  passwordError.value = "";

  // Reautoryzacja dla kont Google/Facebook
  if (providerId.value !== "password") {
    deleting.value = true;

    const ok = await reauthWithProvider();
    if (!ok) {
      deleting.value = false;
      return;
    }
  } else {
    // Reautoryzacja dla kont hasłowych
    if (!validate()) return;
    deleting.value = true;

    try {
      await authUser.value.reload();

      const credential = EmailAuthProvider.credential(
        authUser.value.email,
        password.value
      );

      await reauthenticateWithCredential(authUser.value, credential);
    } catch (e) {
      console.error(e);

      // Błędne hasło
      if (
        e.code === "auth/wrong-password" ||
        e.code === "auth/invalid-credential"
      ) {
        passwordError.value = "Niepoprawne hasło.";

        await nextTick();
        passwordRef.value?.focus();

        deleting.value = false;
        return;
      }

      // Limit prób logowania
      if (e.code === "auth/too-many-requests") {
        passwordError.value = "Zbyt wiele prób. Spróbuj ponownie później.";
        clearAllFields();

        deleting.value = false;
        return;
      }

      // Inny błąd reautoryzacji
      showToast("Wymagane ponowne logowanie 😣");
      clearAllFields();

      deleting.value = false;
      return;
    }
  }

  const uid = authUser.value.uid;

  try {
    // Kasujemy subkolekcje
    await deleteSubcollection(uid, "courseProgress");

    // Kasujemy dokument usera
    await deleteDoc(doc(db, "users", uid));

    // Kasujemy konto auth
    await deleteUser(authUser.value);
  } catch (e) {
    console.error(e);
    showToast("Błąd podczas usuwania konta 😣");

    deleting.value = false;
    return;
  }

  // Emit i zamknięcie modala
  emit("deleted");
  closeModal();

  // Toast i przekierowanie na stronę główną
  showToast("Konto zostało usunięte ❌");
  router.push("/");

  deleting.value = false;
}

// Obsługa klawiszy ESC i Enter
const onKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
    return;
  }

  if (e.key === "Enter" && !deleting.value) {
    e.preventDefault();
    confirmDelete();
  }
};

// Zamknięcie po kliknięciu poza modal
const onClickOutside = (e) => {
  if (modalRef.value && !modalRef.value.contains(e.target)) {
    closeModal();
  }
};

// Inicjalizacja
onMounted(async () => {
  lockScroll();
  window.addEventListener("keydown", onKey);
  window.addEventListener("pointerdown", onClickOutside);

  await nextTick();

  requestAnimationFrame(() => {
    visible.value = true;
  });

  // Fokus tylko dla kont hasłowych
  if (providerId.value === "password") passwordRef.value?.focus();
});

// Sprzątanie
onBeforeUnmount(() => {
  unlockScroll();
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("pointerdown", onClickOutside);
});
</script>

<template>
  <div>
    <Teleport to="body">
      <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        @after-leave="emit('close')"
      >
        <!-- Główna warstwa modala -->
        <div
          v-if="visible"
          class="fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
          aria-labelledby="delete-title"
        >
          <!-- Tło modala -->
          <div
            class="absolute inset-0 cursor-pointer bg-black/0 transition-colors duration-300"
            :class="visible ? 'bg-black/50' : 'bg-black/0'"
            @click="closeModal"
          />

          <!-- Wrapper do centrowania -->
          <div class="absolute inset-0 flex items-center justify-center px-4">
            <!-- Okno modala -->
            <div
              ref="modalRef"
              class="relative w-full max-w-xl rounded-2xl border border-border/80 bg-card shadow-2xl p-6 sm:p-8 text-text"
            >
              <!-- Przycisk zamknięcia -->
              <button
                @click="closeModal"
                class="absolute right-4 top-4 text-xl text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                ×
              </button>

              <!-- Nagłówek -->
              <SectionTitle
                id="delete-title"
                title="Usuń konto"
                subtitle="Tej operacji nie można cofnąć"
                :center="false"
                class="animate-fade-slide"
              />

              <!-- Treść formularza -->
              <div class="mt-6 space-y-4 animate-fade-slide-delay">
                <!-- Informacja o providerze -->
                <p
                  v-if="providerId !== 'password'"
                  class="text-sm text-text/70"
                >
                  Twoje konto jest połączone przez
                  {{ providerId === "google.com" ? "Google" : "Facebook" }}. Aby
                  usunąć konto, kliknij „Potwierdź tożsamość”.
                </p>

                <!-- Pole hasła -->
                <template v-if="providerId === 'password'">
                  <p class="text-sm text-text/70">
                    Potwierdź operację, wpisując swoje hasło.
                  </p>

                  <div class="relative">
                    <input
                      ref="passwordRef"
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      @keydown="detectCaps"
                      @keyup="detectCaps"
                      @blur="caps = false"
                      @input="passwordError = ''"
                      :class="[
                        'w-full rounded-xl bg-bg/90 p-3 pr-12 text-sm outline-none transition-all duration-300',
                        passwordError
                          ? 'border border-border/70 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                          : 'border border-border/70 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40',
                      ]"
                    />

                    <!-- Ikona oka -->
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-primary transition cursor-pointer"
                    >
                      <svg
                        v-if="showPassword"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M3 3l18 18" />
                        <path
                          d="M10.7 10.7A3 3 0 0114.3 14.3M6.1 6.1A11.7 11.7 0 0112 5c7 0 11 7 11 7a21.7 21.7 0 01-4.3 5.9"
                        />
                      </svg>

                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M12 5c7 0 11 7 11 7s-4 7-11 7-11-7-11-7 4-7 11-7z"
                        />
                        <circle cx="12" cy="12" r="3.5" />
                      </svg>
                    </button>

                    <!-- Ikona CAPS LOCK -->
                    <div
                      v-if="caps"
                      class="absolute right-10 top-1/2 -translate-y-1/2 text-amber-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2.2"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="3" />
                        <path d="M12 8l3 3H9l3-3z" />
                        <path d="M12 11v5" />
                      </svg>
                    </div>
                  </div>

                  <p class="text-red-500 text-xs h-4">{{ passwordError }}</p>
                </template>
              </div>

              <!-- Przyciski -->
              <div
                class="flex justify-end gap-3 mt-8 animate-fade-slide-delay-2 flex-wrap"
              >
                <!-- Anuluj -->
                <button
                  @click="closeModal"
                  class="px-4 py-2.5 sm:px-5 sm:py-2.5 h-10.5 sm:h-11.5 rounded-full border border-border/70 bg-card text-sm font-medium text-text/80 transition-all duration-300 ease-out cursor-pointer hover:border-primary hover:text-primary hover:bg-section/70 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  Anuluj
                </button>

                <!-- Przycisk dla Google/Facebook -->
                <button
                  v-if="providerId !== 'password'"
                  @click="confirmDelete"
                  :disabled="deleting"
                  class="px-4 py-2.5 sm:px-5 sm:py-3 min-h-11 sm:min-h-12 rounded-full text-sm font-semibold text-center leading-tight whitespace-normal bg-red-600 text-white shadow transition-all duration-300 ease-out cursor-pointer hover:bg-red-700 hover:brightness-95 hover:shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {{ deleting ? "Usuwanie..." : "Potwierdź i usuń" }}
                </button>

                <!-- Przycisk dla kont hasłowych -->
                <button
                  v-else
                  @click="confirmDelete"
                  :disabled="deleting"
                  class="px-4 py-2.5 sm:px-5 sm:py-3 min-h-11 sm:min-h-12 rounded-full text-sm font-semibold text-center leading-tight whitespace-normal bg-red-600 text-white shadow transition-all duration-300 ease-out cursor-pointer hover:bg-red-700 hover:brightness-95 hover:shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {{ deleting ? "Usuwanie..." : "Usuń konto" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
