// src/data/quizzes/module2-course1-chapter1.js

export default {
  id: "m2c1ch1",
  title: "Czym jest trend na rynku?",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest trend wzrostowy?",
      answers: [
        "Sekwencją wyższych dołków i wyższych szczytów",
        "Chaotycznym ruchem ceny bez kierunku",
        "Sekwencją niższych szczytów i niższych dołków",
        "Nagłym skokiem ceny w krótkim czasie",
      ],
      correctIndex: 0,
      explanation:
        "Trend wzrostowy to układ HH (higher highs) i HL (higher lows).",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza, że trend traci siłę?",
      answers: [
        "Cena tworzy coraz płytsze korekty i mniejsze impulsy",
        "Cena przyspiesza w kierunku trendu",
        "Wolumen gwałtownie rośnie w kierunku trendu",
        "Cena zaczyna gwałtownie rosnąć",
      ],
      correctIndex: 0,
      explanation:
        "Zmniejszająca się dynamika impulsów jest jednym z sygnałów słabnięcia trendu.",
    },

    {
      id: 3,
      type: "radio",
      text: "Jak nazywa się ruch zgodny z kierunkiem trendu?",
      answers: ["Impuls", "Konsolidacja", "Korekta", "Flaga"],
      correctIndex: 0,
      explanation: "Impuls to ruch zgodny z trendem, korekta - przeciwny.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co najczęściej rozpoczyna zmianę trendu?",
      answers: [
        "Przełamanie kluczowego poziomu struktury",
        "Duża świeca jednego dnia",
        "Spadek wolumenu",
        "Przejście ceny przez średnią 9 EMA",
      ],
      correctIndex: 0,
      explanation:
        "Zmiana struktury rynku (np. HH → LH) jest najważniejszym sygnałem odwrócenia.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kiedy trend boczny występuje na rynku?",
      answers: [
        "Gdy rynek tworzy konsolidację i brak kierunku",
        "Gdy rynek wyznacza nowe szczyty",
        "Gdy rynek wybija kolejne minima",
        "Gdy wolumen jest wyjątkowo wysoki",
      ],
      correctIndex: 0,
      explanation:
        "Trend boczny to sytuacja, w której cena porusza się w przedziale.",
    },
  ],
};
