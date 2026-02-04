// src/data/quizzes/module3-course3-chapter5.js

export default {
  id: "m3c3ch5",
  title: "Analiza zadłużenia i ryzyka finansowego",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Wskaźnik Debt/Equity mierzy:",
      answers: [
        "Relację długu do kapitału własnego",
        "Marżę brutto",
        "Wartość księgową",
        "Rentowność sprzedaży",
      ],
      correctIndex: 0,
      explanation: "Pokazuje, jak spółka finansuje się długiem vs kapitałem.",
    },

    {
      id: 2,
      type: "radio",
      text: "Wysokie zadłużenie oznacza:",
      answers: [
        "Wyższe ryzyko finansowe",
        "Niższe ryzyko",
        "Wyższą płynność",
        "Wyższe marże",
      ],
      correctIndex: 0,
      explanation: "Większy dług = większe ryzyko przy spadku zysków.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który wskaźnik najlepiej pokazuje zdolność spółki do obsługi zadłużenia?",
      answers: ["EBITDA / odsetki", "P/E", "ROE", "Płynność bieżąca"],
      correctIndex: 0,
      explanation: "Pokazuje, ile razy EBITDA pokrywa koszty odsetek.",
    },

    {
      id: 4,
      type: "radio",
      text: "Wysoka dźwignia finansowa:",
      answers: [
        "Zwiększa potencjalny zysk i ryzyko",
        "Zmniejsza ryzyko",
        "Nie ma wpływu na wyniki",
        "Zwiększa płynność gotówkową",
      ],
      correctIndex: 0,
      explanation: "Leverage działa w dwie strony – wzmacnia wzrosty i spadki.",
    },

    {
      id: 5,
      type: "radio",
      text: "Niska płynność bieżąca oznacza:",
      answers: [
        "Trudności z płatnościami krótkoterminowymi",
        "Wysoką wartość rynkową",
        "Silną pozycję finansową",
        "Wysokie marże",
      ],
      correctIndex: 0,
      explanation: "Może oznaczać problemy z regulowaniem zobowiązań.",
    },
  ],
};
