// src/data/quizzes/module2-course3-chapter2.js

export default {
  id: "m2c3ch2",
  title: "Sygnały wejścia i wyjścia",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest najważniejsze w sygnale wejścia?",
      answers: [
        "Konfluencja kilku czynników",
        "Dokładna cena wejścia",
        "Szybkość zawierania transakcji",
        "Maksymalny wolumen",
      ],
      correctIndex: 0,
      explanation: "Najlepsze sygnały wynikają z potwierdzeń wielu elementów.",
    },

    {
      id: 2,
      type: "radio",
      text: "Trigger wejścia to:",
      answers: [
        "Moment potwierdzenia sygnału",
        "Zlecenie stop loss",
        "Przecięcie dwóch średnich",
        "Zmiana wolumenu",
      ],
      correctIndex: 0,
      explanation: "Trigger = punkt aktywacji transakcji.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wyjście z pozycji powinno wynikać z:",
      answers: [
        "Z góry ustalonych zasad",
        "Emocji i intuicji",
        "Opinie z Twittera",
        "Losowych decyzji",
      ],
      correctIndex: 0,
      explanation: "System musi mieć jasne zasady wyjścia.",
    },

    {
      id: 4,
      type: "radio",
      text: "Najczęstszy błąd przy wejściu to:",
      answers: [
        "Wejścia zbyt późne",
        "Wejścia z korekty",
        "Wejścia przy wsparciach",
        "Wejścia z wybicia",
      ],
      correctIndex: 0,
      explanation: "Spóźnione wejście zwiększa ryzyko.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co wzmacnia sygnał?",
      answers: [
        "Retest po wybiciu",
        "Zbyt duża liczba wskaźników",
        "Brak wolumenu",
        "Konsolidacja",
      ],
      correctIndex: 0,
      explanation: "Retest daje potwierdzenie reakcji ceny.",
    },
  ],
};
