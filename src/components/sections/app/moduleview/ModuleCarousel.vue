<script setup>
// Importy
import { computed, ref, watch, onMounted, onBeforeUnmount } from "vue";
import ModuleCard from "./ModuleCard.vue";

// Props wejściowe
const props = defineProps({
  modules: Array,
  expanded: Boolean,
});

// Emitery zdarzeń karuzeli
const emit = defineEmits(["update:active", "open-details"]);

// Aktualnie wybrany index karty
const activeIndex = ref(0);

// Ilość widocznych kart jednocześnie
const visibleCount = ref(3);

// Referencja do kontenera karuzeli
const carouselRef = ref(null);

// Minimalna szerokość karty
const CARD_MIN_WIDTH = 300;

// Przestrzeń zajmowana przez strzałki
const ARROWS_SPACE = 150;

// Próg przeciągania kart dla mobile
const SWIPE_THRESHOLD = 70;

// Obserwator zmiany rozmiaru
let resizeObserver = null;

// Przesunięcie poziome podczas przeciągania
const dragX = ref(0);

// Flagi stanu przeciągania i animacji
const isDragging = ref(false);
const isAnimating = ref(false);

// Aktualizacja liczby widocznych kart
const updateVisibleCount = () => {
  if (!carouselRef.value) return;

  let width = carouselRef.value.offsetWidth;

  if (!showArrows.value) {
    width -= ARROWS_SPACE;
    if (width < 0) width = 0;
  }

  const count = Math.floor(width / CARD_MIN_WIDTH);
  visibleCount.value = Math.max(1, Math.min(3, count));
};

// Inicjalizacja obserwatora szerokości
onMounted(() => {
  resizeObserver = new ResizeObserver(updateVisibleCount);

  if (carouselRef.value) {
    resizeObserver.observe(carouselRef.value);
  }

  updateVisibleCount();
});

// Sprzątanie obserwatora przy usunięciu komponentu
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});

// Zmiana aktywnej karty z zawijaniem indeksów
const setActiveIndex = (i) => {
  const total = props.modules?.length || 0;
  if (!total) return;
  const n = (i + total) % total;
  activeIndex.value = n;
  const id = props.modules[n]?.id;
  if (id) emit("update:active", id);
};

// Reakcja na zmianę listy modułów
watch(() => props.modules, updateVisibleCount, { immediate: true });

// Obliczanie widocznych kart
const visibleModules = computed(() => {
  const list = props.modules || [];
  const total = list.length;
  const vc = visibleCount.value;

  if (total === 0) return [];

  if (total <= vc) {
    return list.map((module, index) => ({
      module,
      index,
      pos: index === activeIndex.value ? "cur" : "side",
    }));
  }

  const cur = activeIndex.value;
  const half = Math.floor(vc / 2);
  const indexes = [];

  for (let i = 0; i < vc; i++) {
    indexes.push((cur - half + i + total) % total);
  }

  return indexes.map((i) => ({
    module: list[i],
    index: i,
    pos: i === cur ? "cur" : "side",
  }));
});

// Informacja czy wyświetlać strzałki
const showArrows = computed(() => visibleCount.value > 1);

// Pozycja startowa dotyku
const touchStartX = ref(0);

// Obsługa rozpoczęcia przeciągania
const handleTouchStart = (e) => {
  if (showArrows.value) return;
  isDragging.value = true;
  isAnimating.value = false;
  dragX.value = 0;
  touchStartX.value = e.touches[0].clientX;
};

// Obsługa przeciągania
const handleTouchMove = (e) => {
  if (!isDragging.value || showArrows.value) return;
  const x = e.touches[0].clientX;
  dragX.value = x - touchStartX.value;
};

// Obsługa zakończenia przeciągania
const handleTouchEnd = () => {
  if (showArrows.value) return;

  isDragging.value = false;

  if (dragX.value < -SWIPE_THRESHOLD) {
    isAnimating.value = true;
    dragX.value = -300;
    setTimeout(() => {
      setActiveIndex(activeIndex.value + 1);
      dragX.value = 0;
      isAnimating.value = false;
    }, 200);
    return;
  }

  if (dragX.value > SWIPE_THRESHOLD) {
    isAnimating.value = true;
    dragX.value = 300;
    setTimeout(() => {
      setActiveIndex(activeIndex.value - 1);
      dragX.value = 0;
      isAnimating.value = false;
    }, 200);
    return;
  }

  isAnimating.value = true;
  dragX.value = 0;

  setTimeout(() => {
    isAnimating.value = false;
  }, 200);
};

// Wyliczanie stylu przeciąganej karty
const getCardStyle = (item) => {
  if (item.pos !== "cur" || showArrows.value) return {};

  const rotate = dragX.value * 0.05;
  const opacity = 1 - Math.min(Math.abs(dragX.value) / 250, 0.4);

  return {
    transform: `translateX(${dragX.value}px) rotateY(${rotate}deg)`,
    opacity,
    transition: isDragging.value
      ? "none"
      : isAnimating.value
      ? "transform 0.23s ease, opacity 0.23s ease"
      : "none",
  };
};
</script>

<template>
  <div class="w-full">
    <div class="mx-auto max-w-6xl flex items-center gap-6 py-6 md:py-10">
      <!-- Strzałka lewa -->
      <button
        v-if="showArrows"
        type="button"
        @click="setActiveIndex(activeIndex - 1)"
        class="shrink-0 h-11 w-11 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-border bg-card text-text text-lg cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:bg-section/60 hover:shadow-lg hover:scale-[1.05] active:scale-[0.97]"
      >
        ‹
      </button>

      <!-- Kontener karuzeli -->
      <div
        ref="carouselRef"
        class="flex flex-1 min-h-70 md:min-h-82.5 2xl:min-h-90 items-stretch gap-4 md:gap-6"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="item in visibleModules"
          :key="item.index"
          class="flex-1 min-w-0 transition-all duration-500 ease-out"
          :class="{
            'z-20 scale-100 opacity-100': item.pos === 'cur',
            'scale-95 opacity-90': item.pos !== 'cur',
          }"
          :style="getCardStyle(item)"
        >
          <ModuleCard
            class="h-full w-full"
            :item="item.module"
            :module-id="item.module.id"
            :is-active="item.pos === 'cur'"
            :expanded="expanded"
            @select="setActiveIndex(item.index)"
            @open-details="emit('open-details', item.module.id)"
          />
        </div>
      </div>

      <!-- Strzałka prawa -->
      <button
        v-if="showArrows"
        type="button"
        @click="setActiveIndex(activeIndex + 1)"
        class="shrink-0 h-11 w-11 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-border bg-card text-text text-lg cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:bg-section/60 hover:shadow-lg hover:scale-[1.05] active:scale-[0.97]"
      >
        ›
      </button>
    </div>
  </div>
</template>
