// src/data/quizzes/module2-course3-chapter3.js

export default {
  id: "m2c3ch3",
  title: "Przełamania i wybicia",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest cechą prawdziwego wybicia?",
      answers: [
        "Wolumen rośnie",
        "Cena wraca w zakres",
        "Niskie momentum",
        "Brak kontynuacji",
      ],
      correctIndex: 0,
      explanation: "Prawdziwe wybicia mają wysoki wolumen i momentum.",
    },

    {
      id: 2,
      type: "radio",
      text: "Fałszywe wybicie często kończy się:",
      answers: [
        "Szybkim ruchem w przeciwną stronę",
        "Długim trendem",
        "Konsolidacją",
        "Równą ceną",
      ],
      correctIndex: 0,
      explanation: "To tzw. „failed breakout”.",
    },

    {
      id: 3,
      type: "radio",
      text: "Najlepszym miejscem wejścia przy wybiciu jest:",
      answers: [
        "Retest wybitego poziomu",
        "Pierwsza minuta po wybiciu",
        "Szczyt świecy",
        "Dół konsolidacji",
      ],
      correctIndex: 0,
      explanation: "Retest potwierdza wybicie.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co wzmacnia wybicie?",
      answers: [
        "Zbieżność kilku poziomów",
        "Brak wolumenu",
        "Niepewność rynku",
        "Brak trendu",
      ],
      correctIndex: 0,
      explanation: "Konfluencja = większa moc sygnału.",
    },

    {
      id: 5,
      type: "radio",
      text: "Wybicia są najpewniejsze gdy:",
      answers: [
        "Trend już istnieje",
        "Cena stoi",
        "Brak kierunku",
        "Wolumen jest niski",
      ],
      correctIndex: 0,
      explanation: "Wybicia z trendem mają większą skuteczność.",
    },
  ],
};
