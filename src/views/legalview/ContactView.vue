<template>
  <section class="py-20 animate-fade-in">
    <div class="max-w-3xl mx-auto px-6 animate-pop">
      <div
        class="bg-card border border-border rounded-3xl shadow-md p-8 md:p-10"
      >
        <h1
          class="text-3xl font-extrabold text-primary text-center mb-6 animate-fade-in"
        >
          Kontakt
        </h1>

        <p class="text-text/80 animate-fade-slide">
          Masz pytania dotyczące aplikacji, prywatności lub danych?
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay"
        >
          Email kontaktowy
        </h2>
        <p class="text-text/80 animate-fade-slide-delay">
          <a
            href="mailto:kontakt@investedu.com.pl"
            class="text-primary underline hover:text-secondary"
          >
            kontakt@investedu.com.pl
          </a>
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-2"
        >
          GitHub
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-2">
          <a
            href="https://github.com/Srb404/InvestEdu"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary underline hover:text-secondary"
          >
            github.com/Srb404/InvestEdu
          </a>
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-xl bg-primary text-white font-semibold px-6 py-3 shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 animate-fade-slide-delay-2"
          >
            Strona główna
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
