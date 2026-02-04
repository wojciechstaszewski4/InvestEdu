<script setup>
// Obsługa reaktywności i cyklu życia komponentu
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

// Funkcje zarządzające blokadą scrolla i powiadomieniami
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";
import { showToast } from "@/composables/useToast";

// Funkcje i hooki użytkownika
import { useUser } from "@/composables/useUser.js";
import { auth } from "@/firebaseConfig";

// Logika autoryzacji Firebase
import {
  loginUser,
  registerUser,
  loginWithGoogle,
  loginWithFacebook,
  checkIfEmailExists,
  resetUserPassword,
} from "@/components/services/auth.js";

// Pobranie danych użytkownika
const { loadUserData } = useUser();

// Emit zamknięcia modala oraz pobieranie trybu login/register z props
const emit = defineEmits(["close"]);
const props = defineProps({ isLogin: { type: Boolean, default: true } });

// Lokalny stan mówiący czy modal jest w trybie logowania czy rejestracji
const localIsLogin = ref(props.isLogin);

// Komunikaty błędów powiązane z polami formularza
const emailError = ref("");
const passwordError = ref("");
const confirmError = ref("");

// Dane dotyczące siły hasła i opisowa etykieta
const passwordStrength = ref(0);
const passwordStrengthLabel = ref("");

// Przełączniki widoczności pól hasła i potwierdzenia hasła
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Ustawienie opcji "Zapamiętaj mnie" w logowaniu
const rememberMe = ref(true);

// Informacja czy aktualnie trwa żądanie do Firebase
const loading = ref(false);

// Lokalny stan widoczności modala (do animacji zamykania)
const visible = ref(false);

// Referencje do pól input pozwalające wywoływać .focus()
const emailRef = ref(null);
const passwordRef = ref(null);
const confirmRef = ref(null);

// Stany wykrywania CAPS LOCK dla pól hasła
const capsLockOnPassword = ref(false);
const capsLockOnConfirm = ref(false);

// Referencja do głównego okna popupu (do click-outside)
const modalRef = ref(null);

// Zamknięcie modala z animacją
const closeModal = () => {
  visible.value = false;
};

// Sprawdzanie czy CAPS LOCK jest włączony podczas wpisywania hasła
const detectCapsPassword = (e) =>
  (capsLockOnPassword.value = e.getModifierState?.("CapsLock"));

const detectCapsConfirm = (e) =>
  (capsLockOnConfirm.value = e.getModifierState?.("CapsLock"));

// Czyścimy komunikaty błędów formularza
const clearErrors = () => {
  emailError.value = "";
  passwordError.value = "";
  confirmError.value = "";
};

// Czyścimy pola formularza
const clearAllFields = () => {
  // Pola input
  if (emailRef.value) emailRef.value.value = "";
  if (passwordRef.value) passwordRef.value.value = "";
  if (confirmRef.value) confirmRef.value.value = "";

  // Pasek siły hasła
  if (!localIsLogin.value) {
    passwordStrength.value = 0;
    passwordStrengthLabel.value = "";
  }

  // CAPS LOCK
  capsLockOnPassword.value = false;
  capsLockOnConfirm.value = false;

  // Ukrycie hasła
  showPassword.value = false;
  showConfirmPassword.value = false;
};

// CZyszczenie pola i siły hasła
function resetPasswordField() {
  passwordStrength.value = 0;
  passwordStrengthLabel.value = "";
  passwordRef.value.value = "";
  passwordRef.value?.focus();
}

// Walidacja formatu adresu e-mail i jego obecności
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

  if (!email) {
    emailError.value = "Podaj adres e-mail.";
    emailRef.value.value = "";
    emailRef.value?.focus();
    return false;
  }

  if (!regex.test(email)) {
    emailError.value = "Niepoprawny format e-mail.";
    emailRef.value?.focus();
    return false;
  }

  return true;
};

// Walidacja hasła pod kątem długości i wymagań bezpieczeństwa
const validatePassword = (password) => {
  if (!password) {
    passwordError.value = "Wpisz hasło.";
    resetPasswordField();
    return false;
  }

  if (password.length < 8) {
    passwordError.value = "Hasło musi mieć co najmniej 8 znaków.";
    resetPasswordField();
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    passwordError.value = "Hasło musi zawierać dużą literę.";
    resetPasswordField();
    return false;
  }

  if (!/[a-z]/.test(password)) {
    passwordError.value = "Hasło musi zawierać małą literę.";
    resetPasswordField();
    return false;
  }

  if (!/\d/.test(password)) {
    passwordError.value = "Hasło musi zawierać cyfrę.";
    resetPasswordField();
    return false;
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    passwordError.value = "Hasło musi zawierać znak specjalny.";
    resetPasswordField();
    return false;
  }

  return true;
};

// Sprawdzamy czy potwierdzone hasło jest identyczne z podanym hasłem
const validateConfirm = (password, confirm) => {
  if (!confirm) {
    confirmError.value = "Potwierdź hasło.";
    confirmRef.value.value = "";
    confirmRef.value?.focus();
    return false;
  }

  if (password !== confirm) {
    confirmError.value = "Hasła się różnią.";
    confirmRef.value.value = "";
    confirmRef.value?.focus();
    return false;
  }

  return true;
};

// Analizujemy siłę hasła i ustawiamy odpowiedni opis oraz pasek postępu
const evaluatePasswordStrength = (pwd) => {
  let s = 0;
  if (pwd.length >= 8) s++;
  if (/[A-Z]/.test(pwd)) s++;
  if (/[a-z]/.test(pwd)) s++;
  if (/\d/.test(pwd)) s++;
  if (/[^A-Za-z0-9]/.test(pwd)) s++;

  passwordStrength.value = s;
  passwordStrengthLabel.value = [
    "Bardzo słabe",
    "Słabe",
    "Średnie",
    "Dobre",
    "Silne",
    "Bardzo silne",
  ][s];
};

// Obsługujemy błędy zwracane przez Firebase i ustawiamy odpowiednie komunikaty
const handleFirebaseError = (err) => {
  const code = err.code;

  switch (code) {
    case "auth/wrong-password":
    case "auth/invalid-credential":
      passwordError.value = "Niepoprawne hasło.";

      if (!localIsLogin.value) {
        passwordStrength.value = 0;
        passwordStrengthLabel.value = "";
      }

      passwordRef.value?.focus();
      break;

    case "auth/user-not-found":
      emailError.value = "Nie znaleziono konta.";
      clearAllFields();
      emailRef.value?.focus();
      break;

    case "auth/email-already-in-use":
      emailError.value = "E-mail jest już używany.";
      clearAllFields();
      emailRef.value?.focus();
      break;

    case "auth/invalid-email":
      emailError.value = "Niepoprawny format e-mail.";
      emailRef.value?.focus();
      break;

    default:
      emailError.value = "Wystąpił nieoczekiwany błąd.";
      clearAllFields();
      break;
  }
};

// Główna obsługa submitu: logowanie i rejestracja
const onSubmit = async (e) => {
  if (loading.value) return;

  loading.value = true;
  clearErrors();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirm = form.confirm?.value;

  if (!validateEmail(email)) return (loading.value = false);

  if (!localIsLogin.value) {
    const exists = await checkIfEmailExists(email);

    if (exists) {
      emailError.value = "Ten adres e-mail jest już zajęty.";
      clearAllFields();
      emailRef.value?.focus();
      return (loading.value = false);
    }

    if (!validatePassword(password)) return (loading.value = false);
    if (!validateConfirm(password, confirm)) return (loading.value = false);

    try {
      sessionStorage.setItem("justLoggedIn", "1");

      await registerUser(email, password);
      await loadUserData(auth.currentUser.uid);

      emit("close");
    } catch (err) {
      handleFirebaseError(err);
    } finally {
      loading.value = false;
    }

    return;
  }

  const exists = await checkIfEmailExists(email);

  if (!exists) {
    emailError.value = "To konto nie istnieje.";
    clearAllFields();
    emailRef.value?.focus();
    return (loading.value = false);
  }

  if (exists.provider !== "password") {
    emailError.value =
      exists.provider === "google"
        ? "To konto korzysta z Google."
        : "To konto korzysta z Facebook.";

    clearAllFields();
    emailRef.value?.focus();
    return (loading.value = false);
  }

  if (!password) {
    passwordError.value = "Wpisz hasło.";
    passwordRef.value.value = "";
    passwordRef.value?.focus();
    return (loading.value = false);
  }

  try {
    sessionStorage.setItem("justLoggedIn", "1");

    await loginUser(email, password, rememberMe.value);
    await loadUserData(auth.currentUser.uid);

    emit("close");
  } catch (err) {
    handleFirebaseError(err);
  } finally {
    loading.value = false;
  }
};

// Wysyłamy e-mail resetujący hasło dla istniejącego konta
const handleResetPassword = async () => {
  const email = emailRef.value?.value.trim();
  if (!validateEmail(email)) return;

  const exists = await checkIfEmailExists(email);

  if (!exists) {
    emailError.value = "Nie znaleziono konta.";
    clearAllFields();
    emailRef.value?.focus();
    return;
  }

  // Blokada resetu hasła dla kont Google i Facebook
  if (exists.provider !== "password") {
    emailError.value =
      exists.provider === "google"
        ? "To konto korzysta z Google. Reset hasła nie jest dostępny."
        : "To konto korzysta z Facebook. Reset hasła nie jest dostępny.";

    clearAllFields();
    emailRef.value?.focus();
    return;
  }

  // Reset tylko dla kont hasłowych
  await resetUserPassword(email);
  showToast("Wysłaliśmy link do resetu hasła 📤");
};

// Nasłuchiwanie klawisza ESC w celu zamknięcia modala
const onKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

// Zamknięcie modala poprzez kliknięcie poza oknem
const onClickOutside = (e) => {
  if (modalRef.value && !modalRef.value.contains(e.target)) {
    closeModal();
  }
};

// Ustawianie listenerów i fokusowanie pola e-mail po otwarciu modala
onMounted(async () => {
  window.addEventListener("keydown", onKey);
  window.addEventListener("pointerdown", onClickOutside);
  lockScroll();

  // Autofocus na pierwszym przycisku
  await nextTick();

  requestAnimationFrame(() => {
    visible.value = true;
  });

  emailRef.value?.focus();
});

// Usuwanie listenerów po zamknięciu komponentu
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("pointerdown", onClickOutside);
  unlockScroll();
});

// Logowanie z użyciem konta Google
const handleGoogle = async () => {
  try {
    sessionStorage.setItem("justLoggedIn", "1");

    await loginWithGoogle();
    await loadUserData(auth.currentUser.uid);

    emit("close");
  } catch (err) {
    // Konflikt providerów - konto założone inną metodą
    if (err.message === "provider-conflict") {
      emailError.value =
        "To konto jest już używane przez inny sposób logowania.";
      return;
    }

    // Standardowe błędy popupu
    if (err.code === "auth/popup-closed-by-user") return;

    if (err.code === "auth/popup-blocked") {
      return showToast("Przeglądarka zablokowała okno logowania 😕");
    }

    if (err.code === "auth/network-request-failed") {
      return showToast("Sprawdź połączenie internetowe 🌐");
    }

    console.error(err);
    showToast("Nie udało się zalogować przez Google 😕");
  }
};

// Logowanie z użyciem konta Facebook
const handleFacebook = async () => {
  try {
    sessionStorage.setItem("justLoggedIn", "1");

    await loginWithFacebook();
    await loadUserData(auth.currentUser.uid);

    emit("close");
  } catch (err) {
    // Konflikt providerów - konto założone inną metodą
    if (err.message === "provider-conflict") {
      emailError.value =
        "To konto jest już używane przez inny sposób logowania.";
      return;
    }

    // Standardowe błędy popupu
    if (err.code === "auth/popup-closed-by-user") return;

    if (err.code === "auth/popup-blocked") {
      return showToast("Przeglądarka zablokowała okno logowania 😕");
    }

    if (err.code === "auth/network-request-failed") {
      return showToast("Sprawdź połączenie internetowe 🌐");
    }

    console.error(err);
    showToast("Nie udało się zalogować przez Facebook 😕");
  }
};

// Synchronizacja propsów
watch(
  () => props.isLogin,
  (val) => {
    localIsLogin.value = val;
    clearAllFields();
    clearErrors();
  }
);
</script>

<template>
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
      <div
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
        v-if="visible"
      >
        <!-- Tło -->
        <div
          class="absolute inset-0 cursor-pointer bg-black/0 transition-colors duration-300"
          :class="visible ? 'bg-black/50' : 'bg-black/0'"
          @click="closeModal"
        />

        <!-- Główne okno modala z formularzem logowania i rejestracji -->
        <Transition
          enter-active-class="duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-4 scale-95"
        >
          <div
            ref="modalRef"
            class="relative w-full max-w-md rounded-2xl border border-border/70 bg-card shadow-2xl text-text px-9 py-9 animate-pop"
          >
            <!-- Przycisk zamykający modal -->
            <button
              class="absolute right-4 top-4 text-xl text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
              @click="closeModal"
            >
              ×
            </button>

            <!-- Nagłówek określający aktualny tryb: logowanie lub rejestracja -->
            <h3
              class="text-xl font-extrabold mb-5 text-center text-primary tracking-wide"
            >
              {{ localIsLogin ? "Zaloguj się" : "Zarejestruj się" }}
            </h3>

            <!-- Sekcja przełączająca formularze login/register -->
            <Transition
              mode="out-in"
              enter-active-class="duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              leave-active-class="duration-200 ease-in"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div :key="localIsLogin" class="w-full">
                <form @submit.prevent="onSubmit" class="space-y-4 sm:space-y-6">
                  <!-- Pole input dla adresu e-mail -->
                  <div class="group">
                    <label class="text-sm font-medium">Email</label>

                    <input
                      ref="emailRef"
                      type="email"
                      name="email"
                      @input="emailError = ''"
                      class="w-full bg-transparent border-b border-border/70 py-2 outline-none transition-colors duration-200 focus:border-primary/80"
                    />

                    <p class="text-red-500 text-xs mt-1 h-5">
                      {{ emailError }}
                    </p>
                  </div>

                  <!-- Pole input dla hasła wraz z ikoną podglądu -->
                  <div class="group">
                    <label class="text-sm font-medium">Hasło</label>

                    <div class="relative mt-1">
                      <input
                        ref="passwordRef"
                        :type="showPassword ? 'text' : 'password'"
                        name="password"
                        @keyup="detectCapsPassword"
                        @keydown="detectCapsPassword"
                        @blur="capsLockOnPassword = false"
                        @input="
                          passwordError = '';
                          if (!$event.target.value) {
                            passwordStrength = 0;
                            passwordStrengthLabel = '';
                          } else {
                            evaluatePasswordStrength($event.target.value);
                          }
                        "
                        class="w-full bg-transparent border-b border-border/70 py-2 pr-9 outline-none transition-colors duration-200 focus:border-primary/80"
                      />

                      <!-- Ikona oka -->
                      <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute top-1/2 right-2 -translate-y-1/2 text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
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

                      <!-- Ostrzeżenie o włączonym CAPS LOCK -->
                      <div
                        v-if="capsLockOnPassword"
                        class="absolute right-9 top-1/2 -translate-y-1/2 text-amber-400 transition-all duration-200"
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

                    <!-- Komunikat błędu wyświetlany pod polem hasła -->
                    <p class="text-red-500 text-xs mt-1 h-5">
                      {{ passwordError }}
                    </p>

                    <!-- Pasek wizualizujący siłę hasła podczas rejestracji -->
                    <div v-if="!localIsLogin" class="mt-3">
                      <div
                        class="h-2 rounded-full bg-border/40 overflow-hidden"
                      >
                        <div
                          :style="{ width: passwordStrength * 20 + '%' }"
                          :class="[
                            'h-full transition-all',
                            passwordStrength <= 2
                              ? 'bg-red-500'
                              : passwordStrength <= 4
                              ? 'bg-yellow-400'
                              : 'bg-green-500',
                          ]"
                        ></div>
                      </div>
                      <p class="text-xs text-text/70 mt-1">
                        {{ passwordStrengthLabel }}
                      </p>
                    </div>
                  </div>

                  <!-- Pole potwierdzenia hasła widoczne tylko w trybie rejestracji -->
                  <div v-if="!localIsLogin" class="group">
                    <label class="text-sm font-medium">Potwierdź hasło</label>

                    <div class="relative mt-1">
                      <input
                        ref="confirmRef"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        name="confirm"
                        @keyup="detectCapsConfirm"
                        @keydown="detectCapsConfirm"
                        @blur="capsLockOnConfirm = false"
                        @input="confirmError = ''"
                        class="w-full bg-transparent border-b border-border/70 py-2 pr-9 outline-none transition-colors duration-200 focus:border-primary/80"
                      />

                      <!-- Ikona oka -->
                      <button
                        type="button"
                        @click="showConfirmPassword = !showConfirmPassword"
                        class="absolute top-1/2 right-2 -translate-y-1/2 text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
                      >
                        <svg
                          v-if="showConfirmPassword"
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

                      <!-- Ostrzeżenie o włączonym CAPS LOCK -->
                      <div
                        v-if="capsLockOnConfirm"
                        class="absolute right-9 top-1/2 -translate-y-1/2 text-amber-400 transition-all duration-200"
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

                    <!-- Komunikat błędu wyświetlany pod polem potwierdzenia hasła -->
                    <p class="text-red-500 text-xs mt-1 h-5">
                      {{ confirmError }}
                    </p>
                  </div>

                  <!-- Checkbox opcji zapamiętania sesji podczas logowania -->
                  <div
                    v-if="localIsLogin"
                    class="flex items-center gap-2 text-xs mt-1"
                  >
                    <input
                      type="checkbox"
                      v-model="rememberMe"
                      class="accent-primary cursor-pointer"
                    />
                    <span class="text-text/70">Zapamiętaj mnie</span>
                  </div>

                  <!-- Główny przycisk wysyłający formularz -->
                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full mt-3 py-3 rounded-full font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary/35 cursor-pointer"
                  >
                    {{ localIsLogin ? "Zaloguj" : "Zarejestruj" }}
                  </button>
                </form>

                <!-- Link umożliwiający reset hasła -->
                <button
                  v-if="localIsLogin"
                  @click="handleResetPassword"
                  class="text-xs text-primary underline mt-4 cursor-pointer transition-colors duration-200 hover:text-secondary"
                >
                  Zapomniałeś hasła?
                </button>

                <div class="mt-6 flex flex-col gap-3">
                  <!-- Przycisk logowania za pomocą konta Google -->
                  <button
                    @click="handleGoogle"
                    class="w-full flex items-center justify-center gap-3 h-11 bg-[#131314] text-white rounded-md transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <img
                      src="@/assets/images/google.svg"
                      class="w-5 opacity-90"
                    />
                    Google
                  </button>

                  <!-- Przycisk logowania za pomocą konta Facebook -->
                  <button
                    @click="handleFacebook"
                    class="w-full flex items-center justify-center gap-3 h-11 bg-[#1877F2] text-white rounded-md transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <img
                      src="@/assets/images/facebook.svg"
                      class="w-5 opacity-90"
                    />
                    Facebook
                  </button>
                </div>

                <!-- Przełącznik zmieniający tryb między logowaniem a rejestracją -->
                <p class="mt-6 text-sm text-text/70 text-center">
                  <template v-if="localIsLogin">
                    Nie masz konta?
                    <button
                      @click="
                        () => {
                          localIsLogin = false;
                          clearAllFields();
                          clearErrors();
                        }
                      "
                      class="font-semibold text-primary underline cursor-pointer transition-colors duration-200 hover:text-secondary"
                    >
                      Zarejestruj się
                    </button>
                  </template>

                  <template v-else>
                    Masz już konto?
                    <button
                      @click="
                        () => {
                          localIsLogin = true;
                          clearAllFields();
                          clearErrors();
                        }
                      "
                      class="font-semibold text-primary underline cursor-pointer transition-colors duration-200 hover:text-secondary"
                    >
                      Zaloguj się
                    </button>
                  </template>
                </p>
              </div>
            </Transition>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
