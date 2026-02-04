<script setup>
// Props przekazywane z widoku ChapterView
defineProps({
  estimatedTime: {
    type: String,
    default: "-",
  },

  difficulty: {
    type: String,
    default: "-",
  },

  quizQuestions: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <!-- Karta z informacjami o rozdziale -->
  <section
    class="rounded-2xl border border-border/60 bg-linear-to-br from-card to-section/80 px-5 py-5 md:px-6 md:py-6 space-y-5 shadow-sm transition-all duration-300 hover:shadow-md"
  >
    <!-- Nagłówek karty -->
    <header class="space-y-1">
      <h2 class="text-sm md:text-[15px] font-semibold text-text">
        Informacje o rozdziale
      </h2>

      <p class="text-xs md:text-sm text-text/60 leading-relaxed">
        Krótkie podsumowanie tego, czego możesz się tu spodziewać.
      </p>
    </header>

    <!-- Lista meta danych -->
    <dl class="space-y-3 text-sm">
      <!-- Szacowany czas -->
      <div
        class="flex items-center justify-between gap-3 pb-3 border-b border-border/40"
      >
        <dt class="flex items-center gap-2 text-text/60">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Szacowany czas
        </dt>

        <dd
          class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold whitespace-nowrap"
        >
          {{ estimatedTime }}
        </dd>
      </div>

      <!-- Poziom trudności -->
      <div
        class="flex items-center justify-between gap-3 pb-3 border-b border-border/40"
      >
        <dt class="flex items-center gap-2 text-text/60">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Poziom trudności
        </dt>

        <dd
          class="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold whitespace-nowrap"
        >
          {{ difficulty }}
        </dd>
      </div>

      <!-- Informacja o quizie -->
      <div
        v-if="quizQuestions > 0"
        class="flex items-center justify-between gap-3"
      >
        <dt class="flex items-center gap-2 text-text/60">
          <svg
            class="w-4 h-4"
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
          Pytania w quizie
        </dt>

        <dd
          class="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold whitespace-nowrap"
        >
          {{ quizQuestions }}
        </dd>
      </div>
    </dl>

    <!-- Informacja o zaliczeniu rozdziału -->
    <div
      class="rounded-xl border border-accent/25 bg-accent/5 italic px-4 py-3 flex items-start gap-2"
    >
      <svg
        class="w-4 h-4 text-accent mt-0.5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p class="text-xs text-text/70 leading-relaxed">
        Po ukończeniu quizu rozdział zostanie oznaczony jako wykonany w Twojej
        ścieżce modułu.
      </p>
    </div>
  </section>
</template>
