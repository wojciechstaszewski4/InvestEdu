// src/data/theory/module3-course2-chapter1.js

export default {
  id: "m3c2ch1",
  title: "Wycena przedsiębiorstwa – wprowadzenie",
  content: [
    {
      heading: "Dlaczego wycena przedsiębiorstwa jest ważna?",
      text: `
Wycena przedsiębiorstwa to proces określania, ile *realnie* warta jest firma.

Stosuje się ją m.in. przy:
- inwestowaniu w akcje,
- fuzjach i przejęciach,
- pozyskiwaniu finansowania,
- sprzedaży udziałów,
- ocenie opłacalności projektów.

Celem wyceny jest ustalenie **wartości godziwej (fair value)**, czyli takiej,
która oddaje ekonomiczną wartość przedsiębiorstwa w warunkach rynkowych.
      `,
    },

    {
      heading: "Główne podejścia do wyceny",
      text: `
W praktyce stosuje się trzy podstawowe podejścia:

### 1. Podejście porównawcze (multiples)
Polega na porównaniu firmy z podobnymi spółkami notowanymi na rynku
lub tymi, które były przedmiotem transakcji.

Używa się tu mnożników takich jak:
- **P/E** – cena do zysku,  
- **P/BV** – cena do wartości księgowej,  
- **EV/EBITDA** – wartość przedsiębiorstwa do EBITDA.

Zalety:
- proste i szybkie,
- oparte o dane rynkowe.

Wady:
- wymaga odpowiednich porównań,
- nie uwzględnia specyficznych czynników spółki.

### 2. Metoda DCF (Discounted Cash Flow)
Najbardziej teoretycznie poprawna metoda.

Polega na:
- prognozie przyszłych przepływów pieniężnych firmy,
- dyskontowaniu ich do wartości bieżącej,
- uwzględnieniu ryzyka poprzez stopę dyskontową (WACC).

DCF zakłada, że **firma jest warta tyle, ile wynoszą jej przyszłe generowane przepływy**.

Zalety:
- uwzględnia przyszłość, nie tylko dane historyczne,
- daje najbardziej kompletny obraz.

Wady:
- bardzo wrażliwa na założenia,
- trudna do przeprowadzenia poprawnie.

### 3. Wycena majątkowa (asset-based)
Opiera się na wartości posiadanych aktywów pomniejszonych o zobowiązania.
Stosowana głównie dla firm:
- w likwidacji,
- kapitałochłonnych,
- o niskiej przewidywalności przepływów.

Nie jest najlepszą metodą dla spółek giełdowych o dużym potencjale wzrostu.
      `,
    },

    {
      heading: "Co wpływa na wartość firmy?",
      text: `
Kluczowe czynniki wpływające na wycenę:

- **zyskowność** - im wyższe marże i wyniki, tym wyższa wycena,  
- **ryzyko branżowe i makroekonomiczne**,  
- **stabilność i przewidywalność przepływów pieniężnych**,  
- **poziom zadłużenia**,  
- **jakość zarządu**,  
- **konkurencyjność produktów**.

Czynniki kosmetyczne, takie jak kolor logotypu, nie mają znaczącego wpływu na wycenę.
      `,
    },

    {
      heading: "Wartość godziwa (fair value)",
      text: `
Wartość godziwa to szacunkowa wartość spółki w warunkach rynkowych -

- przy założeniu racjonalnych uczestników rynku,
- przy braku przymusu sprzedaży lub zakupu,
- z uwzględnieniem informacji dostępnych w danym momencie.

To właśnie *fair value* porównuje się z aktualną ceną rynkową, aby ocenić,
czy akcja jest **przewartościowana**, **niedowartościowana**, czy wyceniona poprawnie.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Wycena przedsiębiorstwa to fundament analizy fundamentalnej.

Najważniejsze punkty:
- głównym celem wyceny jest określenie realnej wartości firmy,
- metoda porównawcza opiera się na mnożnikach i benchmarkach,
- metoda DCF analizuje przyszłe przepływy pieniężne,
- wartość spółki zależy od jej zyskowności, ryzyka i marż,
- fair value to orientacyjna cena, która powinna odzwierciedlać warunki rynkowe.

Zrozumienie metod wyceny pozwala inwestorom podejmować świadome decyzje
i unikać przepłacania za akcje.
      `,
    },
  ],
};
