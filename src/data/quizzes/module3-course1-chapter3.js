// src/data/quizzes/module3-course1-chapter3.js

export default {
  id: "m3c1ch3",
  title: "Rachunek zysków i strat",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest pierwszą pozycją rachunku zysków i strat?",
      answers: [
        "Przychody ze sprzedaży",
        "Zysk brutto",
        "Koszty operacyjne",
        "Amortyzacja",
      ],
      correctIndex: 0,
      explanation:
        "RZiS zaczyna się od przychodów ze sprzedaży produktów i usług.",
    },

    {
      id: 2,
      type: "radio",
      text: "Zysk brutto to:",
      answers: [
        "Przychody minus koszty własne sprzedaży",
        "Zysk netto plus podatki",
        "Przychody minus wszystkie wydatki firmy",
        "Przepływy pieniężne netto",
      ],
      correctIndex: 0,
      explanation:
        "Zysk brutto odzwierciedla rentowność głównej działalności firmy.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co NIE jest kosztem operacyjnym?",
      answers: [
        "Wynagrodzenia pracowników",
        "Amortyzacja",
        "Koszty marketingu",
        "Odsetki od kredytu",
      ],
      correctIndex: 3,
      explanation: "Odsetki są kosztem finansowym, a nie operacyjnym.",
    },

    {
      id: 4,
      type: "radio",
      text: "Zysk netto to:",
      answers: [
        "Zysk po odliczeniu podatków i kosztów finansowych",
        "Przychody minus koszty operacyjne",
        "Zysk brutto minus podatki",
        "Przychody minus amortyzacja",
      ],
      correctIndex: 0,
      explanation: "Zysk netto to finalny wynik finansowy przedsiębiorstwa.",
    },

    {
      id: 5,
      type: "radio",
      text: "Marża netto to:",
      answers: [
        "Zysk netto / przychody",
        "Zysk brutto / koszty sprzedaży",
        "Koszty operacyjne / przychody",
        "Zysk netto × 100",
      ],
      correctIndex: 0,
      explanation:
        "Marża netto pokazuje, ile firma zatrzymuje z każdej złotówki przychodu.",
    },
  ],
};
