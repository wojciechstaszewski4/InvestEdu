<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Lista funkcji prezentowanych na stronie głównej
const features = [
  {
    title: "Szybkie quizy",
    desc: "Krótkie zestawy - nauka w przerwie na herbatę.",
    badge: "3–5 pytań",
  },

  {
    title: "Punkty doświadczenia",
    desc: "Zbieraj punkty, odblokowuj progi i rośnij w siłę.",
    badge: "+10 XP za serię",
  },

  {
    title: "Streak",
    desc: "Dzień po dniu - utrzymaj serię i zdobądź więcej XP.",
    badge: "Bonus dzienny",
  },

  {
    title: "Poziomy",
    desc: "Od Nowicjusza do Mistrza - obserwuj swój postęp.",
    badge: "Odznaki",
  },

  {
    title: "Ranking",
    desc: "Sprawdź jak wypadasz na tle innych - celuj w podium!",
    badge: "Topka",
  },

  {
    title: "Zero reklam",
    desc: "100% za darmo. Bez paywalli, bez śledzenia.",
    badge: "Free forever",
  },
];
</script>

<template>
  <section id="features" class="py-14 bg-section scroll-mt-28 md:scroll-mt-32">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Nagłówek sekcji -->
      <div class="animate-fade-slide-delay-2">
        <SectionTitle
          eyebrow="Funkcje"
          title="Lekko, jasno, po kolei"
          subtitle="To prawie jak fiszki!"
        />
      </div>

      <!-- Lista funkcji -->
      <ul
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 animate-fade-slide-delay-3"
      >
        <li
          v-for="(f, i) in features"
          :key="f.title"
          class="group rounded-3xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition opacity-0 animate-fade-in"
          :style="{ animationDelay: `${i * 120}ms` }"
        >
          <!-- Etykieta -->
          <div class="flex items-center justify-between">
            <span
              class="text-xs inline-flex items-center gap-2 px-2 py-1 rounded-full bg-accent/20 text-accent font-semibold"
            >
              {{ f.badge }}
            </span>
          </div>

          <!-- Tytuł i opis funkcji -->
          <h3 class="mt-3 text-lg font-semibold text-primary">
            {{ f.title }}
          </h3>
          <p class="mt-1 text-text/80">{{ f.desc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
