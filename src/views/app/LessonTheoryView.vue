<script setup>
// Importy Vue
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

// Loader treści teoretycznych rozdziału
import { loadTheory } from "@/data/loaders/theory";

// Komponent renderujący teorię
import Theory from "@/components/sections/app/lessonview/Theory.vue";

// Dostęp do aktualnej trasy
const route = useRoute();

// Parametry trasy (kontekst modułu, kursu i rozdziału)
const moduleId = computed(() => Number(route.params.moduleId));
const courseId = computed(() => Number(route.params.courseId));
const chapterId = computed(() => Number(route.params.chapterId));

// Obiekt teorii aktualnego rozdziału
const theoryContent = ref(null);

// Flaga ładowania treści
const isLoading = ref(true);

// Pobranie teorii na podstawie parametrów trasy
async function fetchTheory() {
  isLoading.value = true;

  try {
    theoryContent.value = await loadTheory(
      moduleId.value,
      courseId.value,
      chapterId.value
    );
  } catch {
    theoryContent.value = null;
  } finally {
    isLoading.value = false;
  }
}

// Inicjalizacja widoku
onMounted(fetchTheory);

// Reakcja na zmianę rozdziału (nawigacja w obrębie kursu)
watch(
  () => [route.params.moduleId, route.params.courseId, route.params.chapterId],
  fetchTheory
);
</script>

<template>
  <!-- Wrapper treści teoretycznej -->
  <article class="theory-content max-w-none">
    <!-- Loader treści -->
    <div v-if="isLoading" class="space-y-4 animate-pulse">
      <div class="h-4 w-2/3 rounded skeleton"></div>
      <div class="h-4 w-full rounded skeleton"></div>
      <div class="h-4 w-5/6 rounded skeleton"></div>
      <div class="h-4 w-3/4 rounded skeleton"></div>
    </div>

    <!-- Brak treści teorii -->
    <div
      v-else-if="!theoryContent"
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
        Treść teoretyczna dla tego rozdziału nie jest jeszcze dostępna.
      </span>
    </div>

    <!-- Treść teorii -->
    <Theory v-else :theory="theoryContent" />
  </article>
</template>
