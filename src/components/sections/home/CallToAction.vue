<script setup>
// Import funkcji otwierającej modal logowania/rejestracji
import { ref } from "vue";
import AuthModal from "@/components/sections/auth/AuthModal.vue";
import { unlockScroll } from "@/composables/useScrollLock";

// Stan modala logowania/rejestracji
const showAuthModal = ref(false);
const isLoginMode = ref(true);

// Otwieranie odpowiedniego widoku (login lub register)
function openAuth(isLogin = true) {
  isLoginMode.value = isLogin;
  showAuthModal.value = true;
}
</script>

<template>
  <section class="py-14 bg-section">
    <div class="max-w-4xl mx-auto px-4">
      <div
        class="text-center rounded-3xl border border-border bg-card shadow-sm p-8 md:p-10"
      >
        <!-- Nagłówek -->
        <h2
          class="text-2xl md:text-3xl font-extrabold text-primary animate-fade-slide-delay-6"
        >
          Załóż konto i zrób pierwszy quiz
        </h2>

        <!-- Opis -->
        <p class="mt-2 text-text/80 animate-fade-slide-delay-6">
          To wciąż 100% darmowy projekt - bez reklam i paywalli.
        </p>

        <!-- Przyciski akcji -->
        <div
          class="mt-6 flex flex-col sm:flex-row gap-3 justify-center animate-fade-slide-delay-7"
        >
          <!-- Rejestracja -->
          <button
            type="button"
            @click="openAuth(false)"
            class="px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-sm transition-all duration-300 cursor-pointer hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            Zarejestruj się
          </button>

          <!-- Logowanie -->
          <button
            type="button"
            @click="openAuth(true)"
            class="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold shadow-sm transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            Mam konto - Zaloguj
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal logowania/rejestracji -->
  <AuthModal
    v-if="showAuthModal"
    :is-login="isLoginMode"
    @close="
      () => {
        showAuthModal = false;
      }
    "
  />
</template>
