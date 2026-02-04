// src/data/quizzes/module2-course3-chapter1.js

export default {
  id: "m2c3ch1",
  title: "Analiza świecowa",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co przedstawia korpus świecy?",
      answers: [
        "Różnicę między ceną otwarcia a zamknięcia",
        "Wolumen transakcji",
        "Najwyższą cenę sesji",
        "Siłę trendu",
      ],
      correctIndex: 0,
      explanation: "Korpus = zakres między open i close.",
    },

    {
      id: 2,
      type: "radio",
      text: "Duży dolny knot sugeruje:",
      answers: [
        "Silną reakcję popytu",
        "Przewagę podaży",
        "Brak zmienności",
        "Odwrócenie wolumenu",
      ],
      correctIndex: 0,
      explanation: "Kupujący odrzucają niższe ceny.",
    },

    {
      id: 3,
      type: "matching",
      text: "Połącz formację świecową z jej znaczeniem:",
      pairs: [
        {
          left: "Młot",
          right: "Potencjalne odwrócenie po spadkach",
        },
        {
          left: "Doji",
          right: "Brak zdecydowanej przewagi stron",
        },
        {
          left: "Duży korpus",
          right: "Silne momentum jednej strony rynku",
        },
      ],
    },

    {
      id: 4,
      type: "radio",
      text: "Silne momentum świecowe widać gdy:",
      answers: [
        "Korpusy są duże i zamknięcia blisko ekstremów",
        "Knoty są bardzo długie",
        "Świece są małe",
        "Cena stoi w miejscu",
      ],
      correctIndex: 0,
      explanation: "Duży korpus = dominacja jednej strony rynku.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co oznacza świeca doji?",
      answers: [
        "Brak zdecydowanej przewagi stron",
        "Trend wzrostowy",
        "Silną presję podaży",
        "Zbliżający się impuls",
      ],
      correctIndex: 0,
      explanation: "Doji sygnalizuje równowagę kupujących i sprzedających.",
    },
  ],
};
