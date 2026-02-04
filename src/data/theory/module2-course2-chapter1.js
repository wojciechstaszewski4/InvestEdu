// src/data/theory/module2-course2-chapter1.js

export default {
  id: "m2c2ch1",
  title: "Średnie kroczące (MA)",
  content: [
    {
      heading: "Czym są średnie kroczące?",
      text: `
Średnie kroczące (MA - Moving Averages) to jedne z najpopularniejszych narzędzi analizy technicznej.  
Ich zadaniem jest **wygładzenie wykresu ceny**, aby łatwiej dostrzec kierunek trendu, eliminując przypadkowe wahania (szum).

Średnia obliczana jest na podstawie określonej liczby ostatnich cen - np. MA50 to średnia z 50 świec.
      `,
    },

    {
      heading: "Rodzaje średnich kroczących",
      text: `
Istnieje kilka typów średnich, różniących się sposobem liczenia:

- **SMA (Simple Moving Average)** - prosta średnia krocząca, każda świeca ma tę samą wagę.  
- **EMA (Exponential Moving Average)** - średnia wykładnicza, nadająca większe znaczenie ostatnim cenom - przez co **reaguje szybciej**.  
- **WMA/WSMA** - średnie ważone, ale rzadziej używane w praktyce.

Traderzy najczęściej korzystają z SMA i EMA, bo dają najlepszy balans między płynnością a responsywnością.
      `,
    },

    {
      heading: "Średnie jako narzędzie do identyfikacji trendu",
      text: `
Średnie kroczące pomagają rozpoznać trend:

- **Cena powyżej MA200** → długoterminowa przewaga kupujących, trend wzrostowy.  
- **Cena poniżej MA200** → trend spadkowy.  
- **MA50** często służy jako średnioterminowy filtr trendu.

Jeśli średnie są uporządkowane (MA50 > MA100 > MA200), zwykle oznacza to silny trend wzrostowy.
      `,
    },

    {
      heading: "Sygnały ze średnich - Golden Cross i Death Cross",
      text: `
Dwa najbardziej znane sygnały trendowe:

- **Golden Cross** - MA50 przecina MA200 **od dołu**, sygnał wzrostowy.  
- **Death Cross** - MA50 przecina MA200 **od góry**, sygnał spadkowy.

Nie są to sygnały krótkoterminowe - pokazują zmianę trendu w długim horyzoncie.
      `,
    },

    {
      heading: "Do czego średnie NIE służą?",
      text: `
Średnie kroczące nie przewidują:

- dokładnych momentów zwrotu,  
- lokalnych minimów i maksimów,  
- gwałtownych, krótkoterminowych ruchów.

Ich rolą jest *pokazać kierunek* i *ułatwić ocenę struktury rynku*, a nie wskazywać precyzyjne wejścia.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Średnie kroczące są prostym, ale potężnym narzędziem analizy technicznej.  
Pomagają:

- wygładzić wykres i zrozumieć trend,
- określić kluczowe poziomy dynamiczne,
- wychwycić sygnały zmian trendu (Golden/Death Cross),
- filtrować fałszywe sygnały.

Ich największą zaletą jest prostota - a największym ograniczeniem **opóźnienie**, ponieważ bazują na danych historycznych.
      `,
    },
  ],
};
