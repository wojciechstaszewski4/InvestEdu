// src/data/quizzes/module2-course2-chapter1.js

export default {
  id: "m2c2ch1",
  title: "Średnie kroczące (MA)",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co pokazuje średnia krocząca?",
      answers: [
        "Uśrednioną cenę z danego okresu",
        "Średnią wolumenową wykresu",
        "Zysk inwestora",
        "Maksymalną cenę instrumentu",
      ],
      correctIndex: 0,
      explanation:
        "Średnia krocząca wygładza wykres, pokazując średnią cenę z określonej liczby świec.",
    },

    {
      id: 2,
      type: "radio",
      text: "Która średnia reaguje szybciej na zmiany ceny?",
      answers: ["SMA", "EMA", "WSMA", "WMA"],
      correctIndex: 1,
      explanation:
        "EMA (Exponential Moving Average) nadaje większą wagę ostatnim cenom, więc reaguje szybciej.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza przecięcie MA50 przez MA200 od dołu?",
      answers: [
        "Golden Cross - sygnał wzrostowy",
        "Death Cross - sygnał spadkowy",
        "Konsolidację rynku",
        "Brak znaczenia w analizie",
      ],
      correctIndex: 0,
      explanation: "Golden Cross to wzrostowy sygnał trendowy MA50 > MA200.",
    },

    {
      id: 4,
      type: "radio",
      text: "Do czego NIE służą średnie kroczące?",
      answers: [
        "Wyznaczania trendu",
        "Określania wsparć dynamicznych",
        "Przewidywania dokładnych punktów zwrotu",
        "Wygładzania ceny",
      ],
      correctIndex: 2,
      explanation:
        "MA nie przewidują idealnych punktów odwróceń, ale pokazują kierunek i dynamikę trendu.",
    },

    {
      id: 5,
      type: "radio",
      text: "Jak interpretujemy cenę powyżej MA200?",
      answers: [
        "Długoterminowy trend wzrostowy",
        "Długoterminowy trend spadkowy",
        "Konsolidację",
        "Brak możliwości interpretacji",
      ],
      correctIndex: 0,
      explanation:
        "MA200 jest standardową średnią do określania długoterminowego trendu.",
    },
  ],
};
