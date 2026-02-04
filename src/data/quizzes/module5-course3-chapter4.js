// src/data/quizzes/module5-course3-chapter4.js

export default {
  id: "m5c3ch4",
  title: "Optymalizacja ryzyka i zwrotu",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest głównym celem optymalizacji portfela?",
      answers: [
        "Znalezienie równowagi między ryzykiem a oczekiwanym zwrotem",
        "Maksymalizacja liczby transakcji",
        "Całkowite eliminowanie ryzyka",
        "Wybór jednego najlepszego aktywa",
      ],
      correctIndex: 0,
      explanation: "Optymalizacja ma zbalansować ryzyko i potencjalny zysk.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który model jest klasycznym podejściem do optymalizacji?",
      answers: [
        "Mean-Variance Markowitza",
        "Model 1% ryzyka",
        "Teoria Elliott Waves",
        "Model ADR",
      ],
      correctIndex: 0,
      explanation:
        "Markowitz zaproponował matematyczny model efektywnej granicy.",
    },

    {
      id: 3,
      type: "radio",
      text: "Efektywna granica portfela to:",
      answers: [
        "Zbiór portfeli o najlepszym stosunku ryzyko–zwrot",
        "Lista spółek do zakupu",
        "Maksymalna dźwignia",
        "Portfel z jednym aktywem",
      ],
      correctIndex: 0,
      explanation: "Granica efektywna to optimum matematyczne portfela.",
    },

    {
      id: 4,
      type: "radio",
      text: "Zbyt wysoka optymalizacja może prowadzić do:",
      answers: [
        "Przeuczenia portfela (overfitting)",
        "Zwiększenia dywersyfikacji",
        "Zmniejszenia korelacji",
        "Zmniejszenia ryzyka systemowego",
      ],
      correctIndex: 0,
      explanation:
        "Tak jak w AI - dopasowanie do danych historycznych nie gwarantuje przyszłych wyników.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kluczowym elementem optymalizacji jest:",
      answers: [
        "Zrozumienie zmienności i korelacji aktywów",
        "Znajomość każdej spółki",
        "Prognozowanie polityczne",
        "Prowadzenie wielu rachunków maklerskich",
      ],
      correctIndex: 0,
      explanation: "Ryzyko portfela wynika z dynamiki jego składowych.",
    },
  ],
};
