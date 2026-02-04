// src/data/quizzes/module5-course1-chapter5.js

export default {
  id: "m5c1ch5",
  title: "Dźwignia finansowa",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest dźwignia finansowa?",
      answers: [
        "Mechanizmem pozwalającym kontrolować większą pozycję niż posiadany kapitał",
        "Systemem ochrony przed stratami",
        "Narzędziem do wyznaczania trendu",
        "Metodą na obniżenie zmienności",
      ],
      correctIndex: 0,
      explanation:
        "Dźwignia zwiększa ekspozycję na rynek, ale jednocześnie znacząco podnosi ryzyko.",
    },

    {
      id: 2,
      type: "radio",
      text: "Największe ryzyko dźwigni to:",
      answers: [
        "Możliwość szybkiej utraty kapitału",
        "Brak możliwości otwarcia pozycji",
        "Powolne tempo inwestowania",
        "Wymóg wysokiej płynności",
      ],
      correctIndex: 0,
      explanation:
        "Niewielki ruch ceny w niekorzystnym kierunku może wyzerować pozycję.",
    },

    {
      id: 3,
      type: "radio",
      text: "Kiedy stosowanie dźwigni może być uzasadnione?",
      answers: [
        "Gdy inwestor ma system i zarządza ryzykiem",
        "Zawsze, kiedy rynek rośnie",
        "Zawsze przy małym kapitale",
        "Nigdy - dźwignia jest zakazana",
      ],
      correctIndex: 0,
      explanation:
        "Dźwignia powinna być używana tylko w ramach jasno określonego planu.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co oznacza dźwignia x5?",
      answers: [
        "Pozycja jest pięć razy większa niż posiadany kapitał",
        "Ryzyko jest pięć razy mniejsze",
        "Opłaty transakcyjne są pięć razy niższe",
        "Stop loss automatycznie ustawia się pięć razy wyżej",
      ],
      correctIndex: 0,
      explanation:
        "Dźwignia x5 oznacza pięciokrotne zwiększenie ekspozycji na rynek.",
    },

    {
      id: 5,
      type: "radio",
      text: "Najczęstszy błąd początkujących przy dźwigni to:",
      answers: [
        "Zbyt duże pozycje względem kapitału",
        "Zbyt mała liczba transakcji",
        "Brak emocji",
        "Za rzadkie otwieranie pozycji",
      ],
      correctIndex: 0,
      explanation:
        "Brak kontroli wielkości pozycji prowadzi do szybkich i bolesnych strat.",
    },
  ],
};
