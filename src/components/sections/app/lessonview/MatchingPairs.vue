<script setup>
// Importy Vue
import { ref, computed, watch } from "vue";

// Audio
import correctSound from "@/assets/sounds/correct.mp3";
import incorrectSound from "@/assets/sounds/wrong.mp3";

// Props z Quiz.vue
const props = defineProps({
  pairs: {
    type: Array,
    required: true,
  },
});

// Emit punktów (1 = zaliczone, 0 = nie)
const emit = defineEmits(["points"]);

// Audio feedback
const correctAudio = new Audio(correctSound);
const incorrectAudio = new Audio(incorrectSound);

// Stan zaznaczeń
const selectedLeft = ref(null);
const selectedRight = ref(null);

// Lista wszystkich dopasowanych elementów (lewe + prawe)
const matched = ref([]);

// Stan chwilowego błędu (do animacji czerwonego mignięcia)
const wrongLeft = ref(null);
const wrongRight = ref(null);

// Lewa i prawa kolumna
const leftItems = computed(() => props.pairs.map((p) => p.left));
const rightItems = ref([]);

// Sprawdzenie dopasowania
function tryMatch() {
  if (!selectedLeft.value || !selectedRight.value) return;

  const pair = props.pairs.find(
    (p) => p.left === selectedLeft.value && p.right === selectedRight.value
  );

  if (pair) {
    // Poprawne dopasowanie -> zapisujemy obie strony pary
    if (!matched.value.includes(pair.left)) {
      matched.value.push(pair.left, pair.right);
    }

    correctAudio.currentTime = 0;
    correctAudio.play();

    // Sprawdzenie czy wszystkie elementy są dopasowane
    if (matched.value.length === props.pairs.length * 2) {
      emit("points", 1);
    }
  } else {
    // Błędne dopasowanie -> czerwony flash
    wrongLeft.value = selectedLeft.value;
    wrongRight.value = selectedRight.value;

    incorrectAudio.currentTime = 0;
    incorrectAudio.play();

    setTimeout(() => {
      wrongLeft.value = null;
      wrongRight.value = null;
    }, 400);
  }

  // Reset zaznaczeń
  selectedLeft.value = null;
  selectedRight.value = null;
}

// Klik po lewej
function selectLeft(item) {
  if (matched.value.includes(item)) return;
  selectedLeft.value = item;
  tryMatch();
}

// Klik po prawej
function selectRight(item) {
  if (matched.value.includes(item)) return;
  selectedRight.value = item;
  tryMatch();
}

// Losowanie prawej kolumny tylko raz (lub przy zmianie par)
watch(
  () => props.pairs,
  () => {
    rightItems.value = [...props.pairs.map((p) => p.right)].sort(
      () => Math.random() - 0.5
    );
  },
  { immediate: true }
);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Lewa kolumna -->
    <div class="space-y-3">
      <!-- Nagłówek grupy (mobile + desktop) -->
      <p
        class="text-xs font-semibold uppercase tracking-wide text-text/50 md:text-sm md:text-text/70"
      >
        Zestaw A
      </p>

      <div
        v-for="item in leftItems"
        :key="item"
        class="px-4 py-3 rounded-xl border text-sm md:text-base leading-relaxed transition-all duration-300 ease-out cursor-pointer hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98]"
        :class="[
          // Poprawnie dopasowane
          matched.includes(item) && 'bg-primary/5 border-primary shadow-sm',

          // Aktualnie zaznaczone
          selectedLeft === item &&
            !matched.includes(item) &&
            'bg-accent/5 border-accent',

          // Błędne dopasowanie (flash)
          wrongLeft === item && 'bg-danger/5 border-danger',

          // Domyślny stan
          !matched.includes(item) &&
            selectedLeft !== item &&
            wrongLeft !== item &&
            'bg-section/40 border-border/60 hover:border-accent/60 hover:bg-accent/5',
        ]"
        @click="selectLeft(item)"
      >
        {{ item }}
      </div>
    </div>

    <!-- Separator między grupami tylko na mobile -->
    <div class="md:hidden my-1">
      <div class="h-px bg-border/60"></div>
    </div>

    <!-- Prawa kolumna -->
    <div class="space-y-3">
      <!-- Nagłówek grupy (mobile + desktop) -->
      <p
        class="text-xs font-semibold uppercase tracking-wide text-text/50 md:text-sm md:text-text/70"
      >
        Zestaw B
      </p>

      <div
        v-for="item in rightItems"
        :key="item"
        class="px-4 py-3 rounded-xl border text-sm md:text-base leading-relaxed transition-all duration-300 ease-out cursor-pointer hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98]"
        :class="[
          // Poprawnie dopasowane
          matched.includes(item) && 'bg-primary/5 border-primary shadow-sm',

          // Aktualnie zaznaczone
          selectedRight === item &&
            !matched.includes(item) &&
            'bg-accent/5 border-accent',

          // Błędne dopasowanie (flash)
          wrongRight === item && 'bg-danger/5 border-danger',

          // Domyślny stan
          !matched.includes(item) &&
            selectedRight !== item &&
            wrongRight !== item &&
            'bg-section/40 border-border/60 hover:border-accent/60 hover:bg-accent/5',
        ]"
        @click="selectRight(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
