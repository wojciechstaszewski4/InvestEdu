<script setup>
import { toastMessage, toastVisible } from "@/composables/useToast.js";

// Toast używany w template - uciszenie lintera
void toastMessage;
void toastVisible;
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-[0.98]"
    >
      <!-- Pływające powiadomienie -->
      <div
        v-if="toastVisible"
        class="fixed top-6 left-4 right-4 sm:left-auto sm:right-[calc(2.5rem+var(--scrollbar-width,0px))] mx-auto sm:mx-0 px-4 py-3 sm:px-6 sm:py-3.5 max-w-[90vw] sm:max-w-none rounded-xl bg-primary text-white text-sm sm:text-base font-semibold shadow-[0_4px_18px_-2px_rgba(0,0,0,0.35)] z-9999 pointer-events-none select-none text-center sm:text-left"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </Teleport>
</template>
