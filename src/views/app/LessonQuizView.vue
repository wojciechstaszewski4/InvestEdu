<script setup>
// Importy Vue - reaktywność, computed, lifecycle i watch
import { ref, computed, onMounted, watch } from "vue";

// Dostęp do parametrów trasy (moduleId, courseId, chapterId)
import { useRoute } from "vue-router";

// Dostęp do aktualnie zalogowanego użytkownika Firebase
import { getAuth } from "firebase/auth";

// Loader quizów - pobiera dane quizu na podstawie kontekstu lekcji
import { loadQuiz } from "@/data/loaders/quizzes";

// Import composables
import { showToast } from "@/composables/useToast";
import { useUser } from "@/composables/useUser";

// Serwis zapisujący ukończenie rozdziału + quizu
import { finishChapterAndQuiz } from "@/components/services/progressService";

// Komponent wyświetlający quiz
import Quiz from "@/components/sections/app/lessonview/Quiz.vue";

// Import domeny
import { getBadgeMeta } from "@/domain/badges";
import { pluralizeDay } from "@/domain/text";

// Metody do lokalnej aktualizacji XP, odznak i danych użytkownika
const { applyXp, applyBadges, loadUserData } = useUser();

// Dostęp do aktualnej trasy
const route = useRoute();

// Flaga informująca, czy quiz był rozwiązywany ponownie
const wasReplay = ref(false);

// Parametry lekcji pobrane z URL
const moduleId = computed(() => Number(route.params.moduleId));
const courseId = computed(() => Number(route.params.courseId));
const chapterId = computed(() => Number(route.params.chapterId));

// Dane quizu
const quizData = ref(null);

// Flagi stanu widoku
const isLoading = ref(true);
const isCompleted = ref(false);
const xpSaved = ref(false);

// Funkcja pobierająca quiz po wejściu na widok lub zmianie URL
let fetchToken = 0;

async function fetchQuiz() {
  const token = ++fetchToken;
  isLoading.value = true;

  try {
    const data = await loadQuiz(
      moduleId.value,
      courseId.value,
      chapterId.value
    );
    if (token !== fetchToken) return;
    quizData.value = data;
  } catch {
    quizData.value = null;
  } finally {
    isLoading.value = false;
  }
}

// Obsługa zakończenia quizu
async function handleQuizFinish({ correct, total }) {
  const authUser = getAuth().currentUser;

  // Zabezpieczenie przed wielokrotnym zapisem
  if (!authUser || xpSaved.value) return;

  // Zapis ukończenia rozdziału i quizu w bazie
  const res = await finishChapterAndQuiz({
    uid: authUser.uid,
    moduleId: moduleId.value,
    courseId: courseId.value,
    chapterId: chapterId.value,
    courseLabel: quizData.value.title,
    quizScore: { correct, total },
  });

  // Jeśli zapis się nie powiódł - przerywamy
  if (!res || res.error) return;

  // Lokalna aktualizacja odznak
  if (res.earnedBadges?.length) {
    applyBadges(res.earnedBadges);
  }

  // Informacja czy był to replay
  wasReplay.value = res.alreadyCompleted;

  // Aktualizacja XP w UI
  if (res.xpAwarded > 0) {
    const xpResult = applyXp(res.xpAwarded);

    showToast(
      res.alreadyCompleted
        ? `Powtórka rozdziału: +${res.xpAwarded} XP 📘`
        : `Rozdział ukończony: +${res.xpAwarded} XP ✅`
    );

    // Toast przy awansie poziomu
    if (xpResult?.levelUp) {
      showToast(`Nowy poziom: ${xpResult.newLevel}! 🎉`);
    }
  }

  // Toast streaka, jeśli został przedłużony
  if (res.streak && !res.streakAlready) {
    showToast(
      `Streak przedłużony: ${res.streak} ${pluralizeDay(res.streak)} 🔥`
    );

    // Synchronizacja danych użytkownika
    await loadUserData(authUser.uid);
  }

  // Toasty za zdobyte odznaki
  if (res.earnedBadges?.length) {
    res.earnedBadges.forEach((badgeId) => {
      const meta = getBadgeMeta(badgeId);
      showToast(`Zdobyto odznakę: ${meta.label} ${meta.icon}`);
    });
  }

  // Oznaczenie quizu jako zapisany i ukończony
  xpSaved.value = true;
  isCompleted.value = true;

  // Finalna synchronizacja stanu użytkownika
  await loadUserData(authUser.uid);
}

// Inicjalne pobranie quizu po wejściu na widok
onMounted(fetchQuiz);

// Reakcja na zmianę modułu / kursu / rozdziału w URL
watch(
  () => [route.params.moduleId, route.params.courseId, route.params.chapterId],
  () => {
    xpSaved.value = false;
    isCompleted.value = false;
    wasReplay.value = false;
    fetchQuiz();
  }
);
</script>

<template>
  <!-- Wrapper treści quizowej -->
  <article class="quiz-content max-w-none">
    <!-- Loader -->
    <div v-if="isLoading" class="space-y-4 animate-pulse">
      <div class="h-4 w-2/3 rounded skeleton"></div>
      <div class="h-4 w-full rounded skeleton"></div>
      <div class="h-4 w-5/6 rounded skeleton"></div>
      <div class="h-4 w-3/4 rounded skeleton"></div>
    </div>

    <!-- Brak quizu -->
    <div
      v-else-if="!quizData"
      class="flex items-start gap-2 rounded-xl border border-accent/25 bg-accent/5 italic px-4 py-3 text-xs text-text/70"
    >
      <!-- Ikona -->
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
          d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>

      <!-- Treść -->
      <span class="leading-relaxed">
        Quiz dla tego rozdziału nie jest jeszcze dostępny.
      </span>
    </div>

    <!-- Quiz -->
    <div v-else class="space-y-6 transition-all duration-300 ease-out">
      <!-- Nagłówek -->
      <header class="space-y-2">
        <h2 class="text-lg md:text-xl font-semibold text-text tracking-tight">
          Quiz sprawdzający
        </h2>

        <p class="text-sm text-text/60 max-w-xl">
          Sprawdź swoją wiedzę przed przejściem dalej.
        </p>
      </header>

      <!-- Właściwy quiz -->
      <div class="transition-all duration-300 ease-out">
        <Quiz :quiz="quizData" @finish="handleQuizFinish" />
      </div>

      <!-- Info o ukończeniu -->
      <div
        v-if="isCompleted"
        class="flex items-start gap-2 rounded-xl border border-accent/25 bg-accent/5 italic px-4 py-3 text-xs text-text/70"
      >
        <!-- Ikona sukcesu -->
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

        <!-- Treść -->
        <span class="leading-relaxed">
          <span v-if="!wasReplay">
            Quiz ukończony. Rozdział zapisany w Twojej ścieżce nauki.
          </span>

          <span v-else> Quiz ukończony ponownie. Wiedza utrwalona. </span>
        </span>
      </div>
    </div>
  </article>
</template>
