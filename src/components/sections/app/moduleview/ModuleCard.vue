<script setup>
// Importy
import { computed, ref, nextTick, watch } from "vue";

// Props wejściowe
const props = defineProps({
  item: {
    type: Object,
    required: false,
    default: () => ({}),
  },

  moduleId: {
    type: Number,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  expanded: {
    type: Boolean,
    default: false,
  },
});

// Emiter zdarzeń karty
const emit = defineEmits(["select", "open-details"]);

// Referencja do sekcji opisu (do animacji wysokości)
const descEl = ref(null);

// Obsługa kliknięcia w kartę
// - nieaktywna karta -> przesunięcie karuzeli
// - aktywna karta -> otworzenie kolejnego widoku
function handleCardClick() {
  if (!props.item?.id) return;

  // Aktywna karta -> szczegóły, nieaktywna -> fokus
  emit(props.isActive ? "open-details" : "select", props.item.id);
}

// Animacja rozwijania i zwijania opisu
watch(
  () => props.expanded,
  async (val) => {
    await nextTick();

    if (!descEl.value) return;

    const el = descEl.value;
    const content = el.firstElementChild;

    // Bezpiecznik - gdyby struktura się zmieniła
    if (!content || !(content instanceof HTMLElement)) return;

    if (val) {
      // Ustawienie docelowej wysokości podczas rozwijania
      el.style.setProperty("--h", content.scrollHeight + "px");
    } else {
      // Ustawienie aktualnej wysokości przed zwinięciem
      const currentHeight = content.scrollHeight;
      el.style.setProperty("--h", currentHeight + "px");

      // Wymuszenie reflow dla poprawnej animacji
      void el.offsetHeight;

      // Zmiana wysokości na 0 podczas zwijania
      el.style.setProperty("--h", "0px");
    }
  }
);

// Klasy wyglądu aktywnej i nieaktywnej karty
const cardClass = computed(() =>
  props.isActive
    ? "border-accent ring-1 ring-accent/30 shadow-lg shadow-accent/10 scale-[1.015] hover:shadow-xl hover:shadow-accent/15 hover:scale-[1.025] hover:border-accent"
    : "border-border/60 bg-card/60 ring-1 ring-border/30 backdrop-blur-sm hover:border-border hover:shadow-md hover:scale-[1.015]"
);
</script>

<template>
  <div
    @click="handleCardClick"
    class="relative flex flex-col h-full w-full cursor-pointer rounded-2xl border bg-card p-6 transition-all duration-300 ease-out select-none"
    :class="cardClass"
  >
    <!-- Badge: numer modułu -->
    <div
      class="absolute top-3 left-3 z-10 rounded-full font-medium whitespace-nowrap px-2 py-0.5 text-[11px] sm:px-2.5 backdrop-blur-sm"
      :class="isActive ? 'bg-accent text-white' : 'bg-accent/10 text-accent'"
    >
      Moduł {{ moduleId }}
    </div>

    <!-- Sekcja treści karty -->
    <div class="flex-1 flex flex-col justify-center space-y-4 pt-6">
      <div class="text-center space-y-2 px-2">
        <!-- Tytuł modułu -->
        <h3 class="text-lg font-semibold text-text tracking-tight">
          {{ item.name || "Nieznany moduł" }}
        </h3>

        <!-- Krótki opis modułu -->
        <p class="text-sm leading-relaxed text-text/90">
          {{ item.desc || "Brak opisu." }}
        </p>
      </div>

      <!-- Rozszerzony opis modułu -->
      <Transition name="expand">
        <div
          v-show="expanded"
          ref="descEl"
          class="overflow-hidden rounded-lg bg-section/40 border border-border/40 text-sm leading-relaxed"
        >
          <div class="px-4 py-3.5">
            <p v-if="item.longDesc" class="line-clamp-none text-center w-full">
              {{ item.longDesc }}
            </p>

            <p v-else class="opacity-50 italic text-center w-full">
              Opis dostępny wkrótce
            </p>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Start (bez akcji) -->
    <div
      class="mt-5 w-full px-5 py-2.5 rounded-lg text-sm font-medium text-center shadow-sm transition-all duration-300"
      :class="
        isActive ? 'bg-primary text-white' : 'bg-primary/40 text-white/40'
      "
    >
      {{ item.cta || "Start" }}
    </div>
  </div>
</template>
