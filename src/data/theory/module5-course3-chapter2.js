// src/data/theory/module5-course3-chapter2.js

export default {
  id: "m5c3ch2",
  title: "Rebalancing czasowy i progowy",
  content: [
    {
      heading: "Rebalancing czasowy - na czym polega?",
      text: `
Rebalancing czasowy to metoda, w której **przywracasz alokację portfela w stałych odstępach czasu** - niezależnie od tego, co robi rynek.

Najczęstsze interwały:
- raz w roku,
- raz na pół roku,
- raz na kwartał,
- raz w miesiącu (w portfelach aktywnych).

Zalety:
- bardzo prosta implementacja,
- niewielka liczba transakcji,
- jasny, powtarzalny schemat działania.

Wadą jest brak reakcji na nagłe zmiany rynku - korekta portfela może nastąpić zbyt późno.
      `,
    },

    {
      heading: "Rebalancing progowy - czym się wyróżnia?",
      text: `
Rebalancing progowy polega na **korekcie portfela wtedy, gdy udział któregoś aktywa odjedzie od celu o określony poziom**.

Przykład:
- cel: 60% akcji, 40% obligacji,
- próg: ±5%,
- rebalancing uruchamia się, gdy akcje przekroczą 65% lub spadną poniżej 55%.

Zalety:
- lepsza reakcja na zmienność rynku,
- utrzymanie bardziej stabilnego profilu ryzyka,
- korekta wykonywana tylko wtedy, gdy naprawdę jest potrzebna.

Wady:
- w okresach dużych wahań może generować **dużo transakcji**.
      `,
    },

    {
      heading: "Który model lepiej dostosowuje się do rynku?",
      text: `
Rebalancing **progowy** lepiej reaguje na rzeczywistość, bo działa, gdy zmienia się struktura portfela - nie wtedy, gdy zmienia się kalendarz.

Wysoka zmienność = częstsze odchylenia od celu → szybkie uruchamianie rebalancingu.

Dlatego inwestorzy preferują rebalancing progowy, gdy zależy im na:
- precyzyjnej kontroli ryzyka,
- maksymalnej zgodności portfela z założeniami,
- dynamicznej reakcji na rynek.
      `,
    },

    {
      heading: "Wady rebalancingu progowego",
      text: `
Największym minusem tej metody jest **potencjalnie dużo większa liczba transakcji**, zwłaszcza w okresach dużej zmienności.

To oznacza:
- wyższe koszty,
- częstsze decyzje,
- większe zaangażowanie inwestora.

Dlatego wielu początkujących zaczyna od rebalancingu czasowego - jest znacznie spokojniejszy.
      `,
    },

    {
      heading: "Zalety rebalancingu czasowego",
      text: `
Rebalancing czasowy jest:
- prosty,
- powtarzalny,
- zrozumiały dla początkujących,
- idealny dla portfeli pasywnych (np. ETF-owych).

Nie zapewnia perfekcyjnej kontroli ryzyka, ale daje **stabilny proces**, który nie wymaga monitorowania rynku 24/7.

W długim terminie oba modele działają - różnią się jedynie poziomem kontroli i intensywnością działania.
      `,
    },
  ],
};
