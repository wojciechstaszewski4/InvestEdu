// src/data/quizzes/module1-course3-chapter3.js

export default {
  id: "m1c3ch3",
  title: "Dywersyfikacja",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Główna zaleta dywersyfikacji to:",
      answers: [
        "Zmniejszenie ryzyka bez proporcjonalnej utraty zwrotu",
        "Zwiększenie kosztów transakcji",
        "Koncentracja na jednym rynku",
        "Zwiększenie zmienności",
      ],
      correctIndex: 0,
      explanation:
        "Dywersyfikacja redukuje ryzyko specyficzne, nie obniżając znacząco potencjału zysku.",
    },

    {
      id: 2,
      type: "radio",
      text: "Portfel dobrze zdywersyfikowany powinien zawierać:",
      answers: [
        "Aktywa o niskiej korelacji",
        "Tylko akcje jednej spółki",
        "Wyłącznie polskie spółki",
        "Tylko jeden ETF",
      ],
      correctIndex: 0,
      explanation:
        "Najważniejsza jest niska korelacja - aktywa reagujące inaczej na te same zdarzenia.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który portfel jest najlepiej zdywersyfikowany?",
      answers: [
        "ETF MSCI World + obligacje globalne",
        "3 spółki z GPW",
        "Tylko Bitcoin",
        "1 fundusz akcyjny",
      ],
      correctIndex: 0,
      explanation:
        "Połączenie globalnych akcji i obligacji daje szeroką dywersyfikację geograficzną i klasową.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie z opisem.",
      pairs: [
        {
          left: "Ryzyko specyficzne",
          right: "Dotyczy pojedynczej spółki lub sektora",
        },
        {
          left: "Ryzyko systemowe",
          right: "Dotyczy całego rynku lub gospodarki",
        },
        {
          left: "Dywersyfikacja",
          right: "Rozkład kapitału na różne aktywa",
        },
        {
          left: "Korelacja",
          right: "Zależność ruchów cen między aktywami",
        },
      ],
      explanation:
        "Dywersyfikacja eliminuje głównie ryzyko specyficzne, ale nie systemowe.",
    },

    {
      id: 5,
      type: "radio",
      text: "Over-diversification oznacza:",
      answers: [
        "Zbyt duże rozdrobnienie portfela",
        "Zbyt małą liczbę aktywów",
        "Tylko jedno aktywo",
        "Tylko obligacje",
      ],
      correctIndex: 0,
      explanation:
        "Nadmierna liczba pozycji zwiększa koszty i nie poprawia już istotnie profilu ryzyka.",
    },
  ],
};
