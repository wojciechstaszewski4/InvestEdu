<template>
  <!-- Główny kontener widoków aplikacji -->
  <div class="mx-auto w-full max-w-6xl px-4 py-6">
    <RouterView v-slot="{ Component }">
      <!-- Animowane przejście między widokami aplikacji -->
      <Transition
        mode="out-in"
        enter-active-class="view-enter-active"
        enter-from-class="view-enter-from"
        enter-to-class="view-enter-to"
        leave-active-class="view-leave-active"
        leave-from-class="view-leave-from"
        leave-to-class="view-leave-to"
      >
        <!-- Wyświetlany aktualnie widok aplikacji -->
        <component :is="Component" class="animate-fade-in" />
      </Transition>
    </RouterView>
  </div>
</template>
