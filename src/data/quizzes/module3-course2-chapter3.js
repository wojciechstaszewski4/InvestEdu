// src/data/quizzes/module3-course2-chapter3.js

export default {
  id: "m3c2ch3",
  title: "EBITDA, zyski i marże",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "EBITDA to zysk operacyjny:",
      answers: [
        "Przed potrąceniem amortyzacji i podatków",
        "Po podatkach",
        "Po amortyzacji",
        "Tylko z działalności finansowej",
      ],
      correctIndex: 0,
      explanation: "EBITDA = EBIT + amortyzacja.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza wysoka marża operacyjna?",
      answers: [
        "Firma efektywnie kontroluje koszty operacyjne",
        "Firma jest mocno zadłużona",
        "Firma nie płaci dywidend",
        "Firma ma niskie przychody",
      ],
      correctIndex: 0,
      explanation: "Wysoka marża = dobra efektywność operacyjna.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który wskaźnik najlepiej pokazuje rentowność sprzedaży?",
      answers: ["Marża netto", "Zadłużenie ogólne", "P/E", "ROE"],
      correctIndex: 0,
      explanation: "Marża netto = zysk netto / przychody.",
    },

    {
      id: 4,
      type: "radio",
      text: "EBIT to:",
      answers: [
        "Zysk operacyjny przed odsetkami i podatkami",
        "Cash flow operacyjny",
        "Zysk po amortyzacji i podatkach",
        "Zysk brutto minus koszty finansowe",
      ],
      correctIndex: 0,
      explanation: "EBIT to zysk operacyjny przed kosztami finansowymi.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co wpływa na wysokość EBITDA?",
      answers: [
        "Marża operacyjna",
        "Kapitał zakładowy",
        "Wartość zapasów",
        "Zadłużenie właścicieli",
      ],
      correctIndex: 0,
      explanation: "EBITDA jest funkcją rentowności operacyjnej.",
    },
  ],
};
