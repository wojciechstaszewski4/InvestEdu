// src/data/quizzes/module2-course2-chapter4.js

export default {
  id: "m2c2ch4",
  title: "Wstęgi Bollingera",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co mierzą Wstęgi Bollingera?",
      answers: ["Zmienność ceny", "Wolumen", "Momentum", "Siłę trendu"],
      correctIndex: 0,
      explanation: "Wstęgi bazują na odchyleniu standardowym ceny.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza dotknięcie górnej wstęgi?",
      answers: [
        "Możliwy stan wykupienia",
        "Sygnał kupna",
        "Potwierdzenie trendu spadkowego",
        "Brak interpretacji",
      ],
      correctIndex: 0,
      explanation: "Górna wstęga = potencjalne wykupienie.",
    },

    {
      id: 3,
      type: "radio",
      text: "Zacieśnienie wstęg sygnalizuje:",
      answers: [
        "Spadek zmienności i potencjalne wybicie",
        "Trend boczny",
        "Odwrócenie trendu",
        "Duży wolumen",
      ],
      correctIndex: 0,
      explanation: "Tzw. „Bollinger Squeeze”.",
    },

    {
      id: 4,
      type: "radio",
      text: "Wstęgi są oparte na średniej:",
      answers: ["SMA20", "SMA200", "EMA20", "EMA50"],
      correctIndex: 0,
      explanation: "Standard to SMA20 + odchylenia standardowe.",
    },

    {
      id: 5,
      type: "radio",
      text: "Gdy cena przebija dolną wstęgę:",
      answers: [
        "Może to oznaczać wyprzedanie",
        "Zawsze generuje sygnał kupna",
        "Trend rośnie",
        "Nie ma znaczenia",
      ],
      correctIndex: 0,
      explanation: "Dolna wstęga = często wyprzedanie.",
    },
  ],
};
