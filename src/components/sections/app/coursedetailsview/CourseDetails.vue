<script setup>
// Importy
import { computed } from "vue";
import CourseMetaItem from "./CourseMetaItem.vue";
import { COURSE_STATUS } from "@/data/constants";

// Props kursu do wyświetlenia
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },

  completedChapters: {
    type: Number,
    required: true,
  },

  totalChapters: {
    type: Number,
    required: true,
  },
});

// Emitery do komunikacji z widokiem nadrzędnym
const emit = defineEmits(["start", "back"]);

// Przeliczenie szacowanego czasu na godziny
const etaHours = computed(() => {
  const min = props.course?.etaMin;
  if (!min || min <= 0) return 1;
  return Math.max(1, Math.round(min / 60));
});

// Procentowy postęp kursu liczony na podstawie ukończonych rozdziałów
const progress = computed(() => {
  if (!props.totalChapters) return 0;

  return Math.min(
    100,
    Math.round((props.completedChapters / props.totalChapters) * 100)
  );
});

// Etykieta statusu kursu
const statusLabel = computed(() => {
  if (progress.value >= 100) return COURSE_STATUS.COMPLETED;
  if (progress.value > 0) return COURSE_STATUS.IN_PROGRESS;
  return COURSE_STATUS.NOT_STARTED;
});
</script>

<template>
  <!-- Główny kontener widoku kursu -->
  <section class="w-full animate-fade-slide">
    <div
      class="mx-auto max-w-5xl rounded-2xl bg-card/90 border border-border/50 shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden backdrop-blur-md transition-all duration-300"
    >
      <!-- Sekcja nagłówka -->
      <div
        class="px-8 py-7 bg-section/30 dark:bg-section/50 border-b border-border/40"
      >
        <p
          class="text-[11px] font-semibold uppercase tracking-wider text-text/50 mb-1"
        >
          Widok modułu
        </p>

        <h1
          class="relative text-[27px] md:text-[30px] font-extrabold leading-snug bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {{ course.name }}
        </h1>

        <div
          class="mt-2 mb-3 h-0.5 w-20 bg-linear-to-r from-accent rounded-full"
        ></div>

        <p class="mt-2 text-sm text-text/70 leading-relaxed max-w-2xl">
          {{ course.desc }}
        </p>
      </div>

      <!-- Sekcja meta oraz progresu -->
      <div class="px-8 py-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CourseMetaItem
            label="Poziom trudności"
            :value="course.difficulty || '-'"
          />

          <CourseMetaItem
            label="Liczba rozdziałów"
            :value="totalChapters ?? '-'"
          />
          <CourseMetaItem label="Szacowany czas" :value="`~ ${etaHours} h`" />
        </div>

        <!-- Karta progresu -->
        <div
          class="rounded-xl bg-section/30 border border-border/50 p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-lg animate-fade-in"
        >
          <div
            class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm font-medium"
          >
            <span class="text-text/70">
              Status:
              <span class="font-semibold text-text">{{ statusLabel }}</span>
            </span>

            <span class="text-text/70">
              {{ completedChapters }} / {{ totalChapters }} rozdziałów
              <span class="font-semibold text-text">({{ progress }}%)</span>
            </span>
          </div>

          <div
            class="mt-4 h-2.5 w-full bg-section/90 rounded-full overflow-hidden"
          >
            <div
              class="h-full rounded-full bg-linear-to-r from-warm via-warm-light to-gold transition-all duration-500"
              :style="{ width: progress + '%' }"
            ></div>
          </div>

          <p v-if="course.lastChapter" class="mt-3 text-xs text-text/60 italic">
            Ostatnio: <span class="font-medium">{{ course.lastChapter }}</span>
          </p>
        </div>
      </div>

      <!-- Sekcja przycisków akcji -->
      <div
        class="px-8 py-6 border-t border-border/40 bg-card/70 backdrop-blur-sm flex flex-wrap gap-4"
      >
        <!-- Przycisk powrotu -->
        <button
          @click="emit('back')"
          class="px-6 py-3 rounded-xl text-sm font-semibold border border-border/50 bg-section/40 text-text/80 shadow-sm cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:bg-section/60 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
        >
          ← Wróć
        </button>

        <!-- Przycisk rozpoczęcia -->
        <button
          @click="emit('start', course.id)"
          class="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-primary to-secondary shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
        >
          {{ progress === 100 ? "Powtórz" : "Rozpocznij" }}
        </button>
      </div>
    </div>
  </section>
</template>
