<script setup>
// Importy potrzebne do obliczeń
import { computed } from "vue";

// Dane wejściowe podsumowania kursu
const props = defineProps({
  completedChapters: {
    type: Number,
    default: 0,
  },

  totalChapters: {
    type: Number,
    default: 0,
  },
});

// Obliczony procent postępu kursu
const progressPercent = computed(() => {
  if (!props.totalChapters) return 0;

  const value = (props.completedChapters / props.totalChapters) * 100;
  return Math.round(Math.min(Math.max(value, 0), 100));
});
</script>

<template>
  <!-- Karta podsumowania postępu w kursie -->
  <section
    class="rounded-2xl border border-border/60 bg-linear-to-br from-card to-section/80 px-6 py-5 md:px-7 md:py-6 shadow-sm animate-fade-in"
  >
    <!-- Nagłówek: opis + procent -->
    <div class="flex items-start justify-between gap-6 animate-fade-slide">
      <!-- Informacje tekstowe -->
      <div class="space-y-1">
        <h2 class="text-sm md:text-[15px] font-semibold text-text">
          Postęp w kursie
        </h2>

        <p class="text-xs md:text-sm text-text/60">
          <template v-if="totalChapters">
            {{ completedChapters }} z {{ totalChapters }} rozdziałów ukończonych
          </template>
          <template v-else> - rozdziałów ukończonych </template>
        </p>
      </div>

      <!-- Procent postępu -->
      <div class="text-right leading-tight rounded-lg px-3 py-2 bg-section/90">
        <span class="block text-[11px] uppercase tracking-wide text-text/40">
          Postęp
        </span>
        <span class="text-lg font-bold text-accent">
          <template v-if="totalChapters"> {{ progressPercent }}% </template>
          <template v-else> - </template>
        </span>
      </div>
    </div>

    <!-- Pasek postępu -->
    <div class="mt-4 space-y-3 animate-fade-slide-delay">
      <!-- Track paska -->
      <div
        class="relative h-3 w-full overflow-hidden rounded-full bg-section/90"
      >
        <!-- Wypełnienie paska -->
        <div
          class="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-500 ease-out"
          :style="{ width: `${progressPercent}%` }"
        />
      </div>

      <!-- Hint edukacyjny -->
      <p
        class="text-[11px] md:text-xs text-text/50 leading-relaxed animate-fade-slide-delay"
      >
        Regularne powroty do kursu zwiększają skuteczność nauki i utrwalają
        wiedzę.
      </p>
    </div>
  </section>
</template>
