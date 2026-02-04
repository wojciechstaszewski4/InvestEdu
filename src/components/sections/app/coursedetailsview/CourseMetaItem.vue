<script setup>
// Props przekazywane z widoku nadrzędnego
defineProps({
  label: {
    type: String,
    required: true,
  },

  value: {
    type: [String, Number],
    default: "-",
  },
});
</script>

<template>
  <!-- Kafelek meta -->
  <div
    class="rounded-2xl border border-border/50 bg-section/50 px-5 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.015] active:scale-[0.97] animate-fade-in"
  >
    <!-- Etykieta -->
    <div class="text-[11px] md:text-xs text-text/55 font-medium tracking-wide">
      {{ label }}
    </div>

    <!-- Wartość -->
    <div class="mt-1.5 text-lg md:text-xl font-semibold text-text">
      {{ value }}
    </div>
  </div>
</template>
