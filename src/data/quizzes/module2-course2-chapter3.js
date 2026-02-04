// src/data/quizzes/module2-course2-chapter3.js

export default {
  id: "m2c2ch3",
  title: "MACD",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Z czego składa się MACD?",
      answers: [
        "Linii MACD, linii sygnału i histogramu",
        "Jednej linii trendu",
        "Średniej z wolumenu",
        "Poziomów wykupienia",
      ],
      correctIndex: 0,
      explanation: "MACD składa się z 3 elementów: MACD, signal i histogram.",
    },

    {
      id: 2,
      type: "radio",
      text: "Kiedy MACD generuje sygnał kupna?",
      answers: [
        "Gdy linia MACD przecina linię sygnału od dołu",
        "Gdy RSI przekracza 30",
        "Gdy cena jest powyżej MA200",
        "Przy wybiciu wolumenu",
      ],
      correctIndex: 0,
      explanation: "Przecięcie od dołu jest klasycznym sygnałem wzrostowym.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza rosnący histogram MACD?",
      answers: [
        "Wzrost momentum",
        "Spadek wolumenu",
        "Utrzymanie trendu bocznego",
        "Zmniejszenie zmienności",
      ],
      correctIndex: 0,
      explanation: "Histogram pokazuje różnicę między MACD a signal.",
    },

    {
      id: 4,
      type: "radio",
      text: "MACD najlepiej sprawdza się na:",
      answers: [
        "Wyższych interwałach",
        "1-minutowych wykresach",
        "Wskaźnikach ceny złota",
        "SMA200",
      ],
      correctIndex: 0,
      explanation: "MACD jest wolnym wskaźnikiem - lepiej działa na D1, H4.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kiedy MACD daje fałszywe sygnały?",
      answers: [
        "W konsolidacjach",
        "W silnych trendach",
        "Na danych makro",
        "Na dużym wolumenie",
      ],
      correctIndex: 0,
      explanation: "W bokach wskaźnik generuje wiele przecięć.",
    },
  ],
};
