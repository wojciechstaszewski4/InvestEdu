<script setup>
// Props wejściowe
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "",
  },

  subtitle: {
    type: String,
    default: "",
  },

  center: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div :class="['mb-8', center ? 'text-center' : 'text-left']">
    <p
      v-if="eyebrow"
      class="text-xs font-semibold uppercase tracking-wider text-secondary/90"
    >
      {{ eyebrow }}
    </p>

    <h2
      class="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-primary leading-snug"
    >
      {{ title }}
    </h2>

    <p v-if="subtitle" class="mt-2 text-text/80">
      {{ subtitle }}
    </p>
  </div>
</template>
