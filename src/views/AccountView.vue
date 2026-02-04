<script setup>
// Importy
import { ref } from "vue";

import AccountHeader from "@/components/sections/account/AccountHeader.vue";
import AccountOverview from "@/components/sections/account/AccountOverview.vue";
import AccountPreferences from "@/components/sections/account/AccountPreferences.vue";
import AccountSecurity from "@/components/sections/account/AccountSecurity.vue";

// Aktualnie wybrana zakładka
const zakladka = ref("przeglad");

// Lista zakładek wyświetlanych w UI
const tabs = [
  { key: "przeglad", label: "Przegląd" },
  { key: "preferencje", label: "Preferencje" },
  { key: "bezpieczenstwo", label: "Bezpieczeństwo" },
];

// Funkcja zmieniająca zakładkę
function changeTab(key) {
  zakladka.value = key;

  // Przewinięcie strony do góry
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Style aktywnej zakładki
const activeTabClass =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-primary bg-primary text-white shadow cursor-default transition-all duration-300";

// Style zakładki nieaktywnej
const inactiveTabClass =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-border bg-card text-text/70 cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent";
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 page-load">
    <!-- Nagłówek sekcji konta -->
    <AccountHeader class="animate-fade-in" />

    <!-- Pasek zakładek -->
    <div class="mt-6 flex flex-wrap gap-3 text-sm animate-fade-slide-delay">
      <button
        v-for="t in tabs"
        :key="t.key"
        @click="changeTab(t.key)"
        :class="[
          zakladka === t.key ? activeTabClass : inactiveTabClass,
          'px-4 py-2 sm:px-5 sm:py-2.5',
        ]"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- Dynamiczna zawartość zakładki -->
    <div class="mt-8 animate-fade-slide-delay-2">
      <!-- Przegląd -->
      <AccountOverview v-if="zakladka === 'przeglad'" />

      <!-- Preferencje -->
      <AccountPreferences v-else-if="zakladka === 'preferencje'" />

      <!-- Bezpieczeństwo -->
      <AccountSecurity v-else-if="zakladka === 'bezpieczenstwo'" />
    </div>
  </section>
</template>
