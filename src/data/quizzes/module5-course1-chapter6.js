// src/data/quizzes/module5-course1-chapter6.js

export default {
  id: "m5c1ch6",
  title: "Kontrola strat i ryzyko ruiny",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest ryzyko ruiny kapitałowej?",
      answers: [
        "Ryzykiem utraty całego kapitału przez serię strat",
        "Ryzykiem braku możliwości otwarcia pozycji",
        "Ryzykiem technicznym platformy",
        "Ryzykiem walutowym",
      ],
      correctIndex: 0,
      explanation:
        "Ryzyko ruiny to prawdopodobieństwo całkowitego wyzerowania kapitału.",
    },

    {
      id: 2,
      type: "radio",
      text: "Jaki czynnik zwiększa ryzyko ruiny?",
      answers: [
        "Zbyt wysokie ryzyko jednostkowe",
        "Mała zmienność rynku",
        "Duża liczba małych pozycji",
        "Brak dźwigni",
      ],
      correctIndex: 0,
      explanation:
        "Ryzykowanie 5–10% kapitału na transakcję szybko prowadzi do ruiny.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co pomaga minimalizować ryzyko ruiny?",
      answers: [
        "Stałe ryzyko 1–2% na transakcję",
        "Losowe wybieranie pozycji",
        "Ignorowanie SL",
        "Stałe zwiększanie ekspozycji",
      ],
      correctIndex: 0,
      explanation:
        "Małe ryzyko jednostkowe jest najskuteczniejszym zabezpieczeniem.",
    },

    {
      id: 4,
      type: "radio",
      text: "Seria strat jest niebezpieczna szczególnie gdy:",
      answers: [
        "Pozycje są zbyt duże",
        "Pozycje są małe",
        "Rynek jest w konsolidacji",
        "Inwestor nie używa wskaźników",
      ],
      correctIndex: 0,
      explanation: "Seria strat przy dużych pozycjach szybko niszczy portfel.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co jest kluczowe przy kontroli strat?",
      answers: [
        "Dyscyplina i trzymanie się SL",
        "Ignorowanie planów",
        "Zwiększanie pozycji po stracie",
        "Handel bez limitów",
      ],
      correctIndex: 0,
      explanation:
        "Dyscyplina w cięciu strat to fundament profesjonalnego zarządzania ryzykiem.",
    },
  ],
};
