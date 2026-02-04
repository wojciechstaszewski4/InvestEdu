<template>
  <section class="py-20 animate-fade-in">
    <div class="max-w-3xl mx-auto px-6">
      <div
        class="bg-card border border-border rounded-3xl shadow-md p-8 md:p-10 animate-pop"
      >
        <h1
          class="text-3xl font-extrabold text-primary text-center mb-6 animate-fade-in"
        >
          Polityka Cookies
        </h1>

        <p class="text-text/80 animate-fade-slide">
          Strona <strong>InvestEdu</strong> korzysta z plików cookies.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay"
        >
          1. Czym są cookies?
        </h2>
        <p class="text-text/80 animate-fade-slide-delay">
          Są to małe pliki zapisywane na urządzeniu użytkownika.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-2"
        >
          2. Do czego ich używamy?
        </h2>
        <ul
          class="list-disc pl-5 text-text/80 space-y-1 animate-fade-slide-delay-2"
        >
          <li>zapamiętywanie preferencji,</li>
          <li>analiza ruchu,</li>
          <li>poprawne działanie aplikacji.</li>
        </ul>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-3"
        >
          3. Jak je wyłączyć?
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-3">
          W ustawieniach przeglądarki.
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-xl bg-primary text-white font-semibold px-6 py-3 shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 animate-fade-slide-delay-3"
          >
            Strona główna
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
