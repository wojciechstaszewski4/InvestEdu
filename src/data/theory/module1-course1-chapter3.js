// src/data/theory/module1-course1-chapter3.js

export default {
  id: "m1c1ch3",
  title: "Giełda i handel",
  content: [
    {
      heading: "Czym jest giełda?",
      text: `
Giełda to zorganizowany rynek, na którym inwestorzy mogą kupować i sprzedawać aktywa - takie jak akcje, obligacje czy ETF-y.  
Handel odbywa się według określonych zasad, a transakcje są rejestrowane i nadzorowane, co zwiększa bezpieczeństwo oraz przejrzystość obrotu.

Giełda **nie ustala cen** - robi to rynek, czyli mechanizm popytu i podaży.
      `,
    },

    {
      heading: "Rodzaje zleceń giełdowych",
      text: `
Podczas handlu inwestor może wybrać typ zlecenia, który najlepiej odpowiada jego strategii.

Najważniejsze typy:

- **Zlecenie market** - gwarantuje *wykonanie*, ale nie gwarantuje ceny. Realizuje się natychmiast po najlepszej dostępnej cenie.
- **Zlecenie limit** - realizuje się tylko po określonej lub lepszej cenie. Gwarantuje cenę, ale nie wykonanie.
- **Stop loss** - aktywuje zlecenie sprzedaży po przekroczeniu konkretnego poziomu (chroni przed stratą).
- **Stop limit** - po aktywacji tworzy zlecenie limit, z pełną kontrolą ceny.

W praktyce:
- **Market = szybko**  
- **Limit = precyzyjnie**
      `,
    },

    {
      heading: "Czym jest spread?",
      text: `
**Spread** to różnica między ceną kupna (bid) a ceną sprzedaży (ask).  
To naturalny koszt płynności na rynku.

- Mały spread = wysokie zainteresowanie aktywem, duża płynność  
- Duży spread = słaba płynność, trudniej o natychmiastową realizację zleceń  

Spread jest elementem, który każdy inwestor powinien brać pod uwagę przy otwieraniu pozycji.
      `,
    },

    {
      heading: "Animator rynku",
      text: `
Animator rynku (market maker) to podmiot, który **zapewnia płynność**, czyli ciągłą dostępność ofert kupna i sprzedaży.

Jego zadania:
- wystawianie ofert bid/ask,
- stabilizowanie notowań,
- zmniejszanie spreadu,
- umożliwienie sprawnego handlu nawet przy niskim zainteresowaniu inwestorów.

Dzięki animatorom rynek działa płynniej i bardziej przewidywalnie.
      `,
    },

    {
      heading: "Wolumen transakcyjny",
      text: `
**Wolumen** to liczba zawartych transakcji lub ilość obróconych jednostek danego aktywa w określonym czasie.

Co oznacza wysoki wolumen?

- duże zainteresowanie aktywem,
- większą płynność,
- stabilniejszą wycenę,
- łatwiejsze i szybsze wykonywanie zleceń.

Niski wolumen może oznaczać problemy z realizacją zleceń lub większe skoki ceny.
      `,
    },

    {
      heading: "Giełdowy handel ETF-ami",
      text: `
Większość ETF-ów jest notowana na giełdzie **tak samo jak akcje**.  
Oznacza to, że:

- można je kupować i sprzedawać w trakcie całej sesji,
- ich cena zmienia się na bieżąco,
- dostępne są różne typy ETF-ów (akcyjne, obligacyjne, sektorowe, indeksowe).

ETF-y łączą cechy funduszy inwestycyjnych i akcji - są tanie w obsłudze i płynne.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Giełda jest miejscem, gdzie dochodzi do wymiany kapitału w sposób uporządkowany i przejrzysty.  
Zrozumienie takich pojęć jak zlecenia market/limit, spread, wolumen czy rola animatora rynku pozwala inwestorowi:

- unikać błędów wykonania zleceń,
- analizować płynność rynku,
- rozumieć zachowanie cen,
- podejmować lepsze decyzje inwestycyjne.

To fundament praktycznego handlu na rynkach finansowych.
      `,
    },
  ],
};
