<script setup>
// Importy Vue
import { useRoute } from "vue-router";

// Stałe tras aplikacji
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
});

// Dostęp do aktualnej trasy
const route = useRoute();

// Definicja dostępnych sekcji rozdziału
const sections = [
  {
    key: "theory",
    label: "Teoria",
    description: "Poznaj podstawowe koncepcje i zasady",
    icon: "book",
    routeName: ROUTE.LESSON_THEORY,
  },

  {
    key: "quiz",
    label: "Quiz",
    description: "Sprawdź swoją wiedzę w praktyce",
    icon: "quiz",
    routeName: ROUTE.LESSON_QUIZ,
  },
];

// Sprawdzenie, czy dana sekcja jest aktualnie aktywna
const isActive = (section) => route.name === section.routeName;
</script>

<template>
  <!-- Zakładki nawigacyjne rozdziału -->
  <div class="grid gap-4 md:grid-cols-2">
    <RouterLink
      v-for="section in sections"
      :key="section.key"
      :to="{
        name: section.routeName,
        params: { moduleId, courseId, chapterId },
      }"
      class="group relative overflow-hidden rounded-2xl border bg-linear-to-br from-card to-section/80 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 ease-out cursor-pointer"
      :class="
        isActive(section)
          ? 'border-accent ring-1 ring-accent/40 shadow-md'
          : 'border-border/60 hover:border-border hover:shadow-md hover:-translate-y-0.5'
      "
    >
      <!-- Delikatna poświata hover -->
      <div
        class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div
          class="absolute inset-0 rounded-2xl bg-[radial-gradient(70%_70%_at_50%_120%,color-mix(in_srgb,var(--color-accent)_20%,transparent),transparent_70%)]"
        />
      </div>

      <!-- Ikona sekcji -->
      <div
        class="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
        :class="
          isActive(section)
            ? 'bg-accent/15 text-accent scale-105'
            : 'bg-section/70 text-text/50 group-hover:bg-accent/10 group-hover:text-accent'
        "
      >
        <!-- Ikona teorii -->
        <svg
          v-if="section.icon === 'book'"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>

        <!-- Ikona quizu -->
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Treść sekcji -->
      <div class="relative space-y-2">
        <h3
          class="flex items-center justify-between gap-3 text-lg font-semibold tracking-tight text-text"
        >
          {{ section.label }}

          <svg
            class="h-5 w-5 transition-all duration-300 ease-out"
            :class="
              isActive(section)
                ? 'text-accent translate-x-1 scale-110'
                : 'text-text/40 group-hover:text-accent group-hover:translate-x-1'
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </h3>

        <p class="text-sm text-text/60 leading-relaxed">
          {{ section.description }}
        </p>
      </div>

      <!-- Wskaźnik aktywnej sekcji -->
      <div
        v-if="isActive(section)"
        class="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-primary" />
        Aktywne
      </div>
    </RouterLink>
  </div>
</template>
