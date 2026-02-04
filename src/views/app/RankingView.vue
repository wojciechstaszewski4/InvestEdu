<script setup>
// Import komponentu tytułu sekcji
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Import narzędzi Vue
import { ref, onMounted, onUnmounted } from "vue";

// Import domeny
import { pluralizeDay } from "@/domain/text";

// Import toast
import { showToast } from "@/composables/useToast";

// Import serwisów rankingu
import {
  getLeaderboard,
  getStreakLeaderboard,
} from "@/components/services/userProgress.js";

// Dane rankingu XP
const xpRows = ref([]);
const xpLoading = ref(true);

// Dane rankingu streak
const streakRows = ref([]);
const streakLoading = ref(true);

// Wspólna funkcja przeładowania rankingów
async function reloadRankings() {
  xpLoading.value = true;
  streakLoading.value = true;

  xpRows.value = (await getLeaderboard(10)) || [];
  streakRows.value = (await getStreakLeaderboard(10)) || [];

  xpLoading.value = false;
  streakLoading.value = false;
}

// Pobranie danych po wejściu na widok
onMounted(async () => {
  try {
    await reloadRankings();
  } catch (err) {
    showToast("Nie udało się pobrać rankingu 😕");
  }

  // Odświeżanie rankingu po zmianie preferencji
  window.addEventListener("user:preferences-updated", reloadRankings);
});

// Sprzątanie listenera
onUnmounted(() => {
  window.removeEventListener("user:preferences-updated", reloadRankings);
});
</script>

<template>
  <!-- Główna sekcja rankingu -->
  <section class="py-6 animate-fade-in">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 space-y-10">
      <!-- Nagłówek widoku -->
      <SectionTitle
        eyebrow="Ranking"
        title="Najlepsi użytkownicy"
        subtitle="Porównaj postępy, doświadczenie i wytrwałość w nauce."
      />

      <!-- Grid kart rankingowych -->
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Ranking XP -->
        <section
          class="rounded-2xl border border-border bg-card backdrop-blur p-4 sm:p-6 shadow-sm transition hover:shadow-md"
        >
          <!-- Nagłówek -->
          <header class="mb-5 space-y-1">
            <h3 class="text-sm font-semibold text-text/90">Ranking XP</h3>
            <p class="text-xs text-text/60">
              Najwięcej zdobytego doświadczenia
            </p>
          </header>

          <!-- Lista -->
          <div
            class="pt-1 space-y-1 overflow-hidden transition-[max-height] duration-500 ease-out"
            :class="xpLoading ? 'max-h-65' : 'max-h-250'"
          >
            <!-- Skeleton -->
            <template v-if="xpLoading">
              <div v-for="n in 10" :key="n" class="h-11 rounded-xl skeleton" />
            </template>

            <template v-else>
              <!-- Wersja na mobile -->
              <div
                v-for="(r, i) in xpRows"
                :key="`xp-mobile-${r.id}`"
                class="sm:hidden group rounded-xl px-3 py-3 animate-fade-in transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-sm"
                :style="{ animationDelay: `${i * 60}ms` }"
                :class="
                  r.place === 1
                    ? 'bg-primary/5 border border-primary/40 hover:bg-primary/10 hover:border-primary/50'
                    : 'bg-section/40 hover:bg-section'
                "
              >
                <!-- Góra -->
                <div class="flex items-center gap-2 min-w-0">
                  <span
                    class="w-6 shrink-0 text-xs font-semibold"
                    :class="r.place === 1 ? 'text-primary' : 'text-text/60'"
                  >
                    #{{ r.place }}
                  </span>

                  <span
                    class="min-w-0 wrap-break-word text-sm font-medium text-text/90 transition-colors duration-300 group-hover:text-primary"
                  >
                    {{ r.displayName }}
                  </span>
                </div>

                <!-- Dół: XP + LVL -->
                <div
                  class="mt-2 grid grid-cols-[1fr_48px] items-center gap-3 text-xs text-text/60 tabular-nums"
                >
                  <span class="whitespace-nowrap text-left">
                    {{ r.xp?.toLocaleString("pl-PL") ?? "-" }} XP
                  </span>
                  <span class="whitespace-nowrap text-right">
                    lvl {{ r.level ?? "-" }}
                  </span>
                </div>
              </div>

              <!-- Wersja na desktop -->
              <div
                v-for="(r, i) in xpRows"
                :key="`xp-desktop-${r.id}`"
                class="hidden sm:grid group grid-cols-[36px_1fr_auto] items-center gap-4 rounded-xl px-4 py-3 animate-fade-in transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-sm"
                :style="{ animationDelay: `${i * 60}ms` }"
                :class="
                  r.place === 1
                    ? 'bg-primary/5 border border-primary/40 hover:bg-primary/10 hover:border-primary/50'
                    : 'bg-section/40 hover:bg-section'
                "
              >
                <span
                  class="text-xs font-semibold text-center"
                  :class="r.place === 1 ? 'text-primary' : 'text-text/60'"
                >
                  #{{ r.place }}
                </span>

                <span
                  class="truncate min-w-0 text-sm font-medium text-text/90 transition-colors duration-300 group-hover:text-primary"
                >
                  {{ r.displayName }}
                </span>

                <div
                  class="grid grid-cols-[auto_48px] gap-4 text-xs text-text/70 tabular-nums text-right whitespace-nowrap"
                >
                  <span>{{ r.xp?.toLocaleString("pl-PL") ?? "-" }} XP</span>
                  <span class="text-text/60">lvl {{ r.level ?? "-" }}</span>
                </div>
              </div>
            </template>
          </div>
        </section>

        <!-- Ranking serii -->
        <section
          class="rounded-2xl border border-border bg-card backdrop-blur p-4 sm:p-6 shadow-sm transition hover:shadow-md"
        >
          <!-- Nagłówek -->
          <header class="mb-5 space-y-1">
            <h3 class="text-sm font-semibold text-text/90">Ranking serii</h3>
            <p class="text-xs text-text/60">
              Najdłuższe serie codziennej nauki
            </p>
          </header>

          <!-- Lista -->
          <div
            class="pt-1 space-y-1 overflow-hidden transition-[max-height] duration-500 ease-out"
            :class="streakLoading ? 'max-h-65' : 'max-h-250'"
          >
            <!-- Skeleton -->
            <template v-if="streakLoading">
              <div v-for="n in 10" :key="n" class="h-11 rounded-xl skeleton" />
            </template>

            <template v-else>
              <!-- Wersja na mobile -->
              <div
                v-for="(r, i) in streakRows"
                :key="`streak-mobile-${r.id}`"
                class="sm:hidden group rounded-xl px-3 py-3 animate-fade-in transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-sm"
                :style="{ animationDelay: `${i * 60}ms` }"
                :class="
                  r.place === 1
                    ? 'bg-primary/5 border border-primary/40 hover:bg-primary/10 hover:border-primary/50'
                    : 'bg-section/40 hover:bg-section'
                "
              >
                <!-- Góra -->
                <div class="flex items-center gap-2 min-w-0">
                  <span
                    class="w-6 shrink-0 text-xs font-semibold"
                    :class="r.place === 1 ? 'text-primary' : 'text-text/60'"
                  >
                    #{{ r.place }}
                  </span>

                  <span
                    class="min-w-0 wrap-break-word text-sm font-medium text-text/90 transition-colors duration-300 group-hover:text-primary"
                  >
                    {{ r.displayName }}
                  </span>
                </div>

                <!-- Dół: DNI + LVL -->
                <div
                  class="mt-2 grid grid-cols-[1fr_48px] items-center gap-3 text-xs text-text/60 tabular-nums"
                >
                  <span class="whitespace-nowrap text-left">
                    {{ r.streak.toLocaleString("pl-PL") }}
                    {{ pluralizeDay(r.streak) }}
                  </span>
                  <span class="whitespace-nowrap text-right">
                    lvl {{ r.level ?? "-" }}
                  </span>
                </div>
              </div>

              <!-- Wersja na desktop -->
              <div
                v-for="(r, i) in streakRows"
                :key="`streak-desktop-${r.id}`"
                class="hidden sm:grid group grid-cols-[36px_1fr_auto] items-center gap-4 rounded-xl px-4 py-3 animate-fade-in transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-sm"
                :style="{ animationDelay: `${i * 60}ms` }"
                :class="
                  r.place === 1
                    ? 'bg-primary/5 border border-primary/40 hover:bg-primary/10 hover:border-primary/50'
                    : 'bg-section/40 hover:bg-section'
                "
              >
                <span
                  class="text-xs font-semibold text-center"
                  :class="r.place === 1 ? 'text-primary' : 'text-text/60'"
                >
                  #{{ r.place }}
                </span>

                <span
                  class="truncate min-w-0 text-sm font-medium text-text/90 transition-colors duration-300 group-hover:text-primary"
                >
                  {{ r.displayName }}
                </span>

                <div
                  class="grid grid-cols-[auto_48px] gap-4 text-xs text-text/70 tabular-nums text-right whitespace-nowrap"
                >
                  <span>
                    {{ r.streak.toLocaleString("pl-PL") }}
                    {{ pluralizeDay(r.streak) }}
                  </span>
                  <span class="text-text/60">lvl {{ r.level ?? "-" }}</span>
                </div>
              </div>
            </template>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
