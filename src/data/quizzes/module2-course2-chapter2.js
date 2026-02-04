// src/data/quizzes/module2-course2-chapter2.js

export default {
  id: "m2c2ch2",
  title: "RSI",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co mierzy wskaźnik RSI?",
      answers: [
        "Siłę i momentum ruchu ceny",
        "Wolumen rynku",
        "Średnią zmienność",
        "Kierunek trendu",
      ],
      correctIndex: 0,
      explanation: "RSI analizuje dynamikę ruchu ceny, mierząc momentum.",
    },

    {
      id: 2,
      type: "radio",
      text: "Za wykupienie uznaje się poziom RSI:",
      answers: ["20", "50", "70", "90"],
      correctIndex: 2,
      explanation: "Standardowa interpretacja: RSI > 70 = wykupienie.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza dywergencja RSI?",
      answers: [
        "Cena i RSI poruszają się w przeciwnych kierunkach",
        "Cena stoi w miejscu",
        "Wzrost wolumenu",
        "Sygnał potwierdzający trend",
      ],
      correctIndex: 0,
      explanation:
        "Dywergencje są popularnym sygnałem ostrzegającym przed odwróceniem.",
    },

    {
      id: 4,
      type: "radio",
      text: "RSI najczęściej używa się w konfiguracji:",
      answers: ["5", "14", "50", "200"],
      correctIndex: 1,
      explanation: "RSI(14) to standardowy okres.",
    },

    {
      id: 5,
      type: "radio",
      text: "RSI najlepiej działa w:",
      answers: [
        "Rynku bocznym",
        "Silnych trendach",
        "Parabolicznych wybiciach",
        "Zmiennych rynkach krypto",
      ],
      correctIndex: 0,
      explanation:
        "RSI w trendzie często zostaje długo wykupiony lub wyprzedany.",
    },
  ],
};
