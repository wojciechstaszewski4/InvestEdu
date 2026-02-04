// src/data/theory/module3-course2-chapter5.js

export default {
  id: "m3c2ch5",
  title: "Wartość księgowa i struktura aktywów",
  content: [
    {
      heading: "Czym jest wartość księgowa?",
      text: `
Wartość księgowa (book value, BV) to różnica między **aktywami ogółem a zobowiązaniami** firmy:

**BV = aktywa – zobowiązania = kapitał własny**

W praktyce oznacza to, ile teoretycznie zostałoby dla właścicieli, gdyby firma spłaciła wszystkie zobowiązania i sprzedała majątek w wartości księgowej.

Wycena księgowa jest podstawą wielu analiz, w tym wskaźnika **P/BV**, wykorzystywanego do oceny, czy firma jest przewartościowana lub niedowartościowana.
      `,
    },

    {
      heading: "Czym różnią się aktywa trwałe i obrotowe?",
      text: `
Struktura aktywów firmy dzieli je na dwie główne kategorie:

1. **Aktywa trwałe** – majątek wykorzystywany długoterminowo  
   Obejmują:
   - nieruchomości,
   - maszyny i urządzenia,
   - środki transportu,
   - wartości niematerialne (np. licencje, patenty),
   - inwestycje długoterminowe.

2. **Aktywa obrotowe** – majątek krótkoterminowy  
   Są używane lub przekształcane w gotówkę w ciągu roku. Przykłady:
   - zapasy,
   - należności,
   - środki pieniężne,
   - krótkoterminowe inwestycje finansowe.

Różnica między nimi jest fundamentalna, ponieważ wpływa na płynność, stabilność i charakter biznesu.
      `,
    },

    {
      heading: "Co oznacza wysoki udział aktywów trwałych?",
      text: `
Firmy z dużym udziałem aktywów trwałych są **kapitałochłonne**.  
Przykłady branż:
- produkcja,
- energetyka,
- górnictwo,
- transport.

Konsekwencje wysokiego udziału aktywów trwałych:
- wyższe koszty inwestycji (CAPEX),
- większa amortyzacja,
- wolniejsze skalowanie biznesu,
- większa zależność od cyklu gospodarczego.

Natomiast firmy technologiczne czy usługowe mają zwykle znacznie mniejszy udział aktywów trwałych.
      `,
    },

    {
      heading: "P/BV – jak interpretować?",
      text: `
Wskaźnik **P/BV = cena rynkowa / wartość księgowa na akcję**.

Typowe interpretacje:

- **P/BV < 1** → spółka wyceniana poniżej wartości księgowej  
  Może oznaczać:
  - niedowartościowanie,
  - bardzo słabe perspektywy,
  - problemy finansowe lub ryzykowny biznes.

- **P/BV ok. 1** → rynek wycenia firmę podobnie do wartości jej majątku

- **P/BV > 1** → rynek płaci premię za jakość, wzrost, markę, przewagi konkurencyjne

W wielu sektorach (np. bankowość, ubezpieczenia) P/BV jest jednym z najważniejszych wskaźników wyceny.
      `,
    },

    {
      heading: "Co zwiększa wartość księgową firmy?",
      text: `
Kapitał własny rośnie, gdy firma zatrzymuje zysk.  
Najważniejsze czynniki zwiększające wartość księgową:

- **zatrzymany zysk netto** – najważniejszy element wzrostu BV,
- emisja nowych akcji (choć rozwadnia akcjonariuszy),
- wzrost wartości aktywów trwałych i obrotowych,
- redukcja zobowiązań.

Elementy zmniejszające BV:
- strata netto,
- wypłata dywidendy,
- spadek wartości aktywów (np. odpisy),
- wzrost zobowiązań.

W praktyce rosnąca wartość księgowa oznacza, że firma powiększa majątek właścicieli.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Wartość księgowa i struktura aktywów są podstawą analizy fundamentalnej, szczególnie w sektorach kapitałochłonnych.

Najważniejsze wnioski:
- BV = aktywa – zobowiązania = kapitał własny,
- aktywa trwałe odzwierciedlają długoterminowy majątek, obrotowe – płynność,
- wysoki udział aktywów trwałych = kapitałochłonny, mniej elastyczny biznes,
- P/BV < 1 może być okazją inwestycyjną, ale wymaga ostrożnej analizy,
- zatrzymane zyski bezpośrednio zwiększają wartość księgową.

Zrozumienie tych elementów pozwala ocenić stabilność finansową i realną wartość przedsiębiorstwa.
      `,
    },
  ],
};
