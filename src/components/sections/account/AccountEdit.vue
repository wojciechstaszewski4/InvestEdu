<script setup>
// Importy
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Użytkownik (Auth + Firestore)
import { useUser } from "@/composables/useUser";
import { showToast } from "@/composables/useToast";

// Scroll lock dla modala
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";

// Emitowanie do rodzica
const emit = defineEmits(["close", "saved"]);

// Dane użytkownika
const { user, authUser, saveUser } = useUser();

// Reaktywne pola formularza (kopie danych z Firestore)
const displayName = ref(user.value?.displayName || "");
const bio = ref(user.value?.bio || "");
const photoURL = ref(user.value?.avatarUrl || "");

// Status zapisu
const saving = ref(false);

// Referencje DOM
const modalRef = ref(null);
const firstField = ref(null);

// Błąd URL avatara
const avatarError = ref("");

// Lokalny stan widoczności (do animacji zamykania)
const visible = ref(false);

// Zamknięcie modala
function closeModal() {
  visible.value = false;
}

// Reakcja na klawisze Enter + ESC
const onKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
    return;
  }

  if (e.key === "Enter" && !saving.value) {
    e.preventDefault();
    saveProfile();
  }
};

// Kliknięcie poza modalem
const onClickOutside = (e) => {
  if (modalRef.value && !modalRef.value.contains(e.target)) closeModal();
};

// Funkcja walidująca URL avatara
function validateAvatarUrl(url) {
  if (!url) {
    avatarError.value = "";
    return true;
  }

  const pattern = /^https?:\/\/.+/i;

  if (!pattern.test(url)) {
    avatarError.value =
      "Podaj poprawny link (musi zaczynać się od http:// lub https://).";
    return false;
  }

  avatarError.value = "";
  return true;
}

// Zapis profilu
async function saveProfile() {
  if (!authUser.value) return;
  saving.value = true;

  // Walidacja poprawności URL avatara
  if (!validateAvatarUrl(photoURL.value)) {
    saving.value = false;
    return;
  }

  try {
    // Przygotowanie danych do zapisania w Firestore
    const updates = {
      displayName: displayName.value,
      bio: bio.value,
      avatarUrl: photoURL.value || "",
    };

    // Blokada edycji avatarUrl
    if (photoURL.value && photoURL.value !== user.value.avatarUrl) {
      updates.avatarLocked = true;
    }

    // Blokada edycji displayName
    if (displayName.value && displayName.value !== user.value.displayName) {
      updates.displayNameLocked = true;
    }

    // Zapis do Firestore
    await saveUser(updates);

    // Toast + zamknięcie
    showToast("Zapisano zmiany ✨");
    closeModal();
  } catch (e) {
    console.error(e);
    showToast("Wystąpił błąd 😣");
  }

  saving.value = false;
}

// Aktualizuje pola formularza, gdy dane użytkownika zostaną załadowane lub zmienione
watch(user, (u) => {
  if (!u) return;
  displayName.value = u.displayName || "";
  bio.value = u.bio || "";
  photoURL.value = u.avatarUrl || "";
});

// Lifecycle
onMounted(async () => {
  lockScroll();
  window.addEventListener("keydown", onKey);
  window.addEventListener("pointerdown", onClickOutside);

  await nextTick();

  requestAnimationFrame(() => {
    visible.value = true;
  });

  firstField.value?.focus();
});

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
          aria-labelledby="edit-title"
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
              class="relative w-full max-w-[92vw] sm:max-w-lg lg:max-w-xl rounded-2xl border border-border/80 bg-card shadow-2xl p-5 sm:p-6 lg:p-8 text-text"
            >
              <!-- Przycisk zamknięcia -->
              <button
                @click="closeModal"
                class="absolute right-4 top-4 text-xl text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
              >
                ×
              </button>

              <!-- Tytuł modala -->
              <SectionTitle
                id="edit-title"
                title="Edytuj profil"
                subtitle="Dostosuj swój wygląd i dane"
                :center="false"
                class="animate-fade-slide"
              />

              <!-- Formularz -->
              <div class="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
                <!-- Pole "Nazwa użytkownika" -->
                <div class="animate-fade-slide-delay">
                  <label class="block text-sm font-medium text-text/80"
                    >Nazwa użytkownika</label
                  >
                  <input
                    ref="firstField"
                    v-model="displayName"
                    type="text"
                    class="mt-2 w-full rounded-xl border border-border bg-bg/70 p-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <!-- Pole "Bio" -->
                <div class="animate-fade-slide-delay-2">
                  <label class="block text-sm font-medium text-text/80"
                    >Bio</label
                  >
                  <textarea
                    v-model="bio"
                    rows="3"
                    class="sm:rows-4 mt-2 w-full rounded-xl border border-border bg-bg/70 p-3 resize-none outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40"
                    placeholder="Opowiedz coś o sobie..."
                  ></textarea>
                </div>

                <!-- Pole "Zdjęcie profilowe (URL) -->
                <div class="animate-fade-slide-delay-3">
                  <label class="block text-sm font-medium text-text/80"
                    >Zdjęcie profilowe (URL)</label
                  >

                  <input
                    v-model="photoURL"
                    @input="validateAvatarUrl($event.target.value)"
                    type="text"
                    class="mt-2 w-full rounded-xl border p-3 outline-none transition-all duration-300 bg-bg/70 focus:ring-2"
                    :class="
                      avatarError
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-border focus:ring-primary/40'
                    "
                    placeholder="https://example.com/avatar.png"
                  />

                  <p class="text-red-500 text-xs mt-1 h-4">
                    {{ avatarError }}
                  </p>

                  <!-- Podgląd zdjęcia -->
                  <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 scale-95 max-h-0"
                    enter-to-class="opacity-100 scale-100 max-h-32"
                    leave-active-class="transition-all duration-250 ease-in"
                    leave-from-class="opacity-100 scale-100 max-h-32"
                    leave-to-class="opacity-0 scale-95 max-h-0"
                  >
                    <div
                      v-if="photoURL"
                      class="mt-4 flex items-center gap-4 overflow-hidden"
                    >
                      <img
                        :src="photoURL"
                        class="h-20 w-20 rounded-full object-cover border border-border shadow"
                      />

                      <button
                        @click="photoURL = ''"
                        class="text-xs text-text/70 hover:text-primary transition-all duration-300 cursor-pointer active:scale-[0.97]"
                      >
                        Usuń zdjęcie
                      </button>
                    </div>
                  </Transition>
                </div>

                <!-- Zapis zmian -->
                <div class="flex justify-end pt-2 animate-fade-slide-delay-3">
                  <button
                    @click="saveProfile"
                    :disabled="saving"
                    class="px-6 py-2.5 h-10.5 rounded-full bg-primary text-sm font-semibold text-white shadow transition-all duration-300 ease-out cursor-pointer hover:bg-secondary hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                  >
                    {{ saving ? "Zapisywanie..." : "Zapisz zmiany" }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
