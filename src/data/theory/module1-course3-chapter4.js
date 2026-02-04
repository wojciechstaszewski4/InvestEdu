// src/data/theory/module1-course3-chapter4.js

export default {
  id: "m1c3ch4",
  title: "Korelacje między aktywami",
  content: [
    {
      heading: "Czym jest korelacja?",
      text: `
Korelacja to statystyczna miara określająca, **jak dwa aktywa poruszają się względem siebie**.  
Dla inwestora jest to jedno z najważniejszych narzędzi do oceny, czy połączenie danych aktywów w portfelu pomoże obniżyć ryzyko.

Wartość korelacji mieści się w przedziale **od -1 do +1**:
- **+1** → aktywa poruszają się identycznie,
- **0** → brak zależności,
- **-1** → aktywa poruszają się w przeciwnych kierunkach.

Zrozumienie korelacji jest kluczowe przy budowie portfela inwestycyjnego.
      `,
    },

    {
      heading: "Korelacja ujemna (-1)",
      text: `
Korelacja **-1** oznacza, że aktywa zachowują się dokładnie odwrotnie.  
Gdy jedno rośnie, drugie spada.

Przykład:
- w czasie kryzysu giełdy tracą,
- złoto - tradycyjny „bezpieczny port” - często rośnie.

Portfele zawierające aktywa o korelacji ujemnej mają najwyższy poziom stabilności.
      `,
    },

    {
      heading: "Korelacja zerowa (0)",
      text: `
Korelacja **0** oznacza brak zależności między aktywami.  
Zmiany jednego instrumentu nie wpływają na zmiany drugiego.

Przykłady aktywów zbliżonych do korelacji 0:
- akcje vs. nieruchomości,
- akcje vs. surowce,
- Bitcoin vs. większość tradycyjnych rynków.

Dodanie aktywa o korelacji bliskiej zeru najczęściej poprawia dywersyfikację portfela.
      `,
    },

    {
      heading: "Korelacja dodatnia (+1)",
      text: `
Korelacja **+1** oznacza, że aktywa poruszają się w identyczny sposób.  
Przykład:
- ETF na S&P 500
- akcje największych spółek USA

Takie połączenie **nie daje dywersyfikacji**, ponieważ oba aktywa reagują bardzo podobnie na warunki rynkowe.
      `,
    },

    {
      heading: "Przykłady aktywów o niskiej korelacji",
      text: `
Niektóre połączenia aktywów naturalnie charakteryzują się niską korelacją:

- **Akcje i złoto** - klasyczne zestawienie poprawiające stabilność portfela.
- **Akcje i obligacje** - zachowują się różnie w zależności od cyklu gospodarczego.
- **Globalne akcje i surowce** - różne czynniki wpływają na ich wycenę.

Dla inwestora oznacza to mniejszą zmienność portfela przy zachowaniu potencjału wzrostu.
      `,
    },

    {
      heading: "Dlaczego korelacje są tak ważne?",
      text: `
Korelacja jest kluczowa, ponieważ mówi nam, **jak bardzo dywersyfikacja jest skuteczna**.

Niska korelacja oznacza:
- mniejsze ryzyko dużych spadków,
- łagodniejsze wahania portfela,
- większą odporność na kryzysy,
- lepszy profil ryzyko–zwrot.

Właśnie dlatego profesjonaliści zawsze analizują korelacje między aktywami przed budową portfela.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Zrozumienie korelacji pomaga budować portfel bardziej stabilny i przewidywalny.  
Kluczowe zasady:

- szukaj aktywów o **niskiej lub ujemnej korelacji**,  
- unikaj zestawiania instrumentów działających identycznie,  
- pamiętaj, że korelacje zmieniają się w czasie - szczególnie w okresach kryzysowych.

Korelacja jest jednym z fundamentów nowoczesnej teorii portfela i praktycznej dywersyfikacji.
      `,
    },
  ],
};
