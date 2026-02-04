<script setup>
// Importy Vue
import { ref, nextTick, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

// Narzędzia
import { showToast } from "@/composables/useToast";

// Firebase
import { auth } from "@/firebaseConfig";
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
  applyActionCode,
} from "firebase/auth";

// Route + Router
const route = useRoute();
const router = useRouter();

// Parametry zapytania
const mode = route.query.mode;
const oobCode = route.query.oobCode;

// Stany globalne
const loading = ref(false);
const error = ref("");

// Pola
const newPassword = ref("");
const confirmPassword = ref("");

// Błędy
const errorNew = ref("");
const errorConfirm = ref("");

// Referencje
const newRef = ref(null);
const confirmRef = ref(null);

// Pasek siły hasła
const passwordStrength = ref(0);
const passwordLabel = ref("");
const newPasswordValue = ref("");

// Podgląd haseł
const showNew = ref(false);
const showConfirm = ref(false);

// CAPS LOCK
const capsNew = ref(false);
const capsConfirm = ref(false);

// Status animacji
const isReady = ref(false);

const detectCapsNew = (e) => (capsNew.value = e.getModifierState?.("CapsLock"));

const detectCapsConfirm = (e) =>
  (capsConfirm.value = e.getModifierState?.("CapsLock"));

// Ocena siły hasła
function evaluateStrength(pwd) {
  let s = 0;
  if (pwd.length >= 8) s++;
  if (/[A-Z]/.test(pwd)) s++;
  if (/[a-z]/.test(pwd)) s++;
  if (/\d/.test(pwd)) s++;
  if (/[^A-Za-z0-9]/.test(pwd)) s++;

  passwordStrength.value = s;
  passwordLabel.value = [
    "Bardzo słabe",
    "Słabe",
    "Średnie",
    "Dobre",
    "Silne",
    "Bardzo silne",
  ][s];
}

// Walidacja nowego hasła
function validatePassword(pwd) {
  const reset = () => {
    passwordStrength.value = 0;
    passwordLabel.value = "";
    newPassword.value = "";
    newPasswordValue.value = "";
  };

  if (!pwd) {
    errorNew.value = "Wpisz nowe hasło.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  if (pwd.length < 8) {
    errorNew.value = "Hasło musi mieć co najmniej 8 znaków.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  if (!/[A-Z]/.test(pwd)) {
    errorNew.value = "Hasło musi zawierać dużą literę.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  if (!/[a-z]/.test(pwd)) {
    errorNew.value = "Hasło musi zawierać małą literę.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  if (!/\d/.test(pwd)) {
    errorNew.value = "Hasło musi zawierać cyfrę.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  if (!/[^A-Za-z0-9]/.test(pwd)) {
    errorNew.value = "Hasło musi zawierać znak specjalny.";
    reset();
    nextTick(() => newRef.value?.focus());
    return false;
  }

  return true;
}

// Obsługa klawisza Enter
function handleEnterNew(e) {
  if (e.key === "Enter") {
    if (!validatePassword(newPassword.value)) return;
    nextTick(() => confirmRef.value?.focus());
  }
}

function handleEnterConfirm(e) {
  if (e.key === "Enter") {
    handleSubmit();
  }
}

// Główna akcja
async function handleSubmit() {
  error.value = "";
  errorNew.value = "";
  errorConfirm.value = "";

  // Reset hasła
  if (mode === "resetPassword") {
    loading.value = true;

    if (!validatePassword(newPassword.value)) {
      loading.value = false;
      return;
    }

    if (!confirmPassword.value) {
      errorConfirm.value = "Potwierdź hasło.";
      confirmPassword.value = "";
      nextTick(() => confirmRef.value?.focus());
      loading.value = false;
      return;
    }

    if (confirmPassword.value !== newPassword.value) {
      errorConfirm.value = "Hasła się różnią.";
      confirmPassword.value = "";
      nextTick(() => confirmRef.value?.focus());
      loading.value = false;
      return;
    }

    try {
      await verifyPasswordResetCode(auth, oobCode);
      await confirmPasswordReset(auth, oobCode, newPassword.value);

      if (auth.currentUser) await auth.signOut();

      showToast("Hasło zostało zmienione 🔐");
      router.push("/");
    } catch {
      error.value = "Link wygasł lub jest nieprawidłowy.";
    }

    loading.value = false;
    return;
  }

  // Weryfikacja e-mail
  try {
    await applyActionCode(auth, oobCode);

    const msg =
      mode === "verifyEmail"
        ? "Adres e-mail został potwierdzony ✔️"
        : mode === "verifyBeforeChangeEmail"
        ? "Adres e-mail został zmieniony ✨"
        : mode === "recoverEmail"
        ? "Przywrócono poprzedni e-mail 🔄"
        : "Akcja wykonana";

    showToast(msg);
    router.push("/");
  } catch {
    error.value = "Link wygasł lub jest nieprawidłowy.";
  }
}

// Walidacja linku + wylogowanie
onBeforeMount(async () => {
  // Wylogowanie
  if (auth.currentUser) await auth.signOut();

  // Walidacja linku
  if (!mode || !oobCode) {
    showToast("Nieprawidłowy link ❌");
    router.push("/");
    return;
  }

  // Opóźnienie do animacji
  setTimeout(() => {
    isReady.value = true;
  }, 80);
});
</script>

<template>
  <!-- Loader -->
  <div
    v-if="!isReady"
    class="w-full flex justify-center items-center py-40 animate-fade-in"
  >
    <div
      class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"
    ></div>
  </div>

  <section v-if="isReady" class="py-20 flex items-center animate-fade-in">
    <div class="max-w-lg mx-auto px-6 w-full">
      <!-- Karta -->
      <div
        class="rounded-3xl border border-border bg-card shadow-sm p-8 md:p-10 text-center animate-fade-in"
      >
        <!-- Nagłówek -->
        <h2
          class="text-2xl md:text-3xl font-extrabold text-primary wrap-break-word"
        >
          {{
            mode === "resetPassword"
              ? "Ustaw nowe hasło"
              : mode === "verifyEmail"
              ? "Weryfikacja adresu e-mail"
              : mode === "verifyBeforeChangeEmail"
              ? "Potwierdzenie zmiany adresu e-mail"
              : mode === "recoverEmail"
              ? "Przywrócenie poprzedniego adresu e-mail"
              : "Akcja konta"
          }}
        </h2>

        <!-- Podtytuł -->
        <p
          v-if="mode === 'resetPassword'"
          class="mt-2 text-text/80 animate-fade-slide"
        >
          Wprowadź nowe hasło i potwierdź, aby kontynuować.
        </p>

        <p v-else class="mt-2 text-text/80 animate-fade-slide">
          Potwierdź poniżej, aby zakończyć operację.
        </p>

        <!-- Reset hasła-->
        <div v-if="mode === 'resetPassword'" class="mt-8 text-left">
          <!-- Nowe hasło -->
          <div class="mb-8 animate-fade-slide-delay">
            <label class="text-sm font-medium text-text/80">Nowe hasło</label>

            <div class="relative mt-1">
              <input
                ref="newRef"
                :type="showNew ? 'text' : 'password'"
                v-model="newPassword"
                @input="
                  errorNew = '';
                  newPasswordValue = $event.target.value;
                  newPasswordValue
                    ? evaluateStrength(newPasswordValue)
                    : ((passwordStrength = 0), (passwordLabel = ''));
                "
                @keydown="detectCapsNew"
                @keyup="detectCapsNew"
                @keyup.enter="handleEnterNew"
                @blur="capsNew = false"
                class="w-full rounded-xl bg-bg/90 p-4 pr-12 text-sm border border-border outline-none transition duration-300 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40"
              />

              <!-- Ikona oka -->
              <button
                type="button"
                @click="showNew = !showNew"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-primary transition cursor-pointer"
              >
                <svg
                  v-if="showNew"
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
                  <path d="M12 5c7 0 11 7 11 7s-4 7-11 7-11-7-11-7 4-7 11-7z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </button>

              <!-- CAPS LOCK -->
              <div
                v-if="capsNew"
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

            <p class="text-red-500 text-xs mt-1 h-5">
              {{ errorNew }}
            </p>

            <!-- Pasek siły hasła -->
            <div class="mt-4">
              <div
                class="h-2.5 w-full bg-border/40 rounded-full overflow-hidden"
              >
                <div
                  class="h-full transition-all duration-300"
                  :style="{ width: passwordStrength * 20 + '%' }"
                  :class="[
                    passwordStrength <= 2
                      ? 'bg-red-500'
                      : passwordStrength <= 4
                      ? 'bg-yellow-400'
                      : 'bg-green-500',
                  ]"
                ></div>
              </div>

              <p class="text-xs text-text/70 mt-1">{{ passwordLabel }}</p>
            </div>
          </div>

          <!-- Potwierdzenie -->
          <div class="mb-8 animate-fade-slide-delay-2">
            <label class="text-sm font-medium text-text/80"
              >Powtórz hasło</label
            >

            <div class="relative mt-1">
              <input
                ref="confirmRef"
                :type="showConfirm ? 'text' : 'password'"
                v-model="confirmPassword"
                @input="errorConfirm = ''"
                @keydown="detectCapsConfirm"
                @keyup="detectCapsConfirm"
                @keyup.enter="handleEnterConfirm"
                @blur="capsConfirm = false"
                class="w-full rounded-xl bg-bg/90 p-4 pr-12 text-sm border border-border outline-none transition duration-300 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40"
              />

              <!-- Ikona oka -->
              <button
                type="button"
                @click="showConfirm = !showConfirm"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-primary transition cursor-pointer"
              >
                <svg
                  v-if="showConfirm"
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
                  <path d="M12 5c7 0 11 7 11 7s-4 7-11 7-11-7-11-7 4-7 11-7z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </button>

              <!-- CAPS LOCK -->
              <div
                v-if="capsConfirm"
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

            <p class="text-red-500 text-xs mt-1 h-5">
              {{ errorConfirm }}
            </p>
          </div>

          <!-- Przycisk -->
          <button
            @click="handleSubmit"
            :disabled="loading"
            class="w-full py-4 rounded-2xl bg-primary text-white font-semibold shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:opacity-50 cursor-pointer animate-fade-slide-delay-2"
          >
            {{ loading ? "Zapisywanie..." : "Zmień hasło" }}
          </button>
        </div>

        <!-- Pozostałe akcje -->
        <div v-else class="mt-8 animate-fade-slide-delay-2">
          <button
            @click="handleSubmit"
            class="w-full py-4 rounded-2xl bg-primary text-white font-semibold shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer"
          >
            Potwierdź
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
