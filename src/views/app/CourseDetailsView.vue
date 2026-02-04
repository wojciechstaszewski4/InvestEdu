<script setup>
// Importy Vue - reaktywność i lifecycle
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// Komponent widoku szczegółów modułu
import CourseDetails from "@/components/sections/app/coursedetailsview/CourseDetails.vue";

// Statyczne dane modułów (lista + mapa do aplikacji)
import { modules as rawModules, computeModuleMeta } from "@/data/modules.js";
import { modulesMap } from "@/data/map";

// Firebase - aktualnie zalogowany użytkownik
import { getAuth } from "firebase/auth";

// Import repo
import { getUserDoc } from "@/repositories/user.repo";

// Serwisy progresu - rozdziały + procent
import {
  getCompletedChapters,
  computeCourseProgress,
} from "@/components/services/progressService";

// Router i parametry trasy
const route = useRoute();
const router = useRouter();

// ID modułu pobrane z URL
const moduleId = Number(route.params.moduleId);

// Obiekt modułu przekazywany do CourseDetails
const moduleDetails = ref(null);

// Łączna liczba ukończonych rozdziałów w module
const completedChapters = ref(0);

// Łączna liczba wszystkich rozdziałów w module
const totalChapters = ref(0);

// Flaga ładowania widoku
const loading = ref(true);

// Ładowanie danych po wejściu na widok
onMounted(async () => {
  // Szukamy statycznego opisu modułu
  const mod = rawModules.find((m) => m.id === moduleId);

  // Jeśli moduł nie istnieje - cofamy do listy
  if (!mod) {
    router.replace("/app");
    return;
  }

  // Pobieramy moduł aplikacyjny (kursy + rozdziały)
  const appModule = modulesMap[moduleId];

  // Zabezpieczenie przed błędną strukturą danych
  if (!appModule || !appModule.courses || !appModule.chapters) {
    router.replace("/app");
    return;
  }

  // Liczymy łączną liczbę rozdziałów w module (wszystkie kursy)
  totalChapters.value = Object.values(appModule.chapters).reduce(
    (sum, list) => sum + (Array.isArray(list) ? list.length : 0),
    0
  );

  // Meta modułu (ETA, poziom itd.)
  const meta = computeModuleMeta(moduleId);

  // UID użytkownika
  const uid = getAuth().currentUser?.uid;

  // Ostatnio robiona lekcja w tym module (także przy powtórkach)
  let lastActivityLabel = null;

  if (uid) {
    const user = await getUserDoc(uid);

    const last = user?.lastLesson;

    if (last && last.moduleId === moduleId) {
      lastActivityLabel = `Kurs ${last.courseId}, Rozdział ${last.chapterId}`;
    }
  }

  // Jeśli użytkownik nie jest zalogowany - brak progresu
  if (!uid) {
    moduleDetails.value = {
      id: mod.id,
      name: mod.name,
      desc: mod.desc,
      difficulty: meta.difficulty,
      chapters: totalChapters.value,
      etaMin: meta.etaMin,
      status: "not_started",
      done: 0,
      progress: 0,
      lastChapter: null,
    };

    completedChapters.value = 0;
    loading.value = false;
    return;
  }

  // Sumujemy ukończone rozdziały ze wszystkich kursów w module
  let completed = 0;

  // Zliczamy łączną liczbę ukończonych rozdziałów we wszystkich kursach modułu
  for (const c of appModule.courses) {
    const courseKey = `m${moduleId}c${c.id}`;
    const progress = await getCompletedChapters(uid, courseKey);

    if (Array.isArray(progress?.completed)) {
      completed += progress.completed.length;
    }
  }

  // Zapisujemy ukończone rozdziały do paska progresu
  completedChapters.value = completed;

  // Procent ukończenia całego modułu liczony na podstawie wszystkich jego rozdziałów
  const pct = computeCourseProgress(completed, totalChapters.value);

  // Status modułu
  let status = "not_started";
  if (pct === 100) status = "completed";
  else if (pct > 0) status = "in_progress";

  // Finalny obiekt modułu
  moduleDetails.value = {
    id: mod.id,
    name: mod.name,
    desc: mod.desc,
    difficulty: meta.difficulty,
    chapters: totalChapters.value,
    etaMin: meta.etaMin,
    status,
    done: completed,
    progress: pct,
    lastChapter: lastActivityLabel,
  };

  // Wyłączamy loader
  loading.value = false;
});

// Powrót do listy modułów
const back = () => router.push("/app");

// Przejście do widoku kursów w module
const start = () => router.push(`/app/${moduleId}`);
</script>

<template>
  <!-- Wrapper widoku szczegółów modułu -->
  <section class="mx-auto max-w-6xl px-6 py-8 flex-1">
    <!-- Wczytywanie -->
    <div
      v-if="loading"
      class="mx-auto max-w-5xl rounded-2xl bg-card/90 border border-border/50 shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden backdrop-blur-md"
    >
      <!-- Nagłówek skeleton -->
      <div
        class="px-8 py-7 bg-section/30 dark:bg-section/50 border-b border-border/40 animate-pulse"
      >
        <div class="h-3 w-24 rounded skeleton mb-3"></div>
        <div class="h-7 w-2/3 rounded skeleton"></div>
        <div class="mt-4 h-0.5 w-20 rounded skeleton"></div>
        <div class="mt-4 space-y-2">
          <div class="h-4 w-full rounded skeleton"></div>
          <div class="h-4 w-5/6 rounded skeleton"></div>
        </div>
      </div>

      <!-- Meta + progres skeleton -->
      <div class="px-8 py-8 space-y-8 animate-pulse">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            class="rounded-2xl border border-border/50 bg-section/50 px-5 py-4 shadow-sm"
          >
            <div class="h-3 w-24 rounded skeleton"></div>
            <div class="mt-3 h-6 w-28 rounded skeleton"></div>
          </div>

          <div
            class="rounded-2xl border border-border/50 bg-section/50 px-5 py-4 shadow-sm"
          >
            <div class="h-3 w-28 rounded skeleton"></div>
            <div class="mt-3 h-6 w-20 rounded skeleton"></div>
          </div>

          <div
            class="rounded-2xl border border-border/50 bg-section/50 px-5 py-4 shadow-sm"
          >
            <div class="h-3 w-28 rounded skeleton"></div>
            <div class="mt-3 h-6 w-16 rounded skeleton"></div>
          </div>
        </div>

        <div
          class="rounded-xl bg-section/30 border border-border/50 p-6 shadow-sm"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="h-4 w-40 rounded skeleton"></div>
            <div class="h-4 w-44 rounded skeleton"></div>
          </div>

          <div
            class="mt-4 h-2.5 w-full rounded-full overflow-hidden bg-section/90"
          >
            <div class="h-full w-1/3 rounded-full skeleton"></div>
          </div>

          <div class="mt-3 h-3 w-48 rounded skeleton"></div>
        </div>
      </div>

      <!-- Przyciski skeleton -->
      <div
        class="px-8 py-6 border-t border-border/40 bg-card/70 backdrop-blur-sm flex flex-wrap gap-4 animate-pulse"
      >
        <div class="h-11 w-28 rounded-xl skeleton"></div>
        <div class="h-11 w-36 rounded-xl skeleton"></div>
      </div>
    </div>

    <!-- Widok szczegółów -->
    <CourseDetails
      v-else
      :course="moduleDetails"
      :completed-chapters="completedChapters"
      :total-chapters="totalChapters"
      @back="back"
      @start="start"
    />
  </section>
</template>
