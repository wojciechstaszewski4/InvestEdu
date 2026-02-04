<script setup>
// Importy potrzebne do wyliczeń i routingu
import { ROUTE } from "@/router";

// Emiter zdarzeń nagłówka kursu / modułu
const emit = defineEmits(["continue"]);

// Props wejściowe nagłówka kursu / modułu
defineProps({
  moduleId: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    default: "-",
  },

  subtitle: {
    type: String,
    default: "-",
  },

  level: {
    type: String,
    default: "-",
  },

  chaptersCount: {
    type: Number,
    default: 0,
  },

  estimatedTime: {
    type: String,
    default: "-",
  },
});
</script>

<template>
  <!-- Nagłówek kursu / modułu -->
  <header
    class="rounded-2xl border border-border bg-section/80 px-6 py-5 md:px-8 md:py-7 2xl:px-10 2xl:py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-fade-slide"
  >
    <!-- Lewa część -->
    <div class="flex flex-col gap-4">
      <!-- Meta informacje -->
      <div class="flex flex-wrap items-center gap-2 text-xs font-medium">
        <span
          class="rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap px-2 py-0.5 text-[11px] sm:px-3 sm:py-1 sm:text-xs"
        >
          Moduł {{ moduleId }}
        </span>

        <span
          class="rounded-full bg-accent/10 text-accent font-medium whitespace-nowrap px-2 py-0.5 text-[11px] sm:px-3 sm:py-1 sm:text-xs"
        >
          Poziom: {{ level }}
        </span>
      </div>

      <!-- Tytuł + opis -->
      <div>
        <h1
          class="text-[19px] md:text-[22px] 2xl:text-[26px] font-semibold tracking-tight text-text"
        >
          {{ title }}
        </h1>

        <p
          v-if="subtitle"
          class="mt-2 max-w-3xl text-sm md:text-[15px] text-text/70 leading-relaxed"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Metryki -->
      <div
        class="flex flex-wrap items-center gap-4 text-xs md:text-sm text-text/60"
      >
        <span class="inline-flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <template v-if="chaptersCount">
            {{ chaptersCount }} rozdziałów
          </template>
          <template v-else> - rozdziałów </template>
        </span>

        <span class="inline-flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>

          <template v-if="estimatedTime && estimatedTime !== '-'">
            {{ estimatedTime }} materiału
          </template>
          <template v-else> - materiału </template>
        </span>
      </div>
    </div>

    <!-- Prawa część: CTA -->
    <div class="flex flex-col gap-3 w-full md:w-auto md:items-end">
      <button
        type="button"
        @click="emit('continue')"
        class="inline-flex items-center justify-center whitespace-nowrap h-10 px-4 text-[13px] sm:h-11 sm:px-6 sm:text-sm md:w-45 rounded-xl bg-primary font-semibold text-white shadow-sm cursor-pointer transition-all duration-300 hover:bg-secondary hover:brightness-105 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
      >
        ▷ Kontynuuj naukę
      </button>

      <RouterLink
        :to="{ name: ROUTE.MODULES }"
        class="inline-flex items-center justify-center whitespace-nowrap h-10 px-4 text-[13px] sm:h-11 sm:px-6 sm:text-sm md:w-45 rounded-xl font-semibold border border-border/50 bg-section/40 text-text/80 shadow-sm cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:bg-section/60 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
      >
        ← Wróć do strony
      </RouterLink>

      <p class="text-[11px] md:text-xs text-text/50 md:text-right">
        Twój postęp jest zapisywany automatycznie.
      </p>
    </div>
  </header>
</template>
