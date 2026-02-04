// src/data/quizzes/module5-course1-chapter2.js

export default {
  id: "m5c1ch2",
  title: "Model 1–2% ryzyka",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Na czym polega model 1–2% ryzyka?",
      answers: [
        "Ryzykowaniu maksymalnie 1–2% kapitału na jedną transakcję",
        "Ryzykowaniu 1–2% wartości rynku",
        "Ryzykowaniu tylko 1–2 transakcji dziennie",
        "Ryzykowaniu tylko na poziomie 1–2 pipsów",
      ],
      correctIndex: 0,
      explanation:
        "Model zakłada ograniczenie maksymalnej straty w pojedynczej transakcji do 1–2% całego portfela.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co się stanie, jeśli będziesz ryzykować 10% kapitału na transakcję?",
      answers: [
        "Kilka strat może szybko zniszczyć portfel",
        "Zyski będą większe",
        "Ryzyko portfela spadnie",
        "Model zacznie działać lepiej",
      ],
      correctIndex: 0,
      explanation:
        "Zbyt wysokie ryzyko jednostkowe prowadzi do gwałtownych obsunięć kapitału.",
    },

    {
      id: 3,
      type: "radio",
      text: "Model 1–2% jest szczególnie skuteczny dla:",
      answers: [
        "Początkujących i średniozaawansowanych",
        "Tylko profesjonalnych traderów",
        "Tylko traderów wysokiej częstotliwości",
        "Wyłącznie inwestorów długoterminowych",
      ],
      correctIndex: 0,
      explanation:
        "To uniwersalny model, który pomaga kontrolować ryzyko niezależnie od doświadczenia.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co jest kluczem w modelu 1–2%?",
      answers: [
        "Stałość, konsekwencja i brak odstępstw",
        "Ciągłe zwiększanie ryzyka",
        "Zmienna wartość ryzyka zależna od emocji",
        "Losowe dobieranie poziomu SL",
      ],
      correctIndex: 0,
      explanation:
        "Model działa tylko wtedy, gdy jest stosowany konsekwentnie i bez wyjątków.",
    },

    {
      id: 5,
      type: "radio",
      text: "Jakie jest najważniejsze założenie modelu?",
      answers: [
        "Ochrona kapitału przed zbyt dużymi obsunięciami",
        "Gwarantowanie zysków",
        "Maksymalizowanie liczby transakcji",
        "Minimalizowanie SL",
      ],
      correctIndex: 0,
      explanation:
        "Celem modelu jest długoterminowe przetrwanie i stabilny rozwój portfela.",
    },
  ],
};
