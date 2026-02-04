// src/data/theory/module5-course1-chapter3.js

export default {
  id: "m5c1ch3",
  title: "Ustalanie SL i TP",
  content: [
    {
      heading: "Czym jest Stop Loss (SL)?",
      text: `
Stop Loss to poziom ceny, przy którym transakcja zostaje automatycznie zamknięta,
aby **ograniczyć maksymalną akceptowalną stratę**. SL nie jest narzędziem do przewidywania rynku -
to narzędzie do ochrony kapitału.

Dlaczego SL jest niezbędny?
- chroni przed dużymi, niekontrolowanymi stratami,
- eliminuje emocjonalne decyzje w trakcie ruchu ceny,
- pozwala obliczać wielkość pozycji i ryzyko jednostkowe,
- czyni handel powtarzalnym i logicznym.

Profesjonalny trader **zawsze** ustala SL przed wejściem.
      `,
    },

    {
      heading: "Czym jest Take Profit (TP)?",
      text: `
Take Profit to zaplanowany poziom, na którym automatycznie
**realizujesz zysk**, gdy cena osiągnie cel.

Po co ustalać TP?
- zapobiega pazerności i „trzymaniu za długo”,
- pozwala trzymać się systemu,
- umożliwia zdefiniowanie strategii R:R,
- stabilizuje wyniki portfela.

TP nie służy zgadywaniu szczytu - jego rolą jest realizacja zysku zgodnie z wcześniej ustalonym planem.
      `,
    },

    {
      heading: "Relacja ryzyka do zysku – R:R",
      text: `
R:R (risk-to-reward) to stosunek potencjalnej straty do potencjalnego zysku.
Przykład:
- Ryzykujesz 100 zł, celujesz w 200 zł → R:R = **1:2**.
- Ryzykujesz 100 zł, cel 300 zł → R:R = **1:3**.

Dlaczego R:R jest kluczowe?
- pozwala budować strategie z dodatnią oczekiwaną wartością,
- umożliwia zarabianie nawet przy niskiej skuteczności,
- wzmacnia dyscyplinę,
- oddziela dobre wejścia od złych.

W systemach trendowych R:R **1:2 lub wyższy** jest uważany za zdrowy,
ponieważ zyski muszą przewyższać straty.
      `,
    },

    {
      heading: "Kiedy ustawiać SL i TP?",
      text: `
SL i TP ustawia się **zanim otworzysz pozycję**.
Jeśli robisz to po fakcie, decyzja zaczyna być emocjonalna,
a nie systemowa.

Prawidłowa kolejność:
1. Analiza → 2. Ustalenie ryzyka → 3. Wyliczenie R:R → 4. Ustalenie SL i TP → 5. Dopiero wejście.

To jedyny sposób, aby zachować kontrolę nad ryzykiem.
      `,
    },

    {
      heading: "Jak pracować z SL i TP w praktyce?",
      text: `
Najważniejsze zasady:
- SL musi wynikać z logiki rynku (np. poniżej wsparcia, nad oporem),
- TP powinien być realistyczny i zgodny ze strukturą wykresu,
- R:R musi być dodatnie - inaczej transakcja jest nieopłacalna,
- SL nie może wynikać z przypadkowych wartości w złotówkach,
- przesuwanie SL bez powodu to jeden z największych błędów inwestorów.

SL i TP nie służą do przewidywania - służą do **kontroli i dyscypliny**.
      `,
    },
  ],
};
