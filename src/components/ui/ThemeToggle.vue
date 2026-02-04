<script setup>
// Importy Vue
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useTheme } from "@/composables/useTheme";

// Aktualny motyw aplikacji
const { theme, apply } = useTheme();

// Czy system ma tryb ciemny
const systemDark = ref(false);

// Media query systemowego motywu
const media = window.matchMedia("(prefers-color-scheme: dark)");
const handler = (e) => (systemDark.value = e.matches);

// Podpinanie listenera systemowego motywu
onMounted(() => {
  systemDark.value = media.matches;
  media.addEventListener("change", handler);
});

// Sprzątanie listenera
onBeforeUnmount(() => {
  media.removeEventListener("change", handler);
});

// Przełączanie: light -> dark -> system
function cycleTheme() {
  if (theme.value === "light") theme.value = "dark";
  else if (theme.value === "dark") theme.value = "system";
  else theme.value = "light";

  apply();
}

// Ikona zależna od motywu
const currentIcon = computed(() => {
  if (theme.value === "light") return "light";
  if (theme.value === "dark") return "dark";
  return "system";
});
</script>

<template>
  <button
    type="button"
    @click="cycleTheme()"
    class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-text/80 hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer active:scale-95 relative overflow-hidden"
  >
    <!-- Ikona jasnego motywu -->
    <svg
      v-if="currentIcon === 'light'"
      key="light"
      viewBox="0 0 24 24"
      class="h-5 w-5 absolute transition-all duration-300 opacity-100 scale-100"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>

    <!-- Ikona ciemnego motywu -->
    <svg
      v-else-if="currentIcon === 'dark'"
      key="dark"
      viewBox="0 0 24 24"
      class="h-5 w-5 absolute transition-all duration-300 opacity-100 scale-100"
      fill="currentColor"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>

    <!-- Ikona motywu systemowego -->
    <svg
      v-else
      key="system"
      viewBox="0 0 24 24"
      class="h-5 w-5 absolute transition-all duration-300 opacity-100 scale-100"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="18" x2="12" y2="20" />
    </svg>
  </button>
</template>
