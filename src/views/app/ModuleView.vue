<script setup>
// Importy
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ROUTE } from "@/router";

// Komponenty modułów
import ModuleCarousel from "@/components/sections/app/moduleview/ModuleCarousel.vue";

// Dane modułów
import { modules as rawModules } from "@/data/modules.js";

// Router
const router = useRouter();

// Lista modułów z nadanym ID
const modules = ref(rawModules.map((m, i) => ({ id: i + 1, ...m })));

// Przełącznik widoczności opisów
const showDescriptions = ref(false);

// Przejście do widoku szczegółów modułu
const openDetails = (moduleId) => {
  router.push({
    name: ROUTE.MODULE_DETAILS,
    params: { moduleId },
  });
};
</script>

<template>
  <!-- Główny wrapper strony modułów -->
  <section class="mx-auto w-full max-w-6xl px-6 py-8 flex-1 space-y-8">
    <!-- Nagłówek -->
    <header class="space-y-1.5 animate-fade-slide-delay">
      <h1 class="text-2xl font-semibold text-text">Ścieżka modułów</h1>

      <p class="text-sm text-text/70 max-w-2xl">
        Wybierz moduł, od którego chcesz rozpocząć naukę, lub kontynuuj
        rozpoczęty kurs.
      </p>
    </header>

    <!-- Karuzela modułów -->
    <div class="space-y-6 animate-fade-slide-delay-2">
      <ModuleCarousel
        :modules="modules"
        :expanded="showDescriptions"
        @open-details="openDetails"
      />

      <!-- Przycisk rozwijania opisów -->
      <div class="flex justify-center animate-fade-slide-delay-2">
        <button
          type="button"
          @click="showDescriptions = !showDescriptions"
          class="px-5 py-2.5 rounded-full border border-border/70 bg-card text-sm font-medium text-text/80 transition-all duration-300 ease-out cursor-pointer hover:border-accent hover:text-accent hover:bg-section/70 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
        >
          {{ showDescriptions ? "Zwiń opisy" : "Rozwiń opisy" }}
        </button>
      </div>
    </div>
  </section>
</template>
