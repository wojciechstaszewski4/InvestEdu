// src/data/quizzes/module2-course1-chapter4.js

export default {
  id: "m2c1ch4",
  title: "Wsparcia i opory",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest poziom wsparcia?",
      answers: [
        "Strefą, gdzie zwiększa się popyt",
        "Miejscem bez znaczenia",
        "Obszarem o dużej zmienności",
        "Sygnałem do sprzedaży",
      ],
      correctIndex: 0,
      explanation:
        "Wsparcie to obszar, gdzie popyt jest na tyle silny, że zatrzymuje spadki.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza wielokrotny test oporu?",
      answers: [
        "Osłabienie tego poziomu i większą szansę na wybicie",
        "Wzmocnienie poziomu",
        "Zmianę wolumenu",
        "Brak znaczenia analitycznego",
      ],
      correctIndex: 0,
      explanation:
        "Im częściej poziom jest testowany, tym słabszy - rośnie szansa wybicia.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który sygnał potwierdza wybicie poziomu?",
      answers: [
        "Zamknięcie świecy ponad poziomem",
        "Dotknięcie poziomu knotem",
        "Wzrost wolumenu bez wybicia",
        "Spadek zmienności",
      ],
      correctIndex: 0,
      explanation:
        "Najważniejsze jest zamknięcie świecy ponad/poniżej poziomu.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co to jest „retest”?",
      answers: [
        "Powrót ceny do wybitego poziomu",
        "Nowe HH po konsolidacji",
        "Niespodziewany skok ceny",
        "Formacja świecowa",
      ],
      correctIndex: 0,
      explanation:
        "Retest to ponowny kontakt z wybitym poziomem - często daje idealne wejście.",
    },

    {
      id: 5,
      type: "radio",
      text: "Który poziom jest ważniejszy?",
      answers: [
        "Poziomy z wyższego interwału",
        "Poziomy z najniższego interwału",
        "Każde wsparcie jest tak samo ważne",
        "Najniższy możliwy poziom",
      ],
      correctIndex: 0,
      explanation: "Poziomy z wyższych interwałów (D1, W1) są dużo mocniejsze.",
    },
  ],
};
