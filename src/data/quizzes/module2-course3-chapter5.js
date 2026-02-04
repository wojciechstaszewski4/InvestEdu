// src/data/quizzes/module2-course3-chapter5.js

export default {
  id: "m2c3ch5",
  title: "Zarządzanie pozycją",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Stop loss służy do:",
      answers: [
        "Ochrony kapitału",
        "Zwiększenia zysku",
        "Wyznaczenia trendu",
        "Analizy wolumenu",
      ],
      correctIndex: 0,
      explanation: "SL ogranicza straty i chroni portfel.",
    },

    {
      id: 2,
      type: "radio",
      text: "Trailing stop:",
      answers: [
        "Podąża za ceną i chroni zysk",
        "Ustawia się tylko ręcznie",
        "Dotyczy tylko Forexu",
        "Zwiększa ryzyko",
      ],
      correctIndex: 0,
      explanation: "TS automatycznie przesuwa się wraz z ceną.",
    },

    {
      id: 3,
      type: "radio",
      text: "Częściowa realizacja zysku pomaga:",
      answers: [
        "Zmniejszyć presję psychologiczną",
        "Zwiększyć ryzyko",
        "Unikać trendów",
        "Polegać tylko na intuicji",
      ],
      correctIndex: 0,
      explanation: "Sprzedanie części pozycji zmniejsza stres.",
    },

    {
      id: 4,
      type: "radio",
      text: "Take profit ustawia się na:",
      answers: [
        "Logicznych poziomach rynku",
        "Losowych wartościach",
        "Ważnych newsach",
        "W środku konsolidacji",
      ],
      correctIndex: 0,
      explanation: "TP wynika z analizy technicznej.",
    },

    {
      id: 5,
      type: "radio",
      text: "Najlepsze zarządzanie pozycją opiera się o:",
      answers: [
        "Konsekwentny plan",
        "Szybkie decyzje",
        "Śledzenie Twittera",
        "Częste zmiany SL",
      ],
      correctIndex: 0,
      explanation: "Plan eliminuje emocjonalne decyzje.",
    },
  ],
};
