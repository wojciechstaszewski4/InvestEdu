<script setup>
// Import aktualnej trasy (do animacji RouterView)
import { useRoute } from "vue-router";

// Import globalnych elementów layoutu
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

// Import globalnego systemu powiadomień
import Toast from "@/components/ui/Toast.vue";

// Aktualna trasa
const route = useRoute();
</script>

<template>
  <div class="min-h-dvh bg-bg text-text flex flex-col page-load">
    <!-- Globalna nawigacja -->
    <Navbar brand="InvestEdu" />

    <!-- Globalny system powiadomień -->
    <Toast />

    <!-- Główna treść -->
    <Transition name="view" mode="out-in">
      <div :key="route.fullPath" class="flex flex-col flex-1">
        <main class="flex-1">
          <RouterView />
        </main>

        <!-- Globalna stopka -->
        <Footer brand="InvestEdu" />
      </div>
    </Transition>
  </div>
</template>
