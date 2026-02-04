<script setup>
// Importy Vue
import { ref, computed, watch } from "vue";

// Typy zadań
import Radio from "@/components/sections/app/lessonview/Radio.vue";
import MatchingPairs from "@/components/sections/app/lessonview/MatchingPairs.vue";

// Props z LessonQuizView
const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});

// Emit zakończenia quizu do LessonQuizView
const emit = defineEmits(["finish"]);

// Indeks aktualnego pytania
const questionIndex = ref(0);

// Liczba poprawnych odpowiedzi
const correctCount = ref(0);

// Flaga zakończenia quizu
const finished = ref(false);

// Flaga czy pytanie zostało już rozwiązane
const answered = ref(false);

// Flaga animacji przejścia pytania
const isTransitioning = ref(false);

// Lista pytań
const questions = computed(() => props.quiz.questions || []);
const total = computed(() => questions.value.length);

// Aktualne pytanie
const currentQuestion = computed(() => questions.value[questionIndex.value]);

// Poprawna odpowiedź dla typu radio
const correctAnswer = computed(() => {
  if (!currentQuestion.value || currentQuestion.value.type !== "radio") {
    return null;
  }

  return (
    currentQuestion.value.answers?.[currentQuestion.value.correctIndex] ?? ""
  );
});

// Obsługa odpowiedzi z komponentów zadań
function handleAnswer(points) {
  if (answered.value) return;

  if (points === 1) {
    correctCount.value++;
  }

  answered.value = true;
}

// Scroll do kontenera lekcji (quiz / teoria)
function scrollToLessonTop() {
  const container = document.querySelector("[data-lesson-container]");

  if (!container) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const offset = window.innerWidth < 640 ? 32 : 64;

  // Płynne przewinięcie do lekcji
  window.scrollTo({
    top: container.offsetTop - offset,
    behavior: "smooth",
  });
}

// Przejście do kolejnego pytania
function nextQuestion() {
  if (!total.value) return;

  if (!answered.value || isTransitioning.value) return;

  isTransitioning.value = true;
  answered.value = false;

  if (questionIndex.value < total.value - 1) {
    questionIndex.value++;

    // Scroll po wyrenderowaniu nowego pytania
    requestAnimationFrame(() => {
      scrollToLessonTop();
    });
  } else {
    finishQuiz();
  }

  // Odblokowanie po czasie animacji
  setTimeout(() => {
    isTransitioning.value = false;
  }, 300);
}

// Zakończenie quizu
function finishQuiz() {
  finished.value = true;

  // Scroll do początku lekcji po pokazaniu wyników
  requestAnimationFrame(() => {
    scrollToLessonTop();
  });

  // Emit dopiero po zakończeniu animacji quiz-finish
  setTimeout(() => {
    emit("finish", {
      correct: correctCount.value,
      total: total.value,
    });
  }, 500);
}

// Reset stanu przy zmianie quizu (np. inny rozdział)
watch(
  () => props.quiz,
  () => {
    questionIndex.value = 0;
    correctCount.value = 0;
    finished.value = false;
    answered.value = false;
    isTransitioning.value = false;
  },
  { deep: true }
);
</script>

<template>
  <Transition name="quiz-finish" mode="out-in">
    <!-- Quiz w trakcie -->
    <div
      v-if="!finished && currentQuestion"
      key="quiz-running"
      class="quiz-content space-y-8"
    >
      <!-- Pasek postępu -->
      <div class="space-y-2">
        <div class="h-2.5 w-full rounded-full bg-section/80 overflow-hidden">
          <div
            class="h-full rounded-full bg-linear-to-r from-primary via-gold to-accent transition-all duration-500"
            :style="{ width: ((questionIndex + 1) / total) * 100 + '%' }"
          />
        </div>

        <p class="text-xs text-text/50">
          Pytanie {{ questionIndex + 1 }} z {{ total }}
        </p>
      </div>

      <Transition name="question" mode="out-in">
        <div :key="questionIndex" class="space-y-6">
          <!-- Treść pytania -->
          <div class="space-y-3">
            <h3
              class="text-base md:text-lg font-semibold text-text leading-relaxed"
            >
              {{ currentQuestion.text }}
            </h3>
          </div>

          <!-- Typ: RADIO -->
          <Radio
            v-if="currentQuestion.type === 'radio'"
            :options="currentQuestion.answers"
            :correct-answer="correctAnswer"
            :explanation="currentQuestion.explanation"
            @points="handleAnswer"
          />

          <!-- Typ: MATCHING PAIRS -->
          <MatchingPairs
            v-else-if="currentQuestion.type === 'matching'"
            :pairs="currentQuestion.pairs"
            @points="handleAnswer"
          />
        </div>
      </Transition>

      <!-- Przycisk dalej -->
      <div class="pt-1 flex justify-end">
        <div>
          <button
            class="group inline-flex items-center gap-3 h-12 md:h-13 px-7 rounded-2xl text-sm md:text-base font-semibold bg-linear-to-r from-primary to-secondary text-white shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="!answered || isTransitioning"
            @click="nextQuestion"
          >
            <span>
              {{ questionIndex < total - 1 ? "Dalej" : "Zakończ quiz" }}
            </span>

            <!-- Ikona strzałki -->
            <svg
              class="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Quiz zakończony -->
    <div
      v-else
      key="quiz-finished"
      class="quiz-content flex flex-col items-center py-6 space-y-3"
    >
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-primary">
        Quiz ukończony
      </h2>

      <p class="text-sm sm:text-base text-text/70">
        Twój wynik:
        <span class="font-semibold text-text">
          {{ correctCount }} / {{ total }}
        </span>
      </p>

      <div
        class="mt-1 h-0.5 w-16 rounded-full bg-linear-to-r from-transparent via-accent to-transparent"
      ></div>
    </div>
  </Transition>
</template>
