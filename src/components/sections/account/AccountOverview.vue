<script setup>
// Import reaktywnych danych i obliczeń
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Import routera
import { ROUTE } from "@/router";

// Import funkcji aplikacji
import { useUser } from "@/composables/useUser";
import { useContinueLearning } from "@/composables/useContinueLearning";

// Import serwisów postępu i rankingu
import {
  getLeaderboard,
  getLevelProgress,
} from "@/components/services/userProgress.js";

// Import domeny
import { badgeMap } from "@/domain/badges";
import { pluralizeDay } from "@/domain/text";

// Pobieranie danych użytkownika + UID z Auth
const { user, authUser } = useUser();

// Preferencje użytkownika
const prefs = computed(() => user.value?.preferences || {});

// Pozycja użytkownika w rankingu XP
const rank = ref(null);

// Tooltip na mobile (klik)
const activeBadge = ref(null);

// Automatyczne zamykanie tooltipa
let badgeTimeout = null;

// Wykrycie urządzeń bez hover (mobile / touch)
const isMobile =
  typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

// Funkcja kontynuacji nauki
const { continueLearning } = useContinueLearning();

// Pobieranie pozycji w rankingu XP (publiczne profile)
onMounted(async () => {
  if (!authUser.value?.uid) return;

  try {
    const leaderboard = await getLeaderboard(1000).catch(() => []);
    const index = leaderboard.findIndex((u) => u.id === authUser.value.uid);

    rank.value = index >= 0 ? index + 1 : null;
  } catch (err) {
    console.error("Błąd pobierania rankingu:", err);
    rank.value = null;
  }
});

// Czyścimy timeout tooltipa przy odmontowaniu komponentu
onBeforeUnmount(() => {
  clearTimeout(badgeTimeout);
});

// Statystyki główne
const stats = computed(() => {
  if (prefs.value.statsVisible === false) {
    return [
      { label: "Poziom", value: "-", hint: "ukryte" },
      { label: "Seria dni", value: "-", hint: "ukryte" },
      { label: "Ukończone quizy", value: "-", hint: "ukryte" },
      { label: "Ranking XP", value: "-", hint: "ukryte" },
    ];
  }

  return [
    {
      label: "Poziom",
      value: user.value?.level ?? 1,
      hint: `${user.value?.xp ?? 0} XP`,
    },
    {
      label: "Seria",
      value: user.value?.streak ?? 0,
      hint: `${user.value?.streak ?? 0} ${pluralizeDay(
        user.value?.streak ?? 0
      )}`,
    },
    {
      label: "Ukończone quizy",
      value: user.value?.quizCompleted ?? 0,
      hint: `${user.value?.totalCorrect ?? 0} poprawnych`,
    },
    {
      label: "Ranking XP",
      value: rank.value ? `#${rank.value}` : "-",
      hint: "globalnie",
    },
  ];
});

// Postęp poziomu
const levelProgress = computed(() => {
  if (prefs.value.statsVisible === false) return 0;

  const xp = user.value?.xp ?? 0;
  const level = user.value?.level ?? 1;

  return getLevelProgress(xp, level);
});

// Postęp kursów (respektuje preferencje prywatności)
const progress = computed(() => {
  if (prefs.value.statsVisible === false) return [];
  return user.value?.progress || [];
});

// Ostatnia aktywność
const activity = computed(() => {
  if (prefs.value.activityVisible === false) return [];

  if (!user.value?.lastLesson) return [];

  const { moduleId, courseId, chapterId, updatedAt } = user.value.lastLesson;

  return [
    {
      title: `Moduł ${moduleId} · Kurs ${courseId} · Rozdział ${chapterId}`,
      when: formatActivityDate(updatedAt),
    },
  ];
});

// Odznaki
const badges = computed(() => {
  if (prefs.value.statsVisible === false) return [];

  const raw = user.value?.badges || {};
  return Object.entries(raw).map(([id, meta]) => ({
    id,
    earnedAt: meta?.earnedAt || null,
  }));
});

const sortedBadges = computed(() =>
  badges.value.slice().sort((a, b) => {
    const ta = typeof a.earnedAt?.seconds === "number" ? a.earnedAt.seconds : 0;
    const tb = typeof b.earnedAt?.seconds === "number" ? b.earnedAt.seconds : 0;
    return tb - ta;
  })
);

// Tooltip mobile
function toggleBadge(id) {
  if (activeBadge.value === id) {
    activeBadge.value = null;
    return;
  }

  activeBadge.value = id;

  clearTimeout(badgeTimeout);
  badgeTimeout = setTimeout(() => {
    activeBadge.value = null;
  }, 2500);
}

// Nowa odznaka (24h)
function isNewBadge(earnedAt) {
  if (!earnedAt) return false;

  const earnedMs =
    typeof earnedAt.seconds === "number"
      ? earnedAt.seconds * 1000
      : new Date(earnedAt).getTime();

  return Date.now() - earnedMs < 24 * 60 * 60 * 1000;
}

// Format daty odznaki
function formatBadgeDate(ts) {
  if (!ts) return "Data nieznana";

  const date = typeof ts.toDate === "function" ? ts.toDate() : new Date(ts);

  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Format daty aktywności
function formatActivityDate(ts) {
  if (!ts) return "";

  const date =
    typeof ts.toDate === "function"
      ? ts.toDate()
      : typeof ts === "number"
      ? new Date(ts)
      : new Date(ts);

  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script>

<template>
  <!-- Główna siatka strony konta -->
  <section class="grid gap-6 lg:grid-cols-12 animate-fade-in">
    <!-- Banner: profil prywatny -->
    <div v-if="prefs.publicProfile === false" class="lg:col-span-12">
      <div
        class="rounded-xl border border-yellow-400/40 bg-yellow-50/10 text-yellow-600 px-4 py-3 text-sm"
      >
        Twój profil jest prywatny. Inni użytkownicy nie widzą Twoich danych.
      </div>
    </div>

    <!-- Lewa kolumna -->
    <div class="lg:col-span-7 space-y-6">
      <!-- Statystyki -->
      <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="s in stats"
          :key="s.label"
          class="group flex flex-col rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-fade-slide"
        >
          <!-- Tytuł -->
          <p
            class="text-[11px] uppercase tracking-wide text-text/60 h-5 flex items-center"
          >
            {{ s.label }}
          </p>

          <!-- Wartość -->
          <p
            class="mt-1 text-3xl font-extrabold text-primary leading-none h-12 flex items-center"
          >
            {{ s.value }}
          </p>

          <!-- Hint -->
          <p class="mt-2 text-xs text-text/60 h-5 flex items-center">
            {{ s.hint }}
          </p>
        </article>
      </section>

      <!-- Postęp poziomu (jeśli statystyki są publiczne) -->
      <section
        v-if="prefs.statsVisible !== false"
        class="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur animate-fade-slide-delay"
      >
        <h3 class="text-sm font-semibold text-text/90">Postęp poziomu</h3>

        <div class="mt-3">
          <div
            class="flex items-center justify-between text-xs text-text/70 mb-3"
          >
            <span>Obecny poziom: {{ user?.level || 1 }}</span>
            <span>{{ levelProgress.toFixed(0) }}%</span>
          </div>

          <div class="h-2.75 w-full rounded-full bg-border/40 overflow-hidden">
            <div
              class="h-full rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-500"
              :style="{ width: levelProgress + '%' }"
            ></div>
          </div>
        </div>
      </section>

      <!-- Postęp kursów -->
      <section
        v-if="prefs.statsVisible !== false"
        class="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur animate-fade-slide-delay-2"
      >
        <h3 class="text-sm font-semibold text-text/90">Postęp w kursach</h3>

        <div v-if="progress.length" class="mt-3 space-y-5">
          <div v-for="p in progress" :key="p.label">
            <div class="flex justify-between text-xs text-text/70 mb-3">
              <span>{{ p.label }}</span>
              <span>{{ p.pct }}%</span>
            </div>

            <div
              class="h-2.75 w-full rounded-full bg-border/40 overflow-hidden"
            >
              <div
                class="h-full rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-500"
                :style="{ width: p.pct + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <p v-else class="text-xs text-text/60 mt-3 italic">
          Brak rozpoczętych kursów.
        </p>
      </section>
    </div>

    <!-- Prawa kolumna -->
    <div class="lg:col-span-5 space-y-6">
      <!-- Szybkie akcje -->
      <section
        class="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur animate-fade-slide"
      >
        <h3 class="text-sm font-semibold text-text/90">Szybkie akcje</h3>

        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            @click="continueLearning"
            class="flex items-center justify-center gap-2 rounded-xl border border-primary/60 bg-bg/10 px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
          >
            <!-- Ikona -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            <span>Kontynuuj naukę</span>
          </button>

          <RouterLink
            :to="{ name: ROUTE.RANKING }"
            class="flex items-center justify-center gap-2 rounded-xl border border-primary/60 bg-bg/10 px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:-translate-y-0.5 hover:shadow-md"
          >
            <!-- Ikona -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3v18h18M7 14v4M12 10v8M17 6v12"
              />
            </svg>

            <span>Zobacz ranking</span>
          </RouterLink>
        </div>
      </section>

      <!-- Ostatnia aktywność (jeśli profil jest publiczny) -->
      <section
        v-if="prefs.activityVisible !== false"
        class="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur animate-fade-slide-delay"
      >
        <h3 class="text-sm font-semibold text-text/90">Ostatnia aktywność</h3>

        <ul class="mt-3 divide-y divide-border/60">
          <li
            v-if="activity.length === 0"
            class="py-3 text-xs text-text/60 italic"
          >
            Brak aktywności do wyświetlenia.
          </li>

          <li
            v-for="a in activity"
            :key="a.when + a.title"
            class="py-3 space-y-1"
          >
            <div
              class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
            >
              <span class="text-sm text-text/90 leading-snug">
                {{ a.title }}
              </span>

              <span class="text-xs text-text/60 shrink-0">
                {{ a.when }}
              </span>
            </div>
          </li>
        </ul>
      </section>

      <!-- Odznaki i osiągnięcia -->
      <section
        v-if="prefs.statsVisible !== false"
        class="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur animate-fade-slide-delay"
      >
        <h3 class="text-sm font-semibold text-text/90">
          Odznaki i osiągnięcia
        </h3>

        <!-- Brak odznak -->
        <p
          v-if="badges.length === 0"
          class="mt-3 py-3 text-xs text-text/60 italic"
        >
          Nie zdobyłeś jeszcze żadnych odznak.
        </p>

        <!-- Lista odznak -->
        <div
          v-else
          class="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        >
          <div
            v-for="b in sortedBadges"
            :key="b.id"
            role="button"
            tabindex="0"
            @click="isMobile && toggleBadge(b.id)"
            class="group relative flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-bg/40 backdrop-blur px-2 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            :class="{
              'ring-1 ring-accent/50 shadow-sm animate-pop': isNewBadge(
                b.earnedAt
              ),
            }"
          >
            <!-- Tooltip -->
            <div
              class="pointer-events-none absolute bottom-full mb-3 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-[11px] text-text/80 shadow-lg whitespace-nowrap transition-all duration-300 ease-out opacity-0 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
              :class="{
                'opacity-100 translate-y-0 scale-100': activeBadge === b.id,
              }"
            >
              Zdobyto: {{ formatBadgeDate(b.earnedAt) }}
            </div>

            <!-- Ikona -->
            <div class="text-2xl leading-none">
              {{ badgeMap[b.id]?.icon || "🏅" }}
            </div>

            <!-- Label -->
            <p class="mt-2 text-[10px] text-text/70 leading-tight">
              {{ badgeMap[b.id]?.label || b.id }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
