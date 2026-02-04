// src/data/quizzes/module1-course1-chapter5.js

export default {
  id: "m1c1ch5",
  title: "Inflacja i jej wpływ",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Inflacja to:",
      answers: [
        "Wzrost ogólnego poziomu cen",
        "Spadek cen wszystkich aktywów",
        "Wzrost podatków",
        "Zysk inwestora",
      ],
      correctIndex: 0,
      explanation: "Inflacja oznacza wzrost średnich cen w gospodarce.",
    },

    {
      id: 2,
      type: "radio",
      text: "Wysoka inflacja:",
      answers: [
        "Obniża realną wartość pieniędzy",
        "Zwiększa siłę nabywczą",
        "Podnosi realne zyski z lokat",
        "Nie ma wpływu na inwestowanie",
      ],
      correctIndex: 0,
      explanation:
        "Przy inflacji pieniądz traci siłę nabywczą - realna wartość maleje.",
    },

    {
      id: 3,
      type: "radio",
      text: "Realny zwrot z inwestycji przy inflacji 10% i zysku 7% to:",
      answers: ["-3%", "+3%", "+10%", "0%"],
      correctIndex: 0,
      explanation: "Realna stopa = nominalna − inflacja = 7% − 10% = -3%.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie z jego opisem.",
      pairs: [
        {
          left: "Inflacja",
          right: "Spadek siły nabywczej pieniądza",
        },
        {
          left: "Stopa nominalna",
          right: "Zwrot bez uwzględniania inflacji",
        },
        {
          left: "Stopa realna",
          right: "Zwrot pomniejszony o inflację",
        },
        {
          left: "Hedging inflacyjny",
          right: "Ochrona kapitału przed wzrostem cen",
        },
      ],
      explanation:
        "Zrozumienie tych pojęć pomaga ocenić realną wartość inwestycji.",
    },

    {
      id: 5,
      type: "radio",
      text: "Inflacja najbardziej szkodzi:",
      answers: ["Gotówce trzymanej na koncie", "Akcjom", "ETF-om", "Złotu"],
      correctIndex: 0,
      explanation: "Gotówka realnie traci siłę nabywczą każdego dnia.",
    },
  ],
};
