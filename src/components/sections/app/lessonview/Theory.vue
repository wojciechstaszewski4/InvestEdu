<script setup>
// Importy Vue
import { computed } from "vue";

// Parser Markdown -> HTML
import { marked } from "marked";

// Sanitizer HTML (ochrona przed XSS)
import DOMPurify from "dompurify";

// Props przekazywane z LessonTheoryView
const props = defineProps({
  theory: {
    type: Object,
    required: true,
  },
});

// Konfiguracja parsera Markdown
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Zamiana Markdown -> bezpieczny HTML
function renderMarkdown(text = "") {
  const rawHtml = marked.parse(text);
  return DOMPurify.sanitize(rawHtml);
}

// Przygotowanie sekcji teorii do renderowania
const sections = computed(() =>
  (props.theory?.content || []).map((section) => ({
    heading: section.heading || "",
    html: renderMarkdown(section.text || ""),
  }))
);
</script>

<template>
  <!-- Wrapper treści -->
  <div class="relative px-3 md:px-4 py-5 md:py-6 overflow-x-hidden">
    <!-- Tytuł rozdziału -->
    <div class="relative mb-10">
      <h1
        class="relative z-10 text-[30px] md:text-[36px] 2xl:text-[40px] font-extrabold tracking-tight leading-tight text-text/85"
      >
        {{ theory.title }}
      </h1>

      <!-- Subtelna linia świetlna -->
      <div
        class="mt-6 h-0.5 w-20 rounded-full bg-linear-to-r from-warm-light via-accent to-transparent opacity-80 blur-[0.3px]"
      ></div>
    </div>

    <!-- Sekcje treści -->
    <section
      v-for="(section, index) in sections"
      :key="index"
      class="mb-10 last:mb-6"
    >
      <!-- Nagłówek sekcji -->
      <h2
        class="mb-4 text-[20px] md:text-[24px] font-bold tracking-tight text-primary"
      >
        {{ section.heading }}
      </h2>

      <!-- Tekst sekcji (Markdown -> HTML) -->
      <div
        class="relative pl-4 md:pl-5 border-l-4 border-accent/60 text-[15px] md:text-[16px] leading-relaxed text-text/85 space-y-4 overflow-x-hidden wrap-break-word [&_img]:max-w-full [&_pre]:overflow-x-auto [&_code]:break-all"
        v-html="section.html"
      ></div>
    </section>
  </div>
</template>
