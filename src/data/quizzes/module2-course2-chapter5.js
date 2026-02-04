// src/data/quizzes/module2-course2-chapter5.js

export default {
  id: "m2c2ch5",
  title: "Wolumen",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co oznacza rosnący wolumen?",
      answers: [
        "Zwiększone zainteresowanie rynkiem",
        "Zmniejszenie zmienności",
        "Brak uczestników",
        "Stałą cenę",
      ],
      correctIndex: 0,
      explanation: "Wolumen rośnie, gdy zwiększa się aktywność handlowa.",
    },

    {
      id: 2,
      type: "radio",
      text: "Jak wolumen pomaga w analizie trendu?",
      answers: [
        "Potwierdza jego siłę",
        "Zmienia kierunek trendu",
        "Wyznacza punkty zwrotne",
        "Nie ma wpływu",
      ],
      correctIndex: 0,
      explanation: "Trend z wysokim wolumenem jest bardziej wiarygodny.",
    },

    {
      id: 3,
      type: "radio",
      text: "Spadający wolumen najczęściej oznacza:",
      answers: [
        "Konsolidację",
        "Nowy trend",
        "Wybicie",
        "Nagły spadek zmienności",
      ],
      correctIndex: 0,
      explanation: "W konsolidacjach wolumen zwykle maleje.",
    },

    {
      id: 4,
      type: "radio",
      text: "Czy wolumen może sygnalizować odwrócenia rynku?",
      answers: ["Tak", "Nie", "Tylko na rynku krypto", "Tylko na rynku Forex"],
      correctIndex: 0,
      explanation:
        "Nagły skok wolumenu może oznaczać kulminację podaży/popytu.",
    },

    {
      id: 5,
      type: "radio",
      text: "Wolumen najlepiej interpretować:",
      answers: [
        "W kontekście trendu",
        "Samodzielnie",
        "Tylko z RSI",
        "Tylko intraday",
      ],
      correctIndex: 0,
      explanation: "Wolumen bez kontekstu trendu niewiele mówi.",
    },
  ],
};
