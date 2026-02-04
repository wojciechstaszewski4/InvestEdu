<script setup>
// Importy funkcji i narzędzi Vue
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";

// Emit (zamknięcie popupu + otwarcie modala auth)
const emit = defineEmits(["close", "open-auth"]);

// Referencja do pierwszego przycisku
const firstActionRef = ref(null);

// Referencja do głównego okna popupu (do click-outside)
const modalRef = ref(null);

// Lokalny stan widoczności popupu (do animacji zamykania)
const visible = ref(false);

// Zamknięcie popupu z animacją
const closePopup = () => {
  visible.value = false;
};

// Zamknięcie modala poprzez klawisz ESC
const onKey = (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
};

// Zamknięcie modala poprzez kliknięcie poza oknem
const onClickOutside = (e) => {
  if (modalRef.value && !modalRef.value.contains(e.target)) {
    closePopup();
  }
};

// Po zamontowaniu
onMounted(async () => {
  window.addEventListener("keydown", onKey);
  window.addEventListener("pointerdown", onClickOutside);
  lockScroll();

  // Autofocus na pierwszym przycisku
  await nextTick();

  requestAnimationFrame(() => {
    visible.value = true;
  });

  firstActionRef.value?.focus();
});

// Sprzątanie po odmontowaniu
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("pointerdown", onClickOutside);
  unlockScroll();
});

// Otwieranie modala z odpowiednim trybem
function openAuth(type) {
  emit("open-auth", type);
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-leave="emit('close')"
    >
      <div
        v-if="visible"
        class="fixed inset-0 z-50"
        aria-modal="true"
        role="dialog"
        aria-labelledby="auth-title"
      >
        <!-- Tło -->
        <div
          class="absolute inset-0 cursor-pointer bg-black/0 transition-colors duration-300"
          :class="visible ? 'bg-black/50' : 'bg-black/0'"
          @click="closePopup"
        />

        <!-- Okno popupu -->
        <div class="absolute inset-0 flex items-center justify-center px-4">
          <div
            ref="modalRef"
            class="w-full max-w-md rounded-2xl border border-border/80 bg-card shadow-2xl text-center p-7 text-text animate-pop"
          >
            <!-- Zamknij -->
            <button
              class="absolute right-4 top-4 text-xl text-text/60 hover:text-primary transition-all duration-200 cursor-pointer"
              aria-label="Zamknij"
              @click="closePopup"
            >
              ×
            </button>

            <!-- Nagłówek -->
            <h3
              id="auth-title"
              class="text-xl font-bold text-primary mb-3 tracking-tight"
            >
              Wymagane konto
            </h3>

            <!-- Treść -->
            <p class="text-sm text-text/80 leading-relaxed max-w-xs mx-auto">
              Aby przejść dalej, zaloguj się lub zarejestruj.
            </p>

            <!-- Przyciski -->
            <div class="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                ref="firstActionRef"
                class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-primary/70 text-primary hover:bg-primary/10 hover:text-primary hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                @click="openAuth('login')"
              >
                Zaloguj
              </button>

              <button
                class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-linear-to-r from-primary to-secondary text-white shadow-sm hover:brightness-110 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                @click="openAuth('register')"
              >
                Zarejestruj
              </button>
            </div>

            <p class="mt-4 text-xs text-text/60">
              Możesz zrobić to także później z menu.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
