// src/data/theory/module5-course3-chapter4.js

export default {
  id: "m5c3ch4",
  title: "Optymalizacja ryzyka i zwrotu",
  content: [
    {
      heading: "Na czym polega optymalizacja portfela?",
      text: `
Optymalizacja portfela ma na celu **znalezienie najlepszego możliwego balansu między ryzykiem a oczekiwanym zwrotem**.  
Nie chodzi o maksymalizowanie zysków za wszelką cenę, lecz o:

- kontrolę ryzyka,
- poprawę stabilności wyników,
- dobór aktywów działających dobrze razem,
- unikanie koncentracji w jednym obszarze rynku.

Istota optymalizacji: *nie najwyższy zwrot, lecz najwyższy zwrot przy akceptowalnym ryzyku*.
      `,
    },

    {
      heading: "Model Markowitza - klasyczna podstawa optymalizacji",
      text: `
Harry Markowitz stworzył fundament współczesnego zarządzania portfelem poprzez model **Mean-Variance**.  
Zakłada on, że efektywny portfel powinien:

- minimalizować ryzyko (wariancję),
- maksymalizować oczekiwany zwrot,
- wykorzystywać niską korelację między aktywami.

Wynikiem jest **efektywna granica** - zbiór portfeli, które są optymalne statystycznie.
Każdy portfel poniżej tej granicy ma zbyt duże ryzyko w stosunku do wyników.
      `,
    },

    {
      heading: "Czym jest efektywna granica portfela?",
      text: `
Efektywna granica to graficzna linia pokazująca portfele o **najlepszym stosunku ryzyka do zwrotu**.

Dla każdego poziomu ryzyka istnieje portfel, który:

- oferuje najwyższy możliwy zwrot,
- ma optymalną strukturę aktywów,
- jest matematycznie „najlepszy” według założeń modelu.

To punkt odniesienia dla inwestora, który chce zbudować portfel stabilny i efektywny.
      `,
    },

    {
      heading: "Ryzyko przeoptymalizowania (overfitting)",
      text: `
Optymalizacja może być pułapką, jeśli zbyt mocno dopasujemy parametry do danych historycznych.

Skutki przeoptymalizowania:
- portfel działa świetnie *na danych z przeszłości*,
- ale zawodzi w prawdziwych warunkach rynkowych,
- jest wrażliwy na zmiany cyklu,
- może mieć zbyt skomplikowaną strukturę.

To ten sam problem, który znamy ze sztucznej inteligencji - perfekcyjne dopasowanie do historii nie daje przewagi w przyszłości.
      `,
    },

    {
      heading: "Co jest kluczem do dobrej optymalizacji?",
      text: `
Najważniejszym elementem jest zrozumienie, jak aktywa wpływają na siebie nawzajem.  
Kluczowe czynniki:

1. **Zmienność (volatility)**  
   Wysoka zmienność = większe ryzyko obsunięć.

2. **Korelacja**  
   To, jak bardzo aktywa poruszają się razem.  
   Niska korelacja = stabilniejszy portfel.

3. **Struktura alokacji**  
   Zbyt duża koncentracja w jednym sektorze lub klasie aktywów zwiększa ryzyko.

4. **Realistyczne założenia**  
   Optymalizacja musi być oparta na sensownych danych, nie na „perfekcyjnych” scenariuszach.

Optymalizacja to sztuka zarządzania ryzykiem - nie próba przewidywania przyszłości.
      `,
    },
  ],
};
