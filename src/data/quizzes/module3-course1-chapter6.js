// src/data/quizzes/module3-course1-chapter6.js

export default {
  id: "m3c1ch6",
  title: "Zarządzanie kapitałem i finansowaniem",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co oznacza dźwignia finansowa?",
      answers: [
        "Wykorzystanie długu do zwiększenia potencjalnych zysków",
        "Sprzedaż aktywów trwałych",
        "Zastąpienie kapitału własnego zapasami",
        "Zmniejszenie marży",
      ],
      correctIndex: 0,
      explanation: "Dźwignia zwiększa zarówno możliwe zyski, jak i ryzyko.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który rodzaj finansowania jest NAJTAŃSZY w długim terminie?",
      answers: [
        "Kapitał własny",
        "Kredyt bankowy",
        "Emisja obligacji",
        "Leasing",
      ],
      correctIndex: 1,
      explanation:
        "Kredyt bankowy jest zwykle najtańszym źródłem finansowania.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wysokie zobowiązania krótkoterminowe mogą prowadzić do:",
      answers: [
        "Ryzyka utraty płynności",
        "Wzrostu ROE",
        "Wzrostu marży brutto",
        "Zmniejszenia amortyzacji",
      ],
      correctIndex: 0,
      explanation: "Płynność to zdolność do regulowania bieżących zobowiązań.",
    },

    {
      id: 4,
      type: "radio",
      text: "Kapitał własny obejmuje:",
      answers: [
        "Zysk zatrzymany i kapitał zakładowy",
        "Kredyty długoterminowe",
        "Zobowiązania handlowe",
        "Środki pieniężne",
      ],
      correctIndex: 0,
      explanation:
        "Kapitał własny jest podstawą finansowania przedsiębiorstwa.",
    },

    {
      id: 5,
      type: "radio",
      text: "Optymalna struktura kapitału to taka, która:",
      answers: [
        "Minimalizuje koszt kapitału i ryzyko",
        "Zawiera jak najwięcej długu",
        "Opiera się wyłącznie na kapitale własnym",
        "Nie zmienia się w czasie",
      ],
      correctIndex: 0,
      explanation:
        "Celem jest minimalizacja WACC przy kontrolowaniu ryzyka zadłużenia.",
    },
  ],
};
