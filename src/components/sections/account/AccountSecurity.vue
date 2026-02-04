<script setup>
// Podstawowe importy
import { ref, nextTick, computed } from "vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { showToast } from "@/composables/useToast";

// Firebase - autoryzacja i zmiana hasła
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { changeUserPassword } from "@/components/services/account";

// Użytkownik
import { useUser } from "@/composables/useUser";
const { authUser } = useUser();

// Router
import router from "@/router";

// Provider użytkownika
const providerId = computed(
  () => authUser.value?.providerData?.[0]?.providerId || "password"
);

// Dane formularza
const form = ref({
  current: "",
  next: "",
  confirm: "",
});

// Błędy pól
const errorCurrent = ref("");
const errorNext = ref("");
const errorConfirm = ref("");

// Loading
const loading = ref(false);

// Referencje do inputów
const currentRef = ref(null);
const nextRef = ref(null);
const confirmRef = ref(null);

// Siła hasła
const passwordStrength = ref(0);
const passwordLabel = ref("");
const nextPasswordValue = ref("");

// Przewijanie do góry
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Resetowanie pól formularza
function clearAllFields() {
  form.value = { current: "", next: "", confirm: "" };

  resetStrength();
  nextPasswordValue.value = "";

  capsCurrent.value = false;
  capsNext.value = false;
  capsConfirm.value = false;

  showCurrent.value = false;
  showNext.value = false;
  showConfirm.value = false;
}

// Czyszczenie paska siły hasła
function resetStrength() {
  passwordStrength.value = 0;
  passwordLabel.value = "";
}

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

// Pokazywanie haseł
const showCurrent = ref(false);
const showNext = ref(false);
const showConfirm = ref(false);

// CAPS LOCK
const capsCurrent = ref(false);
const capsNext = ref(false);
const capsConfirm = ref(false);

const detectCapsCurrent = (e) =>
  (capsCurrent.value = e.getModifierState?.("CapsLock"));

const detectCapsNext = (e) =>
  (capsNext.value = e.getModifierState?.("CapsLock"));

const detectCapsConfirm = (e) =>
  (capsConfirm.value = e.getModifierState?.("CapsLock"));

// Walidacja jakości hasła
function validateNewPassword(pwd) {
  // Brak hasła
  if (!pwd) {
    errorNext.value = "Wpisz nowe hasło.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  // Minimalna długość
  if (pwd.length < 8) {
    errorNext.value = "Hasło musi mieć co najmniej 8 znaków.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  // Duża litera
  if (!/[A-Z]/.test(pwd)) {
    errorNext.value = "Hasło musi zawierać dużą literę.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  // Mała litera
  if (!/[a-z]/.test(pwd)) {
    errorNext.value = "Hasło musi zawierać małą literę.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  // Cyfra
  if (!/\d/.test(pwd)) {
    errorNext.value = "Hasło musi zawierać cyfrę.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  // Znak specjalny
  if (!/[^A-Za-z0-9]/.test(pwd)) {
    errorNext.value = "Hasło musi zawierać znak specjalny.";
    resetStrength();
    nextPasswordValue.value = "";
    nextTick(() => nextRef.value?.focus());
    return false;
  }

  return true;
}

// Logika zmiany hasła
async function submit() {
  // Reset błędów
  errorCurrent.value = "";
  errorNext.value = "";
  errorConfirm.value = "";

  // Walidacja obecnego hasła
  if (!form.value.current) {
    errorCurrent.value = "Wpisz obecne hasło.";
    form.value.current = "";
    await nextTick();
    currentRef.value?.focus();
    return;
  }

  loading.value = true;

  // Reautoryzacja użytkownika
  try {
    const credential = EmailAuthProvider.credential(
      authUser.value.email,
      form.value.current
    );
    await reauthenticateWithCredential(authUser.value, credential);
  } catch (err) {
    // Złe hasło
    if (
      err.code === "auth/wrong-password" ||
      err.code === "auth/invalid-credential"
    ) {
      errorCurrent.value = "Niepoprawne obecne hasło.";
      await nextTick();
      currentRef.value?.focus();
      loading.value = false;
      return;
    }

    // Limit prób
    if (err.code === "auth/too-many-requests") {
      errorCurrent.value = "Zbyt wiele prób. Spróbuj później.";
      clearAllFields();
      loading.value = false;
      return;
    }

    // Inny błąd
    errorCurrent.value = "Wystąpił błąd. Spróbuj ponownie.";
    clearAllFields();
    loading.value = false;
    return;
  }

  // Sprawdzenie: Nowe hasło = Stare
  if (form.value.next && form.value.next === form.value.current) {
    errorNext.value = "Nowe hasło nie może być takie samo jak obecne.";
    form.value.next = "";
    await nextTick();
    nextRef.value?.focus();
    loading.value = false;
    return;
  }

  // Walidacja jakości nowego hasła
  if (!validateNewPassword(form.value.next)) {
    loading.value = false;
    return;
  }

  // Brak potwierdzenia
  if (!form.value.confirm) {
    errorConfirm.value = "Potwierdź hasło.";
    form.value.confirm = "";
    await nextTick();
    confirmRef.value?.focus();
    loading.value = false;
    return;
  }

  // Hasła różne
  if (form.value.next !== form.value.confirm) {
    errorConfirm.value = "Hasła się różnią.";
    form.value.confirm = "";
    await nextTick();
    confirmRef.value?.focus();
    loading.value = false;
    return;
  }

  // Zmiana hasła
  try {
    await changeUserPassword(form.value.current, form.value.next);
    await authUser.value.reload();
    await authUser.value.auth.signOut();

    showToast("Hasło zostało zmienione. Zaloguj się ponownie 🔐");
    scrollToTop();
    router.push("/");
  } catch (err) {
    console.error(err);
    clearAllFields();
    errorCurrent.value = "Wystąpił błąd podczas zmiany hasła.";
  }

  loading.value = false;
}
</script>

<template>
  <!-- Główna sekcja formularza -->
  <section
    class="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur animate-fade-in"
  >
    <SectionTitle
      title="Bezpieczeństwo"
      subtitle="Zmień hasło do konta"
      class="animate-fade-slide"
    />

    <!-- Informacja dla użytkowników Google / Facebook -->
    <div
      v-if="providerId !== 'password'"
      class="mt-6 text-sm text-text/70 p-4 rounded-xl bg-bg/60 border border-border/60 animate-fade-slide-delay"
    >
      Twoje konto jest połączone przez
      <strong>{{ providerId === "google.com" ? "Google" : "Facebook" }}</strong
      >.
      <br />
      Hasło nie może zostać zmienione, ponieważ logowanie odbywa się przez
      zewnętrznego dostawcę.
    </div>

    <!-- Formularz zmiany hasła -->
    <form
      v-if="providerId === 'password'"
      class="mt-8 grid gap-8 sm:grid-cols-2"
      @submit.prevent="submit"
    >
      <!-- Obecne hasło -->
      <div class="sm:col-span-2 animate-fade-slide-delay">
        <label class="block text-sm font-medium text-text/80 mb-2">
          Obecne hasło
        </label>

        <div class="relative">
          <input
            :type="showCurrent ? 'text' : 'password'"
            ref="currentRef"
            v-model="form.current"
            @keydown="detectCapsCurrent"
            @keyup="detectCapsCurrent"
            @blur="capsCurrent = false"
            :class="[
              'w-full rounded-xl bg-bg/90 p-3 pr-12 text-sm outline-none transition-all duration-300',
              errorCurrent
                ? 'border border-border/70 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                : 'border border-border/70 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40',
            ]"
          />

          <!-- Ikona oka -->
          <button
            type="button"
            @click="showCurrent = !showCurrent"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-primary transition cursor-pointer"
          >
            <svg
              v-if="showCurrent"
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

          <!-- Ikona CAPS LOCK -->
          <div
            v-if="capsCurrent"
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

        <p class="text-red-500 text-xs mt-1 h-4">{{ errorCurrent }}</p>
      </div>

      <!-- Nowe hasło -->
      <div class="animate-fade-slide-delay-2">
        <label class="block text-sm font-medium text-text/80 mb-2">
          Nowe hasło
        </label>

        <div class="relative">
          <input
            :type="showNext ? 'text' : 'password'"
            ref="nextRef"
            v-model="form.next"
            @input="
              nextPasswordValue = $event.target.value;
              errorNext = '';

              if (!nextPasswordValue) {
                passwordStrength = 0;
                passwordLabel = '';
              } else {
                evaluateStrength(nextPasswordValue);
              }
            "
            @keydown="detectCapsNext"
            @keyup="detectCapsNext"
            @blur="capsNext = false"
            :class="[
              'w-full rounded-xl bg-bg/90 p-3 pr-12 text-sm outline-none transition-all duration-300',
              errorNext
                ? 'border border-border/70 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                : 'border border-border/70 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40',
            ]"
          />

          <!-- Ikona oka -->
          <button
            type="button"
            @click="showNext = !showNext"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-primary transition cursor-pointer"
          >
            <svg
              v-if="showNext"
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

          <!-- Ikona CAPS LOCK -->
          <div
            v-if="capsNext"
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

        <p class="text-red-500 text-xs mt-1 h-4">{{ errorNext }}</p>

        <!-- Pasek siły hasła -->
        <div class="mt-4">
          <div class="h-2.5 w-full bg-border/40 rounded-full overflow-hidden">
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

          <p class="text-xs text-text/70 mt-1">
            {{ nextPasswordValue ? passwordLabel : "" }}
          </p>
        </div>
      </div>

      <!-- Potwierdzenie nowego hasła -->
      <div class="animate-fade-slide-delay-2">
        <label class="block text-sm font-medium text-text/80 mb-2">
          Potwierdź hasło
        </label>

        <div class="relative">
          <input
            :type="showConfirm ? 'text' : 'password'"
            ref="confirmRef"
            v-model="form.confirm"
            @keydown="detectCapsConfirm"
            @keyup="detectCapsConfirm"
            @blur="capsConfirm = false"
            @input="errorConfirm = ''"
            :class="[
              'w-full rounded-xl bg-bg/90 p-3 pr-12 text-sm outline-none transition-all duration-300',
              errorConfirm
                ? 'border border-border/70 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                : 'border border-border/70 hover:border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary/40',
            ]"
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

          <!-- Ikona CAPS LOCK -->
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

        <p class="text-red-500 text-xs mt-1 h-4">{{ errorConfirm }}</p>
      </div>

      <!-- Przycisk zapisu -->
      <div
        class="sm:col-span-2 flex justify-end animate-fade-slide-delay-3 will-change-transform"
      >
        <button
          type="submit"
          :disabled="loading"
          class="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow transition-all duration-300 hover:bg-secondary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 cursor-pointer"
        >
          {{ loading ? "Zapisywanie..." : "Zapisz nowe hasło" }}
        </button>
      </div>
    </form>
  </section>
</template>
