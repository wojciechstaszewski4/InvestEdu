<script setup>
// Obsługa reaktywności Vue
import { ref } from "vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";

// Lista pytań i odpowiedzi wyświetlanych w sekcji FAQ
const faqs = [
  {
    q: "Ile to kosztuje?",
    a: "Nic, a nic! Nasz projekt jest w 100 % darmowy.",
  },

  {
    q: "Czy są reklamy?",
    a: "Nie. Zero reklam, zero paywalli.",
  },

  {
    q: "Co z prywatnością?",
    a: "Minimalizujemy zbieranie danych – używamy tylko tego, co potrzebne do zapisu postępów.",
  },
];

// Indeks aktualnie otwartego pytania (null = wszystkie zamknięte)
const openIndex = ref(null);

// Przełączanie otwarcia i zamknięcia pytania FAQ
const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section class="py-14 bg-section">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Tytuł sekcji -->
      <div class="animate-fade-slide-delay-6">
        <SectionTitle eyebrow="FAQ" title="Krótko i na temat" />
      </div>

      <!-- Lista pytań -->
      <div class="space-y-3 mt-6" aria-label="Najczęściej zadawane pytania">
        <div
          v-for="(f, i) in faqs"
          :key="i"
          @click="toggleFaq(i)"
          class="group cursor-pointer rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md animate-fade-slid-de"
          :style="{ animationDelay: `${i * 120}ms` }"
        >
          <!-- Nagłówek pytania -->
          <button
            type="button"
            class="w-full cursor-pointer flex items-center justify-between gap-3 px-5 py-4 font-semibold text-primary hover:bg-section rounded-2xl select-none transition-colors"
          >
            <span>{{ f.q }}</span>

            <svg
              class="size-5 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === i }"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <!-- Treść odpowiedzi -->
          <div
            class="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out"
            :class="
              openIndex === i
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            "
          >
            <div class="overflow-hidden">
              <div class="px-5 pt-2 pb-5">
                <p>{{ f.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
