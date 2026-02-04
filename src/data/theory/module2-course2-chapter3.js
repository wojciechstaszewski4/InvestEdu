// src/data/theory/module2-course2-chapter3.js

export default {
  id: "m2c2ch3",
  title: "MACD - Moving Average Convergence Divergence",
  content: [
    {
      heading: "Czym jest MACD?",
      text: `
MACD (Moving Average Convergence Divergence) to wskaźnik analizy technicznej, który mierzy **różnicę między dwiema średnimi kroczącymi** – szybką i wolną.  
Jego zadaniem jest ocena **momentum trendu**, wykrywanie zmian dynamiki oraz sygnalizowanie potencjalnych odwróceń.

MACD jest wskaźnikiem spóźnionym (lagging), ponieważ bazuje na średnich.
      `,
    },

    {
      heading: "Z czego składa się MACD?",
      text: `
Wskaźnik składa się z trzech elementów:

- **Linia MACD** - różnica między EMA12 i EMA26,
- **Linia sygnału (Signal)** - zwykle EMA9 z linii MACD,
- **Histogram** - graficzna różnica między MACD a Signal.

Histogram jest najszybszym elementem, dlatego to on często jako pierwszy pokazuje zmianę momentum.
      `,
    },

    {
      heading: "Sygnały kupna i sprzedaży",
      text: `
Najpopularniejszy sygnał MACD:

- **Kupno:** linia MACD przecina linię sygnału **od dołu**,  
- **Sprzedaż:** linia MACD przecina linię sygnału **od góry**.

To sygnały trendowe, dlatego najlepiej działają, gdy rynek już ma wyraźny kierunek.
      `,
    },

    {
      heading: "Histogram MACD",
      text: `
Histogram rośnie, gdy:

- momentum wzrostowe rośnie,
- linia MACD oddala się od linii sygnału.

Histogram maleje, gdy momentum słabnie, a linie zaczynają się zbliżać.  
Często to właśnie histogram jako pierwszy sygnalizuje, że trend traci siłę.
      `,
    },

    {
      heading: "Na jakich interwałach MACD działa najlepiej?",
      text: `
MACD jest wskaźnikiem wolnym, dlatego najlepiej działa na:

- **D1 (daily)**,
- **H4**,
- **H1** przy wyraźnych trendach.

Na niskich interwałach (np. M1, M5) generuje zbyt wiele losowych przecięć.
      `,
    },

    {
      heading: "Fałszywe sygnały MACD",
      text: `
MACD daje najwięcej fałszywych sygnałów w:

- **konsolidacjach**,  
- ruchach bocznych,  
- okresach niskiej zmienności.

W takich warunkach linie często przecinają się wielokrotnie, bez realnej zmiany ceny.  
Dlatego MACD zawsze powinien być używany **razem z analizą trendu i kontekstu rynku**.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
MACD to wskaźnik, który pomaga:

- ocenić momentum rynku,
- identyfikować sygnały kupna i sprzedaży,
- wykrywać osłabienie trendu (histogram),
- potwierdzać kierunek ruchu.

Najlepiej działa **w trendach**, a nie w konsolidacjach.  
W połączeniu ze średnimi kroczącymi i strukturą rynku tworzy bardzo wiarygodny system analizy.
      `,
    },
  ],
};
