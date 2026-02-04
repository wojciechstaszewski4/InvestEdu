// src/data/quizzes/module3-course2-chapter5.js

export default {
  id: "m3c2ch5",
  title: "Wartość księgowa i struktura aktywów",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Wartość księgowa kapitału własnego to:",
      answers: [
        "Aktywa ogółem minus zobowiązania",
        "Zysk netto minus dywidenda",
        "Środki pieniężne",
        "Kapitał zakładowy w cenie nominalnej",
      ],
      correctIndex: 0,
      explanation: "Book value = equity = assets − liabilities.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który składnik NIE jest aktywem trwałym?",
      answers: ["Zapas towarów", "Maszyny", "Budynek", "Licencje"],
      correctIndex: 0,
      explanation: "Zapasy to aktywa obrotowe.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wysoki udział aktywów trwałych oznacza, że firma:",
      answers: [
        "Jest kapitałochłonna",
        "Ma duże zapasy",
        "Nie generuje zysku",
        "Ma wysoki P/E",
      ],
      correctIndex: 0,
      explanation: "Firmy przemysłowe są z natury kapitałochłonne.",
    },

    {
      id: 4,
      type: "radio",
      text: "P/BV < 1 może sugerować:",
      answers: [
        "Niedowartościowanie spółki",
        "Bardzo wysoką wycenę",
        "Skrajne ryzyko finansowe",
        "Wysokie marże",
      ],
      correctIndex: 0,
      explanation: "Spółka jest wyceniana poniżej wartości księgowej.",
    },

    {
      id: 5,
      type: "radio",
      text: "Który element zwiększa wartość księgową?",
      answers: [
        "Zatrzymanie zysku netto",
        "Wypłata dywidendy",
        "Wzrost długu",
        "Spadek aktywów obrotowych",
      ],
      correctIndex: 0,
      explanation: "Zatrzymany zysk powiększa kapitał własny.",
    },
  ],
};
