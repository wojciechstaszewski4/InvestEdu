// src/data/quizzes/module3-course1-chapter5.js

export default {
  id: "m3c1ch5",
  title: "Analiza rentowności – ROA, ROE, marże",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "ROA mierzy:",
      answers: [
        "Zyskowność aktywów firmy",
        "Rentowność kapitału własnego",
        "Płynność operacyjną",
        "Zadłużenie",
      ],
      correctIndex: 0,
      explanation: "ROA = zysk netto / aktywa ogółem.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza wysoka marża brutto?",
      answers: [
        "Firma efektywnie zarządza kosztami bezpośrednimi",
        "Firma ma mało zapasów",
        "Firma ma duże zadłużenie",
        "Firma nie inwestuje",
      ],
      correctIndex: 0,
      explanation: "Marża brutto odnosi się do rentowności sprzedaży.",
    },

    {
      id: 3,
      type: "radio",
      text: "ROE pokazuje:",
      answers: [
        "Zwrot dla właścicieli firmy",
        "Zwrot z aktywów",
        "Koszt finansowania",
        "Marżę operacyjną",
      ],
      correctIndex: 0,
      explanation: "ROE = zysk netto / kapitał własny.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który czynnik może sztucznie podnosić ROE?",
      answers: [
        "Wysokie zadłużenie",
        "Wysokie zapasy",
        "Wysoka amortyzacja",
        "Wysoka marża brutto",
      ],
      correctIndex: 0,
      explanation: "Więcej długu oznacza niższy kapitał własny → ROE rośnie.",
    },

    {
      id: 5,
      type: "radio",
      text: "Wzór na marżę operacyjną to:",
      answers: [
        "Zysk operacyjny / przychody",
        "Zysk netto / przychody",
        "Zysk brutto / przychody",
        "Przychody – koszty operacyjne",
      ],
      correctIndex: 0,
      explanation:
        "Marża operacyjna pokazuje efektywność głównej działalności firmy.",
    },
  ],
};
