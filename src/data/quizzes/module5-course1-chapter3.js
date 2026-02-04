// src/data/quizzes/module5-course1-chapter3.js

export default {
  id: "m5c1ch3",
  title: "Ustalanie SL i TP",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co oznacza skrót SL?",
      answers: [
        "Stop Loss - poziom maksymalnej akceptowalnej straty",
        "Safe Limit - limit bezpieczeństwa",
        "Short Line - linia krótkiej pozycji",
        "Sell Level - poziom sprzedaży",
      ],
      correctIndex: 0,
      explanation:
        "Stop Loss automatycznie ogranicza stratę do zaakceptowanego poziomu.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza R:R?",
      answers: [
        "Relacja ryzyka do potencjalnego zysku",
        "Relacja RSI do rynku",
        "Rewizja ryzyka",
        "Reguła rebalansowania",
      ],
      correctIndex: 0,
      explanation:
        "R:R (risk-to-reward) porównuje potencjalną stratę do potencjalnego zysku.",
    },

    {
      id: 3,
      type: "radio",
      text: "Kiedy SL powinien być ustawiony?",
      answers: [
        "Przed wejściem w transakcję",
        "Po osiągnięciu zysku",
        "Gdy cena spadnie",
        "Tylko gdy rynek jest zmienny",
      ],
      correctIndex: 0,
      explanation:
        "SL ustala się zawsze przy planowaniu transakcji, nie po fakcie.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co jest celem TP?",
      answers: [
        "Zamknięcie pozycji na zaplanowanym zysku",
        "Zmniejszenie wolumenu transakcji",
        "Zwiększenie ryzyka",
        "Spowolnienie trendu",
      ],
      correctIndex: 0,
      explanation:
        "Take Profit automatycznie realizuje zysk na określonym poziomie.",
    },

    {
      id: 5,
      type: "radio",
      text: "Który R:R jest uważany za zdrowy dla systemów trendowych?",
      answers: ["1:2 lub wyższy", "1:1", "1:0.5", "0:1"],
      correctIndex: 0,
      explanation:
        "Systemy podążające za trendem opierają się na przewadze zysków nad stratami.",
    },
  ],
};
