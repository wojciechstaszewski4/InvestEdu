<script setup>
// Import karty pojedynczego rozdziału
import ChapterCard from "./ChapterCard.vue";

// Dane wejściowe listy rozdziałów
const props = defineProps({
  chapters: {
    type: Array,
    default: () => [],
  },

  moduleId: {
    type: Number,
    required: true,
  },

  courseId: {
    type: Number,
    required: true,
  },

  completedChapterIds: {
    type: Array,
    default: () => [],
  },

  previousCourseCompleted: {
    type: Boolean,
    default: false,
  },

  previousModuleCompleted: {
    type: Boolean,
    default: false,
  },
});

// Dane startowe dla pierwszego kursu w pierwszym module
const FIRST_MODULE_ID = 1;
const FIRST_COURSE_ID = 1;

// Rozmiar wcięcia drabinki rozdziałów
const LADDER_STEP_PX = 24;

// Funkcja sprawdzająca, czy rozdział jest odblokowany
const isChapterUnlocked = (index) => {
  // Absolutny start aplikacji
  if (
    index === 0 &&
    props.moduleId === FIRST_MODULE_ID &&
    props.courseId === FIRST_COURSE_ID
  ) {
    return true;
  }

  // Pierwszy kurs w module (ale nie pierwszy moduł)
  if (index === 0 && props.courseId === 1) {
    return props.previousModuleCompleted;
  }

  // Pierwszy rozdział kolejnego kursu
  if (index === 0 && props.courseId > 1) {
    return props.previousCourseCompleted;
  }

  // Kolejne rozdziały
  if (index > 0) {
    const prevId = props.chapters[index - 1]?.id;
    return !!prevId && props.completedChapterIds.includes(prevId);
  }

  return false;
};

// Styl drabinki dla listy rozdziałów - tylko dla desktopa
const ladderStyle = (index) => ({
  "--ladder-offset": `${index * LADDER_STEP_PX}px`,
});
</script>

<template>
  <!-- Sekcja ścieżki kursu -->
  <section class="space-y-4 md:space-y-5 2xl:space-y-6 animate-fade-in">
    <!-- Nagłówek sekcji -->
    <div class="space-y-1">
      <h2 class="text-sm md:text-[15px] font-semibold text-text">
        Ścieżka kursu
      </h2>

      <p class="text-xs md:text-sm text-muted-foreground">
        Rozdziały uporządkowane w kolejności rekomendowanej do nauki.
      </p>
    </div>

    <!-- Lista rozdziałów -->
    <ul class="space-y-3 md:space-y-4">
      <li
        v-for="(chapter, idx) in chapters"
        :key="chapter.id"
        class="relative flex gap-3 md:gap-4 animate-fade-slide"
        :style="{ animationDelay: `${idx * 60}ms` }"
      >
        <!-- Oś postępu po lewej stronie -->
        <div class="flex flex-col items-center pt-1 shrink-0">
          <!-- Kropka reprezentująca rozdział -->
          <span
            class="inline-flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full border md:border-2 bg-bg"
            :class="[
              // Kropka jest w kolorze akcentu, jeśli:
              // - rozdział jest ukończony
              // - jest odblokowany (pierwszy lub po ukończeniu poprzedniego)
              completedChapterIds.includes(chapter.id) || isChapterUnlocked(idx)
                ? 'border-accent'
                : 'border-border',
            ]"
          >
            <span
              class="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-colors"
              :class="[
                completedChapterIds.includes(chapter.id) ||
                isChapterUnlocked(idx)
                  ? 'bg-accent'
                  : 'bg-border',
              ]"
            />
          </span>

          <!-- Linia łącząca z kolejnym rozdziałem -->
          <span
            v-if="idx < chapters.length - 1"
            class="mt-1 w-0.5 flex-1 transition-colors"
            :class="[
              // Rozdział ukończony -> linia w pełnym akcencie
              completedChapterIds.includes(chapter.id)
                ? 'bg-accent'
                : // Rozdział odblokowany, ale jeszcze nieukończony -> jaśniejsza linia
                isChapterUnlocked(idx)
                ? 'bg-text/40'
                : // Rozdział zablokowany -> linia przygaszona
                  'bg-border',
            ]"
          />
        </div>

        <!-- Karta rozdziału -->
        <div
          class="flex-1 min-w-0 transition-all duration-300 md:mr-(--ladder-offset)"
          :style="ladderStyle(idx)"
        >
          <ChapterCard
            :chapter="chapter"
            :index="idx + 1"
            :module-id="moduleId"
            :course-id="courseId"
            :is-completed="completedChapterIds.includes(chapter.id)"
            :is-unlocked="isChapterUnlocked(idx)"
          />
        </div>
      </li>
    </ul>
  </section>
</template>
