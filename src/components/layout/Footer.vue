<script setup>
import { siGithub } from "simple-icons";

// Definicja właściwości przekazywanych z App.vue
const { brand } = defineProps({
  brand: { type: String, default: "InvestEdu" },
});

const tagline = "Ucz się inwestowania po ludzku.";
const github = "https://github.com/Srb404/InvestEdu";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="mt-auto text-sm">
    <!-- Górna część stopki -->
    <div class="bg-section">
      <div
        class="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 px-4 py-4 text-center sm:flex-nowrap sm:justify-between"
      >
        <!-- Brand + tagline -->
        <div
          class="flex flex-wrap items-center justify-center gap-2 text-text/80"
        >
          <h2 class="font-semibold text-primary">{{ brand }}</h2>
          <span class="hidden sm:inline">•</span>
          <p class="text-xs text-text/70">{{ tagline }}</p>
        </div>

        <!-- Link do GitHub -->
        <a
          :href="github"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit project on GitHub"
          class="inline-flex items-center gap-2 rounded-full border border-primary/50 px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-white hover:shadow-sm transition-all duration-300 cursor-pointer"
        >
          <svg
            class="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="img"
            aria-hidden="true"
          >
            <path :d="siGithub.path" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>

      <!-- Linki prawne -->
      <div
        class="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4 pb-5 text-[12px] text-text/70 sm:gap-4"
      >
        <RouterLink to="/privacy" class="hover:text-primary transition-colors">
          Polityka prywatności
        </RouterLink>

        <span class="text-text/40">•</span>

        <RouterLink to="/terms" class="hover:text-primary transition-colors">
          Regulamin
        </RouterLink>

        <span class="text-text/40">•</span>

        <RouterLink
          to="/data-deletion"
          class="hover:text-primary transition-colors"
        >
          Usuwanie danych
        </RouterLink>

        <span class="text-text/40">•</span>

        <RouterLink to="/cookies" class="hover:text-primary transition-colors">
          Cookies
        </RouterLink>

        <span class="text-text/40">•</span>

        <RouterLink to="/contact" class="hover:text-primary transition-colors">
          Kontakt
        </RouterLink>
      </div>
    </div>

    <!-- Dolny pasek praw autorskich -->
    <div
      class="border-t border-border text-center text-[11px] py-2 text-text/60"
    >
      © {{ year }} <span class="font-semibold text-primary">{{ brand }}</span
      >. Wszelkie prawa zastrzeżone.
    </div>
  </footer>
</template>
