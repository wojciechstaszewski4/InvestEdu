<script setup>
import Hero from "@/components/sections/home/Hero.vue";
import Features from "@/components/sections/home/Features.vue";
import HowItWorks from "@/components/sections/home/HowItWorks.vue";
import LeaderboardPreview from "@/components/sections/home/LeaderboardPreview.vue";
import RankingStreak from "@/components/sections/home/RankingStreak.vue";
import FAQ from "@/components/sections/home/FAQ.vue";
import CallToAction from "@/components/sections/home/CallToAction.vue";
</script>

<template>
  <main class="flex-1">
    <Hero />
    <Features />
    <HowItWorks />
    <LeaderboardPreview />
    <RankingStreak />
    <FAQ />
    <CallToAction />
  </main>
</template>
