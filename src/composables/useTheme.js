// src/composables/useTheme.js

// Importy z Vue
import { ref, onMounted, watch, getCurrentInstance } from "vue";

// Globalny stan (singleton)
const theme = ref(null);

// Hook zarządzający motywem aplikacji (jasny / ciemny / systemowy)
export function useTheme() {
  // Wykrycie preferencji systemowych
  const prefersDark = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

  // Jeśli pierwszy raz - ustalamy wartość
  if (theme.value === null) {
    const saved =
      (typeof localStorage !== "undefined" && localStorage.getItem("theme")) ||
      "system";

    theme.value = saved;
  }

  // Funkcja nakładająca motyw
  const apply = () => {
    const root = document.documentElement;

    const isDark =
      theme.value === "dark"
        ? true
        : theme.value === "light"
        ? false
        : prefersDark();

    root.classList.add("theme-transition");

    requestAnimationFrame(() => {
      root.classList.toggle("dark", isDark);
      root.style.colorScheme = isDark ? "dark" : "light";
    });

    setTimeout(() => root.classList.remove("theme-transition"), 300);
  };

  // Przełączanie motywu (między dark/light, nie system)
  const toggle = () => {
    // Jeśli był system -> wybieramy na podstawie aktualnego systemu
    if (theme.value === "system") {
      theme.value = prefersDark() ? "light" : "dark";
      return;
    }

    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  // Zastosowanie motywu po zamontowaniu
  if (getCurrentInstance()) {
    onMounted(() => {
      apply();

      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        if (theme.value === "system") apply();
      };

      media.addEventListener("change", handler);
    });
  }

  // Reakcja na ręczną zmianę motywu
  watch(theme, (v) => {
    try {
      localStorage.setItem("theme", v);
    } catch {}

    apply();
  });

  return { theme, toggle, apply, prefersDark };
}
