<template>
  <section class="py-20 animate-fade-in">
    <div class="max-w-3xl mx-auto px-6">
      <div
        class="bg-card border border-border rounded-3xl shadow-md p-8 md:p-10 animate-pop"
      >
        <h1
          class="text-3xl font-extrabold text-primary text-center mb-6 animate-fade-in"
        >
          Regulamin korzystania z aplikacji InvestEdu
        </h1>

        <p class="text-text/80 animate-fade-slide">
          Korzystając z aplikacji <strong>InvestEdu</strong>, akceptujesz zasady
          opisane w niniejszym regulaminie.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay"
        >
          1. Postanowienia ogólne
        </h2>
        <p class="text-text/80 animate-fade-slide-delay">
          Aplikacja ma charakter edukacyjny i nie stanowi porady inwestycyjnej.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-2"
        >
          2. Rejestracja użytkownika
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-2">
          Konto można utworzyć przez e-mail, Google lub Facebook.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-3"
        >
          3. Zasady korzystania
        </h2>
        <ul
          class="list-disc pl-5 text-text/80 space-y-1 animate-fade-slide-delay-3"
        >
          <li>zakaz działań sprzecznych z prawem,</li>
          <li>zakaz wprowadzania szkodliwych treści,</li>
          <li>zakaz manipulacji rankingiem.</li>
        </ul>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-4"
        >
          4. Własność treści
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-4">
          Wszystkie materiały edukacyjne są własnością projektu InvestEdu.
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-xl bg-primary text-white font-semibold px-6 py-3 shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 animate-fade-slide-delay-4"
          >
            Strona główna
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
