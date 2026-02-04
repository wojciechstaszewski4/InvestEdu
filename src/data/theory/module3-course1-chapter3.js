// src/data/theory/module3-course1-chapter3.js

export default {
  id: "m3c1ch3",
  title: "Rachunek zysków i strat",
  content: [
    {
      heading: "Czym jest rachunek zysków i strat?",
      text: `
Rachunek zysków i strat (RZiS), nazywany też **income statement**, pokazuje,
jak firma osiągnęła swój wynik finansowy w danym okresie - zwykle kwartale lub roku.

W przeciwieństwie do bilansu (który pokazuje stan na konkretny dzień),  
RZiS jest **dynamiczny** - opisuje przepływy przychodów i kosztów w czasie.

Dokument odpowiada na pytania:
- ile firma zarobiła na sprzedaży,  
- jakie koszty poniosła,  
- czy działalność podstawowa była rentowna,  
- jaki jest ostateczny zysk lub strata.
      `,
    },

    {
      heading: "Przychody ze sprzedaży",
      text: `
Pierwszą pozycją rachunku zysków i strat są **przychody ze sprzedaży**.  
To wszystkie wpływy uzyskane dzięki podstawowej działalności firmy:
- sprzedaży produktów,
- sprzedaży usług,
- sprzedaży towarów.

Przychody są punktem startowym całego RZiS - na ich tle analizuje się
efektywność kosztową, rentowność i dynamikę wyników.
      `,
    },

    {
      heading: "Zysk brutto (gross profit)",
      text: `
Zysk brutto obliczamy jako:

**Przychody – koszty własne sprzedaży (COGS)**

COGS obejmuje koszty bezpośrednio związane z produkcją lub sprzedażą,
np. surowce, materiały, wynagrodzenia produkcyjne, transport.

Zysk brutto pokazuje, **jak rentowna jest główna działalność operacyjna**
bez uwzględniania kosztów administracyjnych czy marketingowych.
      `,
    },

    {
      heading: "Koszty operacyjne",
      text: `
Koszty operacyjne (OPEX) to wszystkie wydatki związane z funkcjonowaniem firmy,
ale **niezwiązane bezpośrednio z produkcją**.

Do OPEX należą m.in.:
- wynagrodzenia administracji,
- marketing i sprzedaż,
- koszty ogólnego zarządu,
- amortyzacja.

Uwaga: **odsetki od kredytów nie są kosztem operacyjnym** - należą do kosztów finansowych.
      `,
    },

    {
      heading: "Zysk netto",
      text: `
Zysk netto to najważniejsza miara finansowa - **końcowy wynik firmy**.

Obliczamy go jako:

**Zysk operacyjny – koszty finansowe – podatki = zysk netto**

Pokazuje on, ile firma realnie zarobiła dla swoich właścicieli.
Zysk netto jest kluczowym elementem m.in. wyceny spółki, polityki dywidendowej
i oceny zdolności do generowania gotówki.
      `,
    },

    {
      heading: "Marża netto",
      text: `
Marża netto to relacja:

**Zysk netto / Przychody**

Oznacza, ile groszy zysku netto pozostaje firmie z każdej złotówki sprzedaży.

Przykład:  
marża 12% = firma zatrzymuje 12 groszy z każdej złotówki przychodu.

Im wyższa marża netto, tym bardziej efektywna kosztowo i rentowna jest firma.
      `,
    },
  ],
};
