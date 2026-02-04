<script setup>
// Importy Vue
import { ref, watch } from "vue";

// Audio
import correctSound from "@/assets/sounds/correct.mp3";
import incorrectSound from "@/assets/sounds/wrong.mp3";

// Props odpowiedzi
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },

  correctAnswer: {
    type: String,
    required: true,
  },

  explanation: {
    type: String,
    default: "",
  },
});

// Emit punktów do Quiz.vue
const emit = defineEmits(["points"]);

// Audio feedback
const correctAudio = new Audio(correctSound);
const incorrectAudio = new Audio(incorrectSound);

// Stan komponentu
const disableClicks = ref(false);
const selected = ref(null);

// Wyświetlanie wyjaśnienia po odpowiedzi
const showExplanation = ref(false);

// Lokalna, przetasowana lista odpowiedzi
const shuffledOptions = ref([]);

// Funkcja tasująca odpowiedzi
function shuffleOptions() {
  shuffledOptions.value = [...props.options].sort(() => Math.random() - 0.5);
}

// Sprawdzenie odpowiedzi
function checkAnswer(event) {
  if (disableClicks.value) return;

  const normalize = (v) => String(v || "").trim();

  const value = normalize(event.currentTarget.dataset.value);
  selected.value = value;

  const isCorrect = value === normalize(props.correctAnswer);

  // Dźwięk odpowiedzi
  if (isCorrect) {
    correctAudio.currentTime = 0;
    correctAudio.play();
  } else {
    incorrectAudio.currentTime = 0;
    incorrectAudio.play();
  }

  emit("points", isCorrect ? 1 : 0);

  showExplanation.value = true;
  disableClicks.value = true;
}

// Reset stanu + ponowne losowanie przy nowym pytaniu
watch(
  () => props.options,
  () => {
    disableClicks.value = false;
    selected.value = null;
    showExplanation.value = false;

    shuffleOptions();
  },
  { immediate: true }
);
</script>

<template>
  <ul class="flex flex-col gap-3">
    <li
      v-for="option in shuffledOptions"
      :key="option"
      :data-value="option"
      @click="checkAnswer"
      class="group flex items-start gap-4 px-4 py-3 rounded-xl border border-border/60 cursor-pointer transition-all duration-300 ease-out hover:border-accent/60 hover:bg-accent/5 hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.98]"
      :class="[
        !disableClicks && 'bg-section/40',
        disableClicks && 'cursor-default',

        // Poprawna odpowiedź
        disableClicks &&
          option === correctAnswer &&
          'border-primary bg-primary/5 shadow-sm',

        // Błędna odpowiedź
        disableClicks &&
          option === selected &&
          option !== correctAnswer &&
          'border-danger bg-danger/5',

        // Pozostałe odpowiedzi po wyborze
        disableClicks &&
          option !== selected &&
          option !== correctAnswer &&
          'opacity-50',
      ]"
    >
      <!-- Radio -->
      <span
        class="mt-0.5 h-5 w-5 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-accent"
        :class="[
          disableClicks && option === correctAnswer && 'border-primary',
          disableClicks &&
            option === selected &&
            option !== correctAnswer &&
            'border-danger',
        ]"
      >
        <span
          class="h-2.5 w-2.5 rounded-full transition-all duration-300"
          :class="[
            // Podgląd przy najechaniu przed wyborem
            !disableClicks &&
              'scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-40 bg-accent',

            // Poprawna odpowiedź po wyborze
            disableClicks &&
              option === selected &&
              option === correctAnswer &&
              'scale-100 opacity-100 bg-primary group-hover:bg-accent',

            // Błędna odpowiedź po wyborze
            disableClicks &&
              option === selected &&
              option !== correctAnswer &&
              'scale-100 opacity-100 bg-danger group-hover:bg-accent',

            // Ukrycie w pozostałych przypadkach
            (!disableClicks || option !== selected) && 'scale-0 opacity-0',
          ]"
        />
      </span>

      <!-- Treść odpowiedzi -->
      <span class="text-sm md:text-base text-text leading-relaxed">
        {{ option }}
      </span>
    </li>
  </ul>

  <!-- Wyjaśnienie odpowiedzi -->
  <div
    v-if="showExplanation && explanation"
    class="mt-4 rounded-xl border border-border/50 bg-section/40 px-4 py-3 text-sm text-text/80 animate-fade-in"
  >
    <span class="block font-semibold text-primary mb-1"> Wyjaśnienie: </span>

    {{ explanation }}
  </div>
</template>
