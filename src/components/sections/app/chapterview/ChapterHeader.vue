<script setup>
// Importy potrzebne do routingu
import { ROUTE } from "@/router";

// Props przekazywane z widoku ChapterView
defineProps({
  moduleId: {
    type: Number,
    required: true,
  },

  courseId: {
    type: Number,
    required: true,
  },

  chapterId: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <!-- Główny nagłówek rozdziału -->
  <header
    class="relative rounded-2xl border border-border/60 bg-linear-to-br from-card to-section/80 px-6 py-5 md:px-8 md:py-7 shadow-sm"
  >
    <!-- Zawartość nagłówka -->
    <div class="space-y-5 max-w-3xl">
      <!-- Breadcrumb -->
      <div class="flex flex-wrap items-center gap-2 text-xs">
        <span
          class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold"
        >
          Moduł {{ moduleId }}
        </span>

        <span class="text-text/30">→</span>

        <span
          class="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-3 py-1 font-semibold"
        >
          Kurs {{ courseId }}
        </span>

        <span class="text-text/30">→</span>

        <span
          class="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 font-semibold"
        >
          Rozdział {{ chapterId }}
        </span>
      </div>

      <!-- Tytuł i opis rozdziału -->
      <div class="space-y-2">
        <h1
          class="text-[22px] md:text-[26px] 2xl:text-[28px] font-extrabold tracking-tight text-text/85 leading-tight"
        >
          {{ title }}
        </h1>

        <p
          v-if="subtitle"
          class="text-sm md:text-[15px] text-text/70 leading-relaxed"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Informacja o automatycznym zapisie postępu -->
      <div class="flex items-center gap-2 pt-3 border-t border-border/40">
        <svg
          class="w-4 h-4 text-text/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p class="text-xs text-text/50">Postęp zapisuje się automatycznie</p>
      </div>
    </div>

    <!-- Przyciski nawigacyjne -->
    <div
      class="mt-6 flex flex-col gap-3 w-full items-stretch md:w-auto md:items-end md:mt-0 md:absolute md:right-6 md:top-[40%] md:-translate-y-1/2"
    >
      <!-- Primary: Wróć do kursu -->
      <RouterLink
        :to="{
          name: ROUTE.COURSE,
          params: { moduleId, courseId },
        }"
        class="inline-flex items-center justify-center whitespace-nowrap w-full md:w-auto h-10 sm:h-11 px-6 text-sm rounded-xl bg-primary font-semibold text-white shadow-sm transition-all duration-300 hover:bg-secondary hover:brightness-105 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
      >
        ← Wróć do kursu
      </RouterLink>

      <!-- Secondary: Strona główna -->
      <RouterLink
        :to="{ name: ROUTE.MODULES }"
        class="inline-flex items-center justify-center whitespace-nowrap w-full md:w-auto h-10 sm:h-11 px-6 text-sm rounded-xl font-semibold border border-border/50 bg-section/40 text-text/80 shadow-sm transition-all duration-300 hover:border-accent hover:text-accent hover:bg-section/60 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
      >
        ⌂ Strona główna
      </RouterLink>
    </div>
  </header>
</template>
