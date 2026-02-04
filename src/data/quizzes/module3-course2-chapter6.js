// src/data/quizzes/module3-course2-chapter6.js

export default {
  id: "m3c2ch6",
  title: "Porównywanie spółek – analiza względna",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Analiza względna polega na:",
      answers: [
        "Porównaniu wskaźników z innymi firmami",
        "Analizie przepływów pieniężnych",
        "Ocena aktywów trwałych",
        "Wycenie według wartości księgowej",
      ],
      correctIndex: 0,
      explanation: "To podstawa analizy porównawczej.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który wskaźnik jest NAJLEPSZY do porównań firm z różnych branż kapitałochłonnych?",
      answers: ["EV/EBITDA", "P/E", "P/BV", "ROE"],
      correctIndex: 0,
      explanation: "EV/EBITDA neutralizuje różnice w strukturze kapitału.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wysoki P/E w porównaniu do konkurencji może oznaczać:",
      answers: [
        "Oczekiwanie szybszego wzrostu",
        "Niedowartościowanie",
        "Wysoką wartość księgową",
        "Słabą płynność",
      ],
      correctIndex: 0,
      explanation: "Rynek oczekuje przyszłych wzrostów.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który czynnik należy standardowo normalizować przy porównywaniu spółek?",
      answers: [
        "Inny rok finansowy",
        "Pogoda",
        "Kolor logo",
        "Strategię marketingową",
      ],
      correctIndex: 0,
      explanation: "Dane muszą dotyczyć porównywalnych okresów.",
    },

    {
      id: 5,
      type: "radio",
      text: "Analiza względna jest szczególnie użyteczna, gdy:",
      answers: [
        "Wyceniamy firmę szybko na podstawie rynku",
        "Przeprowadzamy pełny model DCF",
        "Oceniamy strukturę bilansu",
        "Analizujemy cash flow historyczny",
      ],
      correctIndex: 0,
      explanation: "To szybka metoda szacowania wyceny.",
    },
  ],
};
