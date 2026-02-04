// src/data/quizzes/module3-course1-chapter2.js

export default {
  id: "m3c1ch2",
  title: "Bilans – aktywa i pasywa",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co przedstawia bilans?",
      answers: [
        "Stan majątku i źródeł jego finansowania",
        "Wynik finansowy firmy",
        "Plan sprzedażowy na przyszły rok",
        "Listę wszystkich pracowników",
      ],
      correctIndex: 0,
      explanation:
        "Bilans pokazuje, co firma posiada (aktywa) oraz skąd ma środki (pasywa).",
    },

    {
      id: 2,
      type: "radio",
      text: "Aktywa trwałe to:",
      answers: [
        "Składniki majątku użytkowane dłużej niż rok",
        "Środki pieniężne",
        "Zobowiązania krótkoterminowe",
        "Towary przeznaczone na sprzedaż",
      ],
      correctIndex: 0,
      explanation:
        "Aktywa trwałe obejmują m.in. nieruchomości, maszyny, wartości niematerialne.",
    },

    {
      id: 3,
      type: "radio",
      text: "Kapitał własny to:",
      answers: [
        "Środki wniesione przez właścicieli oraz zatrzymane zyski",
        "Wyłącznie środki z kredytów",
        "Przychody ze sprzedaży",
        "Zobowiązania podatkowe firmy",
      ],
      correctIndex: 0,
      explanation:
        "Kapitał własny obejmuje m.in. kapitał zakładowy i zyski zatrzymane.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który element jest aktywem obrotowym?",
      answers: [
        "Zapas towarów",
        "Budynek biurowy",
        "Patent",
        "Kapitał zakładowy",
      ],
      correctIndex: 0,
      explanation: "Aktywa obrotowe to składniki majątku o dużej płynności.",
    },

    {
      id: 5,
      type: "radio",
      text: "Równanie bilansowe to:",
      answers: [
        "Aktywa = Pasywa",
        "Przychody = Koszty",
        "Zysk = Przychody - Koszty",
        "Przepływy operacyjne + inwestycyjne = finansowe",
      ],
      correctIndex: 0,
      explanation: "Jest to fundamentalna zależność rachunkowości.",
    },
  ],
};
