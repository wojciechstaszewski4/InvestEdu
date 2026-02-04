// src/data/quizzes/module1-course2-chapter1.js

export default {
  id: "m1c2ch1",
  title: "Obligacje skarbowe i korporacyjne",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co otrzymuje inwestor kupując obligację?",
      answers: [
        "Prawo do otrzymania kapitału i odsetek w przyszłości",
        "Udziały własnościowe w firmie",
        "Gwarancję stałego zysku bez ryzyka",
        "Możliwość głosowania jak akcjonariusz",
      ],
      correctIndex: 0,
      explanation:
        "Obligacja jest formą pożyczki – emitent oddaje kapitał oraz wypłaca odsetki.",
    },

    {
      id: 2,
      type: "radio",
      text: "Które obligacje są najbezpieczniejsze?",
      answers: [
        "Skarbowe",
        "Korporacyjne wysokiego ryzyka",
        "Obligacje windykacyjne",
        "Listy zastawne",
      ],
      correctIndex: 0,
      explanation:
        "Obligacje skarbowe mają najniższe ryzyko, bo są zabezpieczone budżetem państwa.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza termin „kupon” obligacji?",
      answers: [
        "Odsetki wypłacane inwestorowi",
        "Wartość nominalną",
        "Termin wykupu",
        "Koszt zakupu",
      ],
      correctIndex: 0,
      explanation:
        "Kupon to procentowy zwrot wypłacany posiadaczowi obligacji.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie związane z obligacjami z jego znaczeniem.",
      pairs: [
        {
          left: "Obligacja skarbowa",
          right: "Dług emitowany przez państwo",
        },
        {
          left: "Obligacja korporacyjna",
          right: "Dług emitowany przez firmę",
        },
        {
          left: "Kupon",
          right: "Odsetki wypłacane inwestorowi",
        },
        {
          left: "Termin wykupu",
          right: "Moment zwrotu kapitału",
        },
      ],
      explanation:
        "Podstawowe pojęcia obligacyjne pozwalają zrozumieć konstrukcję długu.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co wpływa na zmianę ceny obligacji na rynku wtórnym?",
      answers: [
        "Zmiany stóp procentowych",
        "Liczba pracowników emitenta",
        "Popyt na produkty firmy",
        "Wielkość rynku akcji",
      ],
      correctIndex: 0,
      explanation:
        "Gdy stopy rosną – obligacje tracą na wartości, gdy spadają – zyskują.",
    },

    {
      id: 6,
      type: "radio",
      text: "Który typ obligacji chroni realną wartość kapitału przed inflacją?",
      answers: [
        "Obligacje indeksowane inflacją",
        "Obligacje zerokuponowe",
        "Obligacje korporacyjne",
        "Obligacje jednoroczne",
      ],
      correctIndex: 0,
      explanation:
        "Odsetki rosną razem z inflacją (np. polskie obligacje 10-letnie EDO).",
    },
  ],
};
