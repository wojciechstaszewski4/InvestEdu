// src/data/theory/module3-course2-chapter2.js

export default {
  id: "m3c2ch2",
  title: "Mnożniki P/E, P/BV, EV/EBITDA",
  content: [
    {
      heading: "Czym są mnożniki wyceny?",
      text: `
Mnożniki (ang. *valuation multiples*) to szybkie narzędzia analityczne,
które pozwalają porównać spółkę z innymi firmami na rynku.
Są podstawą wyceny porównawczej.

Dlaczego są tak popularne?
- są proste do obliczenia,
- oparte o dane rynkowe,
- łatwe do porównania między spółkami i sektorami,
- szybko wskazują potencjalne przewartościowanie lub niedowartościowanie.

Najczęściej stosowane mnożniki to: **P/E**, **P/BV**, **EV/EBITDA**.
      `,
    },

    {
      heading: "P/E – Price to Earnings",
      text: `
Wskaźnik **P/E** pokazuje, ile inwestor płaci za **1 zł zysku netto firmy**.

Wzór:
\`P/E = Cena akcji / Zysk na akcję (EPS)\`

Interpretacja:
- **wysoki P/E** → inwestorzy oczekują dynamicznego wzrostu wyników,
- **niski P/E** → spółka może być niedowartościowana lub przeżywać problemy.

P/E zależy od:
- branży (technologia = wyższe P/E, banki = niższe),
- cyklu koniunkturalnego,
- jakości zysków (jednorazowe zyski mogą zaburzyć P/E).

Uwaga: spółki bez zysku → P/E NIE MA sensu.
      `,
    },

    {
      heading: "P/BV – Price to Book Value",
      text: `
Wskaźnik **P/BV** porównuje cenę rynkową spółki do jej **wartości księgowej** (book value).

\`P/BV = Cena akcji / Wartość księgowa na akcję\`

Interpretacja:
- **P/BV < 1** → inwestor płaci mniej niż wartość księgowa aktywów  
  (może oznaczać okazję lub fundamentalny problem firmy),
- **P/BV > 1** → rynek wycenia firmę powyżej wartości ksiąg,
  co często oznacza wysoką rentowność lub przewagi konkurencyjne.

Najlepiej działa dla:
- banków,
- spółek kapitałochłonnych,
- firm z przewidywalnymi aktywami.

Gorzej działa dla:
- firm technologicznych,
- spółek bez dużych aktywów materialnych.
      `,
    },

    {
      heading: "EV/EBITDA – Enterprise Value / EBITDA",
      text: `
Wskaźnik **EV/EBITDA** analizuje relację między wartością przedsiębiorstwa (EV) a jego EBITDA.

**EV (Enterprise Value)** = kapitalizacja rynkowa + dług netto  
→ To faktyczna wartość całej firmy, niezależnie od struktury finansowania.

**EBITDA** = zysk operacyjny + amortyzacja  
→ To przybliżona gotówka generowana przez działalność operacyjną.

Interpretacja EV/EBITDA:
- **niski EV/EBITDA** → spółka może być niedowartościowana,
- **wysoki EV/EBITDA** → inwestorzy oczekują mocnych wzrostów,
- typowe przedziały rynkowe: 6–12 (różni się między sektorami).

Zalety:
- uwzględnia zadłużenie (przewaga nad P/E),
- dobry do porównań między spółkami o różnej strukturze finansowania.

Wady:
- nie uwzględnia nakładów inwestycyjnych (CAPEX),
- przedsiębiorstwa z wysoką amortyzacją mogą wyglądać lepiej, niż są w rzeczywistości.
      `,
    },

    {
      heading: "Jak interpretować mnożniki w praktyce?",
      text: `
Mnożniki mają sens tylko w porównaniu:
- z innymi firmami w branży,
- z historycznymi poziomami spółki,
- z oczekiwaniami rynku.

**Niski mnożnik ≠ automatycznie dobra okazja!**  
Może oznaczać:
- utratę konkurencyjności,
- niską rentowność,
- ryzyko regulacyjne,
- problemy finansowe.

Z kolei **wysoki mnożnik** nie musi oznaczać bańki - często oznacza spółkę jakościową.

Najlepszą praktyką jest analiza 2–3 mnożników jednocześnie, np.:
- P/E (zyski),
- P/BV (aktywna baza),
- EV/EBITDA (zdolność generowania gotówki).
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Mnożniki to szybki sposób oceny wyceny spółki:

- **P/E** → ile płacisz za 1 zł zysku,  
- **P/BV** → porównanie ceny do wartości księgowej,  
- **EV/EBITDA** → relacja wartości firmy do jej operacyjnej gotówki.

Dają one pierwsze wskazówki, czy akcja jest atrakcyjna, ale pełna analiza
powinna łączyć je z wynikami, przepływami, długiem i perspektywami biznesu.
      `,
    },
  ],
};
