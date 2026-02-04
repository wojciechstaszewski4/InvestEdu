<script setup>
// Importy z Vue
import { ref, computed, onMounted, nextTick, watch } from "vue";

// Router i routing
import { useRoute, useRouter } from "vue-router";

// Import funkcji
import { useContinueLearning } from "@/composables/useContinueLearning";
import { useUser } from "@/composables/useUser";

// Komponenty UI
import CourseHeader from "@/components/sections/app/courseview/CourseHeader.vue";
import CourseProgressSummary from "@/components/sections/app/courseview/CourseProgressSummary.vue";
import ChapterList from "@/components/sections/app/courseview/ChapterList.vue";

// Dane statyczne aplikacji
import { modulesMap } from "@/data/map";
import { modules as modulesMeta } from "@/data/modules";

// Firebase auth
import { getAuth } from "firebase/auth";

// Serwisy progresu
import { getCompletedChapters } from "@/components/services/progressService";

// Dostęp do routera
const route = useRoute();
const router = useRouter();

// Funkcja kontynuacji nauki
const { continueLearning } = useContinueLearning();

// ID modułu z URL
const moduleId = Number(route.params.moduleId);

// ID kursu z URL (jeśli brak -> null)
const routeCourseId = computed(() =>
  route.params.courseId ? Number(route.params.courseId) : null
);

// Referencje do mierzenia wysokości zawartości
const contentWrapper = ref(null);
const contentHeight = ref(0);

// Aktualnie wybrany kurs
const activeCourseId = ref(null);

// Lista ukończonych rozdziałów
const completedChapterIds = ref([]);

// Dane użytkownika
const { user } = useUser();

// Dane modułu na podstawie ID
const module = computed(() => modulesMap[moduleId]);

// Meta informacje modułu
const moduleInfo = computed(() => modulesMeta.find((m) => m.id === moduleId));

// Lista kursów w module
const courses = computed(() => module.value?.courses || []);

// Flaga animacji przełączania kursu
const isSwitchingCourse = ref(false);

// Flaga animacji skeleton
const loading = ref(true);

// Czy poprzedni kurs w tym samym module jest ukończony? (pct === 100)
const previousCourseCompleted = computed(() => {
  // Pierwszy kurs zawsze dostępny
  if (activeCourseId.value === 1) return true;

  if (!user.value?.progress) return false;

  const prevCourseKey = `m${moduleId}c${activeCourseId.value - 1}`;

  return user.value.progress.some(
    (p) => p.id === prevCourseKey && p.pct === 100
  );
});

// Czy poprzedni moduł został ukończony? (blokada postępu między modułami)
const previousModuleCompleted = computed(() => {
  // Moduł 1 zawsze dostępny
  if (moduleId === 1) return true;

  if (!user.value?.completedModuleIds) return false;

  return user.value.completedModuleIds.includes(moduleId - 1);
});

watch(
  () => user.value?.progress,
  async () => {
    if (!activeCourseId.value) return;

    // Odświeżamy ukończone rozdziały
    await loadProgress(activeCourseId.value);
  },
  { deep: true }
);

// Rozdziały aktualnie wybranego kursu
const chapters = computed(() => {
  if (!module.value || !activeCourseId.value) return [];
  return module.value.chapters[activeCourseId.value] || [];
});

// Łączna liczba rozdziałów w module (do headera)
const totalModuleChapters = computed(() => {
  if (!module.value) return 0;

  return Object.values(module.value.chapters || {}).reduce(
    (sum, list) => sum + list.length,
    0
  );
});

// Łączny czas modułu (do headera)
const moduleEstimatedTime = computed(() => {
  if (!courses.value.length) return "-";

  const minutes = courses.value.reduce((sum, c) => sum + (c.etaMin || 0), 0);

  return `~ ${Math.max(1, Math.round(minutes / 60))} h`;
});

// Pobranie progresu użytkownika dla kursu
async function loadProgress(courseId) {
  const uid = getAuth().currentUser?.uid;
  if (!uid || !courseId) return;

  const key = `m${moduleId}c${courseId}`;
  const data = await getCompletedChapters(uid, key);

  completedChapterIds.value = data?.completed || [];
}

// Zmiana kursu
async function selectCourse(courseId) {
  if (courseId === activeCourseId.value) return;

  // Zapamiętujemy aktualną wysokość
  contentHeight.value = contentWrapper.value?.offsetHeight || 0;

  isSwitchingCourse.value = true;
  activeCourseId.value = courseId;

  window.scrollTo({ top: 0, behavior: "smooth" });

  await loadProgress(courseId);

  await nextTick();

  isSwitchingCourse.value = false;
}

// Inicjalizacja widoku
onMounted(async () => {
  if (!module.value) {
    router.replace("/app");
    return;
  }

  // Kurs z URL lub pierwszy w module
  if (courses.value.length) {
    activeCourseId.value = routeCourseId.value ?? courses.value[0].id;

    await loadProgress(activeCourseId.value);
  }

  loading.value = false;
});
</script>

<template>
  <section
    v-if="module"
    class="mx-auto w-full max-w-6xl px-6 py-8 flex-1 space-y-8 animate-fade-in"
  >
    <!-- Header modułu -->
    <CourseHeader
      v-if="!loading"
      :module-id="moduleId"
      :title="moduleInfo?.name"
      :subtitle="moduleInfo?.longDesc || moduleInfo?.desc"
      :level="moduleInfo?.difficulty"
      :estimated-time="moduleEstimatedTime"
      :chapters-count="totalModuleChapters"
      @continue="continueLearning"
    />

    <!-- Skeleton nagłówka -->
    <div
      v-else
      class="rounded-2xl border border-border bg-section/60 px-6 py-6 space-y-4 animate-pulse"
    >
      <div class="h-4 w-24 rounded skeleton"></div>
      <div class="h-7 w-2/3 rounded skeleton"></div>
      <div class="h-4 w-full max-w-xl rounded skeleton"></div>
      <div class="flex gap-3 pt-2">
        <div class="h-4 w-20 rounded skeleton"></div>
        <div class="h-4 w-24 rounded skeleton"></div>
      </div>
    </div>

    <!-- Przełącznik kursów -->
    <div class="flex flex-wrap gap-3 animate-fade-slide">
      <button
        v-for="course in courses"
        :key="course.id"
        @click="selectCourse(course.id)"
        :class="[
          activeCourseId === course.id
            ? 'bg-primary text-white border-primary shadow cursor-default'
            : 'bg-card border-border text-text/70 cursor-pointer hover:border-accent hover:text-accent',
          'px-4 py-2 text-[clamp(12px,3.2vw,13.5px)] sm:px-5 sm:py-2.5 sm:text-sm',
          'text-left wrap-break-word',
          'rounded-full font-medium border transition-all duration-300',
        ]"
      >
        {{ course.name }}
      </button>
    </div>

    <!-- Zawartość kursu -->
    <div
      class="mt-8 transition-[min-height] duration-300"
      :style="{
        minHeight: isSwitchingCourse ? `${contentHeight}px` : 'auto',
      }"
      ref="contentWrapper"
    >
      <Transition name="fade" mode="out-in">
        <div
          v-if="!isSwitchingCourse"
          class="grid gap-6 md:gap-7 2xl:gap-9 lg:grid-cols-[minmax(0,3fr),minmax(260px,1.2fr)]"
        >
          <!-- Lista rozdziałów -->
          <div class="space-y-5 animate-fade-slide-delay">
            <ChapterList
              v-if="activeCourseId !== null"
              :chapters="chapters"
              :module-id="moduleId"
              :course-id="activeCourseId"
              :completed-chapter-ids="completedChapterIds"
              :previous-course-completed="previousCourseCompleted"
              :previous-module-completed="previousModuleCompleted"
            />
          </div>

          <!-- Panel boczny -->
          <aside
            class="lg:sticky lg:top-24 self-start space-y-4 animate-fade-slide-delay-2"
          >
            <CourseProgressSummary
              :completed-chapters="completedChapterIds.length"
              :total-chapters="chapters.length"
            />
          </aside>
        </div>
      </Transition>
    </div>
  </section>

  <!-- Fallback - dane jeszcze się ładują -->
  <section
    v-else
    class="mx-auto w-full max-w-6xl px-6 py-8 flex-1 space-y-8 animate-fade-in"
  >
    <!-- Skeleton nagłówka -->
    <div
      class="rounded-2xl border border-border bg-section/60 px-6 py-6 space-y-4 animate-pulse"
    >
      <div class="h-4 w-24 rounded skeleton"></div>
      <div class="h-7 w-2/3 rounded skeleton"></div>
      <div class="h-4 w-full max-w-xl rounded skeleton"></div>
      <div class="flex gap-3 pt-2">
        <div class="h-4 w-20 rounded skeleton"></div>
        <div class="h-4 w-24 rounded skeleton"></div>
      </div>
    </div>

    <!-- Skeleton zawartości -->
    <div
      class="grid gap-6 lg:grid-cols-[minmax(0,3fr),minmax(260px,1.2fr)] animate-pulse"
    >
      <!-- Lewa kolumna -->
      <div class="space-y-4">
        <div
          v-for="i in 3"
          :key="i"
          class="h-28 rounded-2xl border border-border bg-section/50 skeleton"
        ></div>
      </div>

      <!-- Prawa kolumna -->
      <div
        class="h-48 rounded-2xl border border-border bg-section/50 skeleton"
      ></div>
    </div>
  </section>
</template>
