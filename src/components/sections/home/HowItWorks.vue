<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Dane kroków do sekcji "Jak to działa"
const steps = [
  {
    step: "1",
    title: "Wybierz moduł",
    desc: "Podstawy, ryzyko, ETF - co dziś przerabiamy?",
  },

  {
    step: "2",
    title: "Zrób szybki quiz",
    desc: "Kilka pytań, XP i natychmiastowy feedback.",
  },

  {
    step: "3",
    title: "Utrzymaj streak",
    desc: "Wpada bonus, rośnie poziom, motywacja wraca.",
  },
];
</script>

<template>
  <section
    id="learn-more"
    class="py-14 bg-section scroll-mt-28 md:scroll-mt-32"
  >
    <div class="max-w-6xl mx-auto px-4 text-center">
      <!-- Nagłówek sekcji -->
      <div class="animate-fade-slide-delay-3">
        <SectionTitle eyebrow="Jak to działa" title="3 kroki i gotowe" />
      </div>

      <div class="relative mt-12 animate-fade-slide-delay-4">
        <!-- Lista kroków -->
        <ol
          class="grid gap-5 md:grid-cols-3"
          aria-label="Jak to działa – kroki"
        >
          <!-- Pojedynczy krok -->
          <li
            v-for="(s, i) in steps"
            :key="s.step"
            class="group rounded-3xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition opacity-0 animate-fade-in"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <!-- Numer kroku w kółku -->
            <div
              class="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white font-bold shadow-sm ring-2 ring-card md:mx-auto"
            >
              {{ s.step }}
            </div>

            <!-- Tytuł i opis kroku -->
            <h3 class="mt-3 text-lg font-semibold text-primary text-center">
              {{ s.title }}
            </h3>
            <p class="mt-1 text-text/80 text-center">{{ s.desc }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
