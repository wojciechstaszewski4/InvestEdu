<script setup>
// Importy potrzebne do wyliczeń i routingu
import { computed } from "vue";
import { ROUTE } from "@/router";
import { RouterLink } from "vue-router";

// Dane wejściowe karty rozdziału
const props = defineProps({
  chapter: {
    type: Object,
    required: true,
  },

  moduleId: {
    type: Number,
    required: true,
  },

  courseId: {
    type: Number,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  index: {
    type: Number,
    default: 1,
  },

  isUnlocked: {
    type: Boolean,
    default: true,
  },
});

// Docelowa trasa do widoku rozdziału
const target = computed(() => {
  if (props.moduleId == null || props.courseId == null || !props.chapter?.id) {
    return null;
  }

  return {
    name: ROUTE.LESSON_THEORY,
    params: {
      moduleId: props.moduleId,
      courseId: props.courseId,
      chapterId: props.chapter.id,
    },
  };
});

// Status pokazywany w badge (kolor zmienia tylko kropka)
const status = computed(() => {
  if (!props.isUnlocked) return { label: "Zablokowany", dot: "bg-border" };
  if (props.isCompleted) return { label: "Ukończony", dot: "bg-primary" };
  if (props.isActive) return { label: "W trakcie", dot: "bg-secondary" };
  return { label: "Do przerobienia", dot: "bg-accent" };
});

// Tekst CTA zależny od stanu rozdziału
const ctaLabel = computed(() => {
  if (!props.isUnlocked) return "Odblokuj";
  if (props.isActive) return "Kontynuuj";
  if (props.isCompleted) return "Powtórz";
  return "Rozpocznij";
});

// Czas rozdziału lub fallback, jeśli brak w danych
const timeLabel = computed(() => {
  return props.chapter?.estimatedTime ? props.chapter.estimatedTime : "- min";
});
</script>

<template>
  <!-- Karta rozdziału -->
  <component
    :is="isUnlocked && target ? RouterLink : 'div'"
    :to="isUnlocked && target ? target : undefined"
    class="relative group block overflow-hidden rounded-2xl border min-w-0 w-full px-4 py-4 md:px-6 md:py-5 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg animate-fade-slide"
    :style="{ animationDelay: `${index * 60}ms` }"
    :class="[
      // Bazowy wygląd karty
      'bg-linear-to-br from-card to-section/90 border-border/80 shadow-sm',

      // Rozdział odblokowany vs zablokowany
      isUnlocked
        ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg'
        : 'cursor-not-allowed bg-section/60 border-border/50 opacity-70',
    ]"
  >
    <!-- Delikatna poświata na hover (tylko dla odblokowanych) -->
    <div
      v-if="isUnlocked"
      class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div
        class="absolute inset-0 rounded-2xl bg-[radial-gradient(70%_70%_at_50%_120%,color-mix(in_srgb,var(--color-primary)_20%,transparent),transparent_70%)]"
      />
    </div>

    <!-- Górna część: numer rozdziału, tytuł, opis, status -->
    <div
      class="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
    >
      <div class="space-y-2">
        <!-- Badge z numerem rozdziału -->
        <span
          class="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-text/70"
          :class="!isUnlocked && 'opacity-60'"
        >
          Rozdział {{ index }}
        </span>

        <!-- Tytuł rozdziału -->
        <h3
          class="text-base md:text-lg font-semibold tracking-tight wrap-break-word"
          :class="isUnlocked ? 'text-text' : 'text-text/50'"
        >
          {{ chapter.title }}
        </h3>

        <!-- Opis rozdziału -->
        <p
          v-if="chapter.description"
          class="text-sm leading-relaxed max-w-2xl"
          :class="isUnlocked ? 'text-text/70' : 'text-text/40'"
        >
          {{ chapter.description }}
        </p>
      </div>

      <!-- Badge statusu (stałe tło i tekst, zmienna kropka) -->
      <div
        class="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text/70 self-start sm:self-auto sm:ml-auto"
        :class="!isUnlocked && 'opacity-60'"
      >
        <span class="h-2 w-2 rounded-full" :class="status.dot" />
        <span>{{ status.label }}</span>
      </div>
    </div>

    <!-- Dolna część: czas + CTA -->
    <div
      class="relative mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 text-sm"
      :class="isUnlocked ? 'text-text/70' : 'text-text/40'"
    >
      <!-- Czas rozdziału -->
      <span
        class="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs md:px-3 md:py-1.5 md:text-sm font-medium text-primary"
      >
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

        {{ timeLabel }}
      </span>

      <!-- CTA po prawej -->
      <span
        class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs md:px-4 md:py-1.5 md:text-sm font-semibold shadow-sm transition-all duration-300"
        :class="
          !isUnlocked
            ? 'bg-bg border border-border text-text/50'
            : isCompleted
            ? 'bg-primary text-white group-hover:bg-primary/90'
            : 'bg-accent text-white group-hover:bg-accent/90'
        "
      >
        <!-- Ikona zależna od dostępności rozdziału -->
        <svg
          v-if="isUnlocked"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M8 5v14l11-7z" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>

        {{ ctaLabel }}
      </span>
    </div>
  </component>
</template>
