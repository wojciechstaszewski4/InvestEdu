// src/data/quizzes/module3-course2-chapter4.js

export default {
  id: "m3c2ch4",
  title: "Metoda DCF – przepływy pieniężne i dyskonto",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Metoda DCF opiera się na:",
      answers: [
        "Prognozowaniu przyszłych przepływów pieniężnych",
        "Porównaniu z innymi firmami",
        "Aktualnych cenach aktywów",
        "Danych historycznych bez prognoz",
      ],
      correctIndex: 0,
      explanation: "DCF bazuje na przyszłych cash flow.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza stopa dyskontowa?",
      answers: [
        "Stopę zwrotu wymaganą przez inwestorów",
        "Oczekiwaną inflację",
        "Wartość księgową aktywów",
        "Średnią marżę operacyjną",
      ],
      correctIndex: 0,
      explanation: "Stopa dyskontowa odzwierciedla ryzyko i koszt kapitału.",
    },

    {
      id: 3,
      type: "radio",
      text: "WACC to:",
      answers: [
        "Średni ważony koszt kapitału",
        "Wartość księgowa aktywów",
        "Zysk operacyjny firmy",
        "Kapitał własny netto",
      ],
      correctIndex: 0,
      explanation: "WACC łączy koszt długu i kapitału własnego.",
    },

    {
      id: 4,
      type: "radio",
      text: "Jeśli stopa dyskontowa rośnie, wartość wyceny:",
      answers: ["Spada", "Rośnie", "Pozostaje stała", "Jest nieokreślona"],
      correctIndex: 0,
      explanation:
        "Wyższy koszt kapitału oznacza niższą obecną wartość przyszłych przepływów.",
    },

    {
      id: 5,
      type: "radio",
      text: "W DCF najbardziej wrażliwy element wyceny to:",
      answers: [
        "Wartość rezydualna",
        "Koszt wynagrodzeń",
        "Zadłużenie krótkoterminowe",
        "Wartość zapasów",
      ],
      correctIndex: 0,
      explanation:
        "Wartość rezydualna (TV) często stanowi ponad połowę wyceny DCF.",
    },
  ],
};
