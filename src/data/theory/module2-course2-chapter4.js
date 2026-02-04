// src/data/theory/module2-course2-chapter4.js

export default {
  id: "m2c2ch4",
  title: "Wstęgi Bollingera",
  content: [
    {
      heading: "Czym są Wstęgi Bollingera?",
      text: `
Wstęgi Bollingera to popularny wskaźnik analizy technicznej, który mierzy **zmienność rynku**.  
Składa się z trzech elementów:

- **Środkowa wstęga** – średnia krocząca, standardowo **SMA20**,  
- **Górna wstęga** – SMA20 + 2 odchylenia standardowe,  
- **Dolna wstęga** – SMA20 – 2 odchylenia standardowe.

Im większa zmienność, tym szerzej rozstawione są wstęgi. Gdy zmienność spada - wstęgi zacieśniają się.
      `,
    },

    {
      heading: "Jak działają wstęgi?",
      text: `
Wstęgi Bollingera pokazują, jak daleko cena oddala się od średniej wartości.  
Statystycznie większość ruchu ceny mieści się w zakresie **±2 odchylenia standardowego**, dzięki czemu można ocenić:

- stan wykupienia (górna wstęga),
- stan wyprzedania (dolna wstęga),
- zmiany dynamiki rynku.

Wstęgi są adaptacyjne - rozszerzają się i zwężają wraz ze zmiennością.
      `,
    },

    {
      heading: "Górna i dolna wstęga",
      text: `
**Dotknięcie górnej wstęgi** może oznaczać:

- wykupienie,
- zbyt szybki wzrost ceny,
- możliwe zbliżające się osłabienie momentum.

**Dotknięcie dolnej wstęgi** sugeruje:

- wyprzedanie,
- silny impet spadkowy,
- możliwość odbicia, jeśli pojawi się wolumen lub świeca odrzucająca.

Uwaga: samo dotknięcie wstęgi **nie jest sygnałem kupna ani sprzedaży** - jest jedynie wskazówką kontekstową.
      `,
    },

    {
      heading: "Zacieśnienie wstęg - Bollinger Squeeze",
      text: `
Kiedy wstęgi zaczynają się mocno zwężać, zmienność spada.  
Zjawisko to nazywa się **Bollinger Squeeze** i często zapowiada:

- duże nadchodzące wybicie,
- początek nowego trendu,
- wyjście z konsolidacji.

Nie mówi jednak w którą stronę nastąpi ruch - do tego potrzebna jest analiza struktury lub wolumenu.
      `,
    },

    {
      heading: "Interpretacja w trendach",
      text: `
W trendach Wstęgi Bollingera działają inaczej niż w konsolidacji:

- **Trend wzrostowy**: cena często „klei się” do górnej wstęgi, co potwierdza siłę trendu.  
- **Trend spadkowy**: cena często dotyka dolnej wstęgi.  
- **Trend boczny**: odbicia między wstęgami są częstsze i bardziej wiarygodne.

Dlatego kluczowy jest **kontekst rynku**, a nie sama wstęga.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Wstęgi Bollingera pomagają inwestorowi:

- ocenić zmienność rynku,
- wykryć potencjalne wykupienie i wyprzedanie,
- przygotować się na wybicia dzięki Bollinger Squeeze,
- lepiej rozumieć położenie ceny względem średniej.

Wskaźnik ten działa najlepiej w połączeniu z analizą trendu, wolumenu oraz strukturą ruchu ceny.  
Nigdy nie powinien być używany jako samodzielny sygnał wejścia.
      `,
    },
  ],
};
