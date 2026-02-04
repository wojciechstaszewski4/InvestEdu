<script setup>
// Import komponentu tytułu sekcji
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Import logiki rankingu
import { ref, onMounted, onUnmounted } from "vue";
import { getLeaderboard } from "@/components/services/userProgress.js";

// Lista użytkowników (ranking)
const rows = ref([]);
const loading = ref(true);

// Funkcja przeładowująca ranking
async function reload() {
  loading.value = true;
  rows.value = await getLeaderboard(5);
  loading.value = false;
}

// Po zamontowaniu pobieramy ranking
onMounted(async () => {
  try {
    rows.value = await getLeaderboard(5);
  } catch (error) {
    console.error("Błąd podczas pobierania rankingu:", error);
  } finally {
    loading.value = false;
  }

  window.addEventListener("user:preferences-updated", reload);
});

// Sprzątanie listenera
onUnmounted(() => {
  window.removeEventListener("user:preferences-updated", reload);
});
</script>

<template>
  <!-- Sekcja główna rankingu XP -->
  <section id="ranking" class="py-14 bg-section scroll-mt-28 md:scroll-mt-32">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Tytuł sekcji -->
      <div class="animate-fade-slide-delay-4">
        <SectionTitle
          eyebrow="Ranking"
          title="Tabela wyników"
          subtitle="Zobacz jak radzą sobie nasi czempioni."
        />
      </div>

      <!-- Lista kart (mobile) -->
      <div class="mt-6 space-y-2 sm:hidden">
        <!-- Skeleton -->
        <template v-if="loading">
          <div v-for="n in 5" :key="n" class="h-16 rounded-2xl skeleton" />
        </template>

        <!-- Brak danych -->
        <div
          v-else-if="rows.length === 0"
          class="text-center py-6 text-text/60"
        >
          Brak danych w rankingu.
        </div>

        <!-- Wiersze -->
        <div
          v-else
          v-for="(r, i) in rows"
          :key="r.id"
          class="group rounded-2xl border border-border bg-card px-4 py-3 transition-all duration-300 ease-out hover:bg-section hover:-translate-y-px hover:shadow-sm animate-fade-in"
          :style="{ animationDelay: `${i * 60}ms` }"
        >
          <!-- Góra -->
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-6 shrink-0 text-xs font-semibold text-primary">
              #{{ r.place }}
            </span>

            <span
              class="min-w-0 wrap-break-word text-sm font-medium text-text/90"
            >
              {{ r.displayName }}
            </span>
          </div>

          <!-- Dół: XP + LVL -->
          <div
            class="mt-1 grid grid-cols-[1fr_48px] gap-3 text-xs text-text/60 tabular-nums"
          >
            <span class="whitespace-nowrap">
              {{ r.xp?.toLocaleString("pl-PL") ?? "-" }} XP
            </span>
            <span class="text-right whitespace-nowrap">
              lvl {{ r.level ?? "-" }}
            </span>
          </div>
        </div>
      </div>

      <!-- Kontener tabeli (desktop) -->
      <div
        class="hidden sm:block overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition mt-6 animate-fade-slide-delay-5"
      >
        <!-- Tabela rankingu XP -->
        <table class="w-full text-sm tabular-nums">
          <!-- Szerokości kolumn -->
          <colgroup>
            <col class="w-24" />
            <col />
            <col class="w-28" />
            <col class="w-24" />
          </colgroup>

          <!-- Nagłówek -->
          <thead class="bg-card">
            <tr class="text-primary">
              <th class="px-4 py-4 text-left font-medium">Miejsce</th>
              <th class="px-4 py-4 text-left font-medium">Użytkownik</th>
              <th class="px-4 py-4 text-right font-medium">XP</th>
              <th class="px-4 py-4 text-right font-medium">Poziom</th>
            </tr>
          </thead>

          <!-- Dane -->
          <tbody class="divide-y divide-border text-text/80">
            <!-- Skeleton -->
            <template v-if="loading">
              <tr v-for="n in 5" :key="n" class="animate-pulse">
                <td class="px-4 py-4">
                  <div class="h-4 w-10 skeleton rounded" />
                </td>
                <td class="px-4 py-4">
                  <div class="h-4 w-32 skeleton rounded" />
                </td>
                <td class="px-4 py-4 text-right">
                  <div class="h-4 w-14 skeleton rounded ml-auto" />
                </td>
                <td class="px-4 py-4 text-right">
                  <div class="h-4 w-10 skeleton rounded ml-auto" />
                </td>
              </tr>
            </template>

            <!-- Brak danych -->
            <tr v-else-if="rows.length === 0">
              <td colspan="4" class="text-center py-6 text-text/60">
                Brak danych w rankingu.
              </td>
            </tr>

            <!-- Wiersze -->
            <tr
              v-else
              v-for="(r, i) in rows"
              :key="r.id"
              class="hover:bg-section transition animate-fade-in"
              :style="{ animationDelay: `${i * 60}ms` }"
            >
              <td class="px-4 py-4 font-semibold text-primary">
                #{{ r.place }}
              </td>
              <td class="px-4 py-4">
                {{ r.displayName }}
              </td>
              <td class="px-4 py-4 text-right">
                {{ r.xp?.toLocaleString("pl-PL") ?? "-" }}
              </td>
              <td class="px-4 py-4 text-right">
                {{ r.level ?? "-" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
