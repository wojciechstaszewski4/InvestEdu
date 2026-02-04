<template>
  <section class="py-20 animate-fade-in">
    <div class="max-w-3xl mx-auto px-6">
      <div
        class="bg-card border border-border rounded-3xl shadow-md p-8 md:p-10 animate-pop"
      >
        <h1
          class="text-3xl font-extrabold text-primary text-center mb-6 animate-fade-in"
        >
          Polityka prywatności
        </h1>

        <p class="text-text/80 animate-fade-slide">
          Niniejsza polityka prywatności opisuje zasady przetwarzania danych
          osobowych użytkowników aplikacji <strong>InvestEdu</strong>.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay"
        >
          1. Administrator danych
        </h2>
        <p class="text-text/80 animate-fade-slide-delay">
          Administratorem danych jest projekt edukacyjny InvestEdu. Kontakt:
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
          2. Zakres zbieranych danych
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-2">
          Przetwarzamy dane podawane podczas rejestracji lub logowania - m.in.
          adres e-mail oraz identyfikator konta Google/Facebook.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-3"
        >
          3. Cel przetwarzania danych
        </h2>
        <ul
          class="list-disc pl-5 text-text/80 space-y-1 animate-fade-slide-delay-3"
        >
          <li>utrzymanie konta użytkownika,</li>
          <li>zapisywanie postępów nauki i rankingów,</li>
        </ul>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-4"
        >
          4. Udostępnianie danych
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-4">
          Dane przechowywane są w usłudze
          <strong>Firebase (Google LLC)</strong>.
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-5"
        >
          5. Usuwanie danych
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-5">
          Swoje dane możesz usunąć tutaj:
          <RouterLink
            to="/data-deletion"
            class="text-primary underline hover:text-secondary"
          >
            Usuwanie danych użytkownika
          </RouterLink>
        </p>

        <h2
          class="text-xl font-semibold text-secondary mt-8 mb-2 animate-fade-slide-delay-6"
        >
          6. Kontakt
        </h2>
        <p class="text-text/80 animate-fade-slide-delay-6">
          Napisz do nas:
          <a
            href="mailto:kontakt@investedu.com.pl"
            class="text-primary underline hover:text-secondary"
          >
            kontakt@investedu.com.pl
          </a>
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-xl bg-primary text-white font-semibold px-6 py-3 shadow-sm transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 animate-fade-slide-delay-6"
          >
            Strona główna
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
