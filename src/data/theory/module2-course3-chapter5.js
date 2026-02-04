// src/data/theory/module2-course3-chapter5.js

export default {
  id: "m2c3ch5",
  title: "Zarządzanie pozycją",
  content: [
    {
      heading: "Czym jest zarządzanie pozycją?",
      text: `
Zarządzanie pozycją to zbiór zasad, które mają **kontrolować ryzyko, chronić kapitał i maksymalizować zysk**.  
Świetne wejście nic nie da, jeśli pozycja jest zarządzana chaotycznie - to właśnie zarządzanie decyduje o długoterminowych wynikach inwestora.

Elementy zarządzania pozycją obejmują m.in. stop loss, take profit, wielkość pozycji, częściową realizację zysku i trailing stop.
      `,
    },

    {
      heading: "Stop loss - fundament bezpieczeństwa",
      text: `
Stop loss (SL) to poziom, na którym automatycznie **zamyka się pozycja, by ograniczyć stratę**.

Dlaczego jest kluczowy?

- chroni kapitał przed dużymi obsunięciami,
- eliminuje decyzje podejmowane pod wpływem emocji,
- określa maksymalną dopuszczalną stratę,
- pozwala budować strategie o stabilnym ryzyku.

SL nie ogranicza zysku - ogranicza jedynie potencjalną stratę, a więc stabilizuje cały system inwestycyjny.
      `,
    },

    {
      heading: "Trailing stop - ochrona zysku",
      text: `
Trailing stop (TS) to dynamiczny stop loss, który **podąża za ceną**, gdy ta porusza się w naszym kierunku.

Zastosowanie TS:

- zabezpiecza wypracowany zysk,
- pozwala „podciąć stratę” na wczesnym etapie,
- umożliwia długie prowadzenie pozycji w trendzie,
- eliminuje konieczność ręcznej regulacji SL.

TS jest szczególnie skuteczny w silnych trendach, w których ruch trwa długo.
      `,
    },

    {
      heading: "Częściowa realizacja zysku",
      text: `
Częściowe zamykanie pozycji to technika polegająca na sprzedaży fragmentu pozycji na logicznych poziomach.

Korzyści:

- zmniejsza presję psychologiczną („wyjąłem już coś z rynku”),
- obniża ryzyko całkowitej straty,
- pozwala łączyć bezpieczeństwo i dalszy potencjał zysków,
- ułatwia prowadzenie pozycji przez większe ruchy.

Dzięki temu inwestor zachowuje równowagę między chęcią zysku a ochroną kapitału.
      `,
    },

    {
      heading: "Take profit - logiczne wyjście z rynku",
      text: `
Take profit (TP) to poziom, na którym automatycznie realizowany jest zysk.

Najlepsze TP wynikają z:

- kluczowych stref podaży/popytu,
- poziomów wsparcia i oporu,
- zasięgów formacji technicznych,
- mierzeń Fibonacciego,
- struktury rynku.

TP nie powinno być ustawiane losowo - musi wynikać z analizy technicznej i logiki zachowania ceny.
      `,
    },

    {
      heading: "Dlaczego plan jest najważniejszy?",
      text: `
Najlepsze zarządzanie pozycją opiera się na **konsekwentnym i jasno określonym planie**.  

Plan eliminuje emocje takie jak strach, chciwość czy chęć „odrabiania strat”.

Dobry plan zawiera:

- kiedy wchodzisz w pozycję,
- gdzie ustawiasz SL i dlaczego,
- gdzie ustawiasz TP,
- kiedy przesuwasz SL (lub używasz TS),
- kiedy realizujesz częściowe zyski,
- kiedy wychodzisz całkowicie.

Bez planu nawet najlepsza analiza techniczna nie działa, bo decyzje stają się chaotyczne i niespójne.
      `,
    },
  ],
};
