// src/data/quizzes/module2-course2-chapter6.js

export default {
  id: "m2c2ch6",
  title: "Łączenie wskaźników w praktyce",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest najczęstszym błędem przy używaniu wskaźników?",
      answers: [
        "Nakładanie zbyt wielu naraz",
        "Używanie jednego wskaźnika",
        "Analiza trendu",
        "Obserwacja wolumenu",
      ],
      correctIndex: 0,
      explanation: "Zbyt dużo wskaźników = chaos i brak sygnałów.",
    },

    {
      id: 2,
      type: "radio",
      text: "Jaki zestaw wskaźników jest najbardziej optymalny?",
      answers: [
        "Trend + momentum + zmienność",
        "Sześć oscylatorów",
        "Tylko RSI",
        "Tylko wolumen",
      ],
      correctIndex: 0,
      explanation: "Trio: MA, RSI/MACD, Bollinger → kompletna analiza.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza zgodność sygnałów z różnych wskaźników?",
      answers: [
        "Wyższe prawdopodobieństwo ruchu",
        "Gwarancję zysku",
        "Brak znaczenia",
        "Fałszywy sygnał",
      ],
      correctIndex: 0,
      explanation: "Konfluencja = większa wiarygodność.",
    },

    {
      id: 4,
      type: "radio",
      text: "Dlaczego minimalizm działa w AT?",
      answers: [
        "Wskaźniki bazują na cenie i i tak się powtarzają",
        "Rynek nie reaguje na wskaźniki",
        "Im więcej wskaźników, tym bardziej precyzyjne sygnały",
        "AT nie działa",
      ],
      correctIndex: 0,
      explanation: "Wiele wskaźników duplikuje te same informacje.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co jest najważniejsze podczas pracy z AT?",
      answers: [
        "Kontekst i analiza wyższego interwału",
        "Dodanie jak największej liczby wskaźników",
        "Analiza bez wykresu",
        "Sugestie z mediów społecznościowych",
      ],
      correctIndex: 0,
      explanation: "Multi-timeframe analysis zwiększa trafność decyzji.",
    },
  ],
};
