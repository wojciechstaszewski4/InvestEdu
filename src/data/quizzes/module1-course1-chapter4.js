// src/data/quizzes/module1-course1-chapter4.js

export default {
  id: "m1c1ch4",
  title: "Stopa zwrotu i procent składany",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest CAGR?",
      answers: [
        "Średnioroczną stopą zwrotu uwzględniającą procent składany",
        "Jednoroczną zyskiem brutto",
        "Wskaźnikiem inflacji",
        "Miary ryzyka",
      ],
      correctIndex: 0,
      explanation:
        "CAGR uśrednia zwrot w czasie, uwzględniając efekt procentu składanego.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który przykład najlepiej pokazuje procent składany?",
      answers: [
        "Zyski z inwestycji są reinwestowane i również generują zysk",
        "Inflacja powoduje spadek siły nabywczej",
        "Jednorazowa dywidenda",
        "Stała wysokość podatków",
      ],
      correctIndex: 0,
      explanation:
        "Procent składany działa, gdy zyski same zaczynają generować kolejne zyski.",
    },

    {
      id: 3,
      type: "matching",
      text: "Połącz pojęcie z jego znaczeniem.",
      pairs: [
        {
          left: "CAGR",
          right: "Średnioroczna stopa zwrotu z procentem składanym",
        },
        {
          left: "Procent składany",
          right: "Zysk generowany także od wcześniejszych zysków",
        },
        {
          left: "Stopa realna",
          right: "Stopa zwrotu pomniejszona o inflację",
        },
        {
          left: "Reguła 72",
          right: "Szybkie oszacowanie czasu podwojenia kapitału",
        },
      ],
      explanation:
        "Te pojęcia pomagają zrozumieć długoterminowe efekty inwestowania.",
    },

    {
      id: 4,
      type: "radio",
      text: "Realna stopa zwrotu to:",
      answers: [
        "Stopa zwrotu pomniejszona o inflację",
        "Zwrot przed opodatkowaniem",
        "Zwrot z obligacji",
        "Stopa procentowa w banku",
      ],
      correctIndex: 0,
      explanation: "Realny zwrot uwzględnia spadek siły nabywczej pieniądza.",
    },

    {
      id: 5,
      type: "radio",
      text: "Przybliżona reguła 72 służy do:",
      answers: [
        "Szacowania czasu podwojenia kapitału",
        "Wyliczania VAT",
        "Oceny dywidend",
        "Oceniania spreadu",
      ],
      correctIndex: 0,
      explanation:
        "Dzielisz 72 przez procentowy zwrot roczny → otrzymujesz czas podwojenia kapitału.",
    },
  ],
};
