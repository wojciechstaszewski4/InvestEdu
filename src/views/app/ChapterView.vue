<script setup>
// Importy Vue
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

// Firebase Auth
import { getAuth } from "firebase/auth";

// Statyczna mapa danych aplikacji
import { modulesMap } from "@/data/map";

// Stałe trudności poszczególnych kursów
import { DIFFICULTY_LABELS, DIFFICULTIES } from "@/data/constants";

// Loader quizów
import { loadQuiz } from "@/data/loaders/quizzes";

// Serwisy Firestore
import { saveLastLesson } from "@/components/services/lastLessonService";

// Komponenty widoku
import ChapterHeader from "@/components/sections/app/chapterview/ChapterHeader.vue";
import ChapterTabs from "@/components/sections/app/chapterview/ChapterTabs.vue";
import ChapterMetaCard from "@/components/sections/app/chapterview/ChapterMetaCard.vue";

// Router
const route = useRoute();

// Parametry z URL
const moduleId = computed(() => Number(route.params.moduleId));
const courseId = computed(() => Number(route.params.courseId));
const chapterId = computed(() => Number(route.params.chapterId));

// Aktualnie zalogowany użytkownik
const uid = computed(() => getAuth().currentUser?.uid || null);

// Dane aktualnego rozdziału
const chapter = ref(null);

// Flaga ładowania widoku
const isLoading = ref(true);

// Dane quizu (do liczby pytań)
const quiz = ref(null);

// Przechowywanie ostatnio zapisanej lekcji, aby uniknąć nadmiernych zapisów
let lastSavedKey = null;

// Pobranie danych rozdziału ze struktury statycznej
function loadChapter() {
  const module = modulesMap[moduleId.value];
  if (!module) return null;

  const chapters = module.chapters?.[courseId.value];
  if (!chapters) return null;

  return chapters.find((c) => c.id === chapterId.value) || null;
}

// Pobranie quizu dla rozdziału
async function loadQuizData() {
  quiz.value = null;
  quiz.value = await loadQuiz(moduleId.value, courseId.value, chapterId.value);
}

// Zapis ostatnio otwartej lekcji do Firestore
function persistLastLesson() {
  if (!uid.value) return;

  const key = `${moduleId.value}-${courseId.value}-${chapterId.value}`;
  if (key === lastSavedKey) return;

  lastSavedKey = key;

  saveLastLesson(uid.value, moduleId.value, courseId.value, chapterId.value);
}

// Poziom trudności rozdziału na podstawie trudności kursu
const courseDifficulty = computed(() => {
  const diff = modulesMap[moduleId.value]?.courses?.find(
    (c) => c.id === courseId.value
  )?.difficulty;

  return DIFFICULTIES.includes(diff) ? diff : null;
});

// Dane do nagłówka rozdziału
const chapterTitle = computed(() => chapter.value?.title || "Rozdział");
const chapterSubtitle = computed(() => chapter.value?.description || "");

// Meta dane rozdziału
const chapterMeta = computed(() => ({
  estimatedTime: chapter.value?.estimatedTime || "-",
  difficulty:
    DIFFICULTY_LABELS[courseDifficulty.value] || courseDifficulty.value,
  quizQuestions: quiz.value ? quiz.value.questions?.length || 0 : null,
}));

// Inicjalizacja widoku
onMounted(async () => {
  isLoading.value = true;
  chapter.value = loadChapter();
  await loadQuizData();
  persistLastLesson();

  requestAnimationFrame(() => {
    isLoading.value = false;
  });
});

// Reakcja na zmianę w routerze
watch(
  () => [route.params.moduleId, route.params.courseId, route.params.chapterId],
  async () => {
    isLoading.value = true;
    chapter.value = loadChapter();
    await loadQuizData();
    persistLastLesson();
    requestAnimationFrame(() => {
      isLoading.value = false;
    });
  }
);
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-5xl md:max-w-6xl flex-1 flex-col gap-6 md:gap-7 2xl:gap-9 px-4 py-6 md:px-6 md:py-8 2xl:py-10 animate-fade-in"
  >
    <!-- Nagłówek rozdziału -->
    <div
      v-if="isLoading"
      class="rounded-2xl border border-border/60 bg-section/60 px-6 py-5 space-y-4 animate-pulse"
    >
      <div class="flex gap-2">
        <div class="h-6 w-20 rounded-full skeleton"></div>
        <div class="h-6 w-20 rounded-full skeleton"></div>
        <div class="h-6 w-24 rounded-full skeleton"></div>
      </div>

      <div class="h-7 w-2/3 rounded skeleton"></div>
      <div class="h-4 w-full max-w-xl rounded skeleton"></div>

      <div class="h-px w-full bg-border/40"></div>

      <div class="h-4 w-48 rounded skeleton"></div>
    </div>

    <ChapterHeader
      v-else
      :module-id="moduleId"
      :course-id="courseId"
      :chapter-id="chapterId"
      :title="chapterTitle"
      :subtitle="chapterSubtitle"
      class="animate-fade-slide"
    />

    <div
      class="grid gap-6 md:gap-7 2xl:gap-8 lg:grid-cols-[minmax(0,3fr),minmax(260px,1.25fr)]"
    >
      <!-- Główna część z zakładkami -->
      <div class="space-y-4 md:space-y-5">
        <div v-if="isLoading" class="grid gap-4 md:grid-cols-2">
          <div
            v-for="i in 2"
            :key="i"
            class="h-32 rounded-2xl border border-border/60 bg-section/60 skeleton"
          ></div>
        </div>

        <div v-else class="animate-fade-slide-delay-2">
          <ChapterTabs
            :module-id="moduleId"
            :course-id="courseId"
            :chapter-id="chapterId"
          />
        </div>

        <section
          ref="lessonContainer"
          data-lesson-container
          class="rounded-2xl border border-border/70 bg-card/90 backdrop-blur-sm px-4 py-4 md:px-6 md:py-5 2xl:px-7 2xl:py-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-border animate-fade-slide-delay-3"
        >
          <!-- Widok teorii lub quizu -->
          <div v-if="isLoading" class="space-y-4 animate-pulse">
            <div class="h-5 w-1/2 rounded skeleton"></div>
            <div class="h-4 w-full rounded skeleton"></div>
            <div class="h-4 w-5/6 rounded skeleton"></div>
            <div class="h-4 w-2/3 rounded skeleton"></div>
          </div>

          <RouterView v-else />
        </section>

        <div class="md:hidden animate-fade-slide-delay-4">
          <div
            v-if="isLoading"
            class="rounded-2xl border border-border/60 bg-section/60 p-5 space-y-3 skeleton"
          >
            <div class="h-4 w-32 rounded"></div>
            <div class="h-4 w-24 rounded"></div>
            <div class="h-4 w-20 rounded"></div>
          </div>

          <ChapterMetaCard
            v-else
            :estimated-time="chapterMeta.estimatedTime"
            :difficulty="chapterMeta.difficulty"
            :quiz-questions="chapterMeta.quizQuestions"
          />
        </div>
      </div>

      <!-- Panel boczny z meta informacjami -->
      <aside
        class="hidden md:block space-y-4 md:space-y-5 lg:sticky lg:top-20 self-start"
      >
        <div
          v-if="isLoading"
          class="rounded-2xl border border-border/60 bg-section/60 p-5 space-y-3 skeleton"
        >
          <div class="h-4 w-32 rounded"></div>
          <div class="h-4 w-24 rounded"></div>
          <div class="h-4 w-20 rounded"></div>
        </div>

        <div v-else class="animate-fade-slide-delay-5">
          <ChapterMetaCard
            :estimated-time="chapterMeta.estimatedTime"
            :difficulty="chapterMeta.difficulty"
            :quiz-questions="chapterMeta.quizQuestions"
          />
        </div>
      </aside>
    </div>
  </section>
</template>
