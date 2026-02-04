<template>
  <section class="py-24 animate-fade-in">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <div
        class="bg-card border border-border rounded-3xl shadow-md p-10 animate-pop"
      >
        <div
          class="text-7xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 animate-fade-in"
        >
          404
        </div>

        <h1 class="text-2xl md:text-3xl font-bold animate-fade-slide">
          Strona nie została znaleziona
        </h1>

        <p class="mt-3 text-text/70 animate-fade-slide-delay">
          Ta strona nie istnieje lub została przeniesiona.
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-xl bg-primary text-white font-semibold px-6 py-3 shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 animate-fade-slide-delay"
          >
            Strona główna
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
