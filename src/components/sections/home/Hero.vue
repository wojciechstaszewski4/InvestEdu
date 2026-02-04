<script setup>
// Importy komponentów
import AuthPopup from "@/components/sections/auth/AuthPopup.vue";
import AuthModal from "@/components/sections/auth/AuthModal.vue";

// Importy narzędzi Vue
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

// Firebase Auth
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Scroll lock
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";

// Dane sekcji
const title = "Ucz się inwestowania po ludzku";
const subtitle =
  "Szybkie quizy, punkty doświadczenia, serie, poziomy i relaks.";

// Stan komponentu
const showAuthPopup = ref(false);
const showAuthModal = ref(false);
const isLoginMode = ref(true);
const user = ref(null);

// Router + Firebase
const router = useRouter();
const auth = getAuth();

// Pobieramy aktualny stan logowania
onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});

// Logika przycisków "Zacznij teraz"
function handlePrimary() {
  if (user.value) {
    router.push({ name: "app" });
  } else {
    showAuthPopup.value = true;
  }
}

// Obsługa Popup -> Modal
function handlePopupAuth(type) {
  isLoginMode.value = type === "login";
  showAuthPopup.value = false;
  showAuthModal.value = true;
}

// Blokada scrolla dla Popup/Modal
watch([showAuthPopup, showAuthModal], ([popup, modal]) => {
  popup || modal ? lockScroll() : unlockScroll();
});
</script>

<template>
  <section class="bg-section">
    <div class="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
      <!-- Nagłówek -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight relative inline-block animate-fade-slide bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        {{ title }}
        <span
          class="absolute -bottom-3 left-0 w-full h-1.5 sm:h-2 rounded-full bg-accent/40"
        ></span>
      </h1>

      <!-- Podtytuł -->
      <p
        class="mt-4 text-text/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-slide-delay"
      >
        {{ subtitle }}
      </p>

      <!-- Przycisk CTA -->
      <div
        class="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-slide-delay-2"
      >
        <button
          type="button"
          @click="handlePrimary"
          class="px-10 py-5 rounded-2xl bg-primary text-white font-semibold shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer"
        >
          Zacznij teraz
        </button>
      </div>
    </div>
  </section>

  <!-- Popup "Wymagane konto" -->
  <AuthPopup
    v-if="showAuthPopup"
    @close="
      () => {
        showAuthPopup = false;
        unlockScroll();
      }
    "
    @open-auth="handlePopupAuth"
  />

  <!-- Modal logowania/rejestracji -->
  <AuthModal
    v-if="showAuthModal"
    :is-login="isLoginMode"
    @close="
      () => {
        showAuthModal = false;
        unlockScroll();
      }
    "
  />
</template>
