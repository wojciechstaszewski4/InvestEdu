// src/data/quizzes/module1-course2-chapter5.js

export default {
  id: "m1c2ch5",
  title: "Akcje giełdowe",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Akcja jest:",
      answers: [
        "Udziałem własnościowym w firmie",
        "Prawem do stałej wypłaty",
        "Umową pożyczki",
        "Przychodem firmy",
      ],
      correctIndex: 0,
      explanation:
        "Kiedy kupujesz akcję - stajesz się współwłaścicielem spółki.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co jest typowym źródłem zysku z akcji?",
      answers: [
        "Wzrost ceny oraz dywidendy",
        "Gwarantowana wypłata odsetek",
        "Stały kupon roczny",
        "Brak zysku - tylko spekulacja",
      ],
      correctIndex: 0,
      explanation:
        "Akcje dają zysk z dwóch źródeł: wzrostu ceny i wypłaty dywidendy.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza pojęcie wolumen?",
      answers: [
        "Liczbę akcji, którymi handlowano",
        "Wielkość firmy",
        "Liczbę pracowników",
        "Sumę zadłużenia spółki",
      ],
      correctIndex: 0,
      explanation: "Wolumen pokazuje aktywność inwestorów na rynku.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie giełdowe z jego znaczeniem.",
      pairs: [
        {
          left: "Akcjonariusz",
          right: "Współwłaściciel spółki",
        },
        {
          left: "Dywidenda",
          right: "Część zysku wypłacana inwestorom",
        },
        {
          left: "Kurs akcji",
          right: "Aktualna cena jednej akcji",
        },
        {
          left: "Wolumen",
          right: "Liczba akcji w obrocie",
        },
      ],
      explanation:
        "Podstawowe pojęcia pomagają zrozumieć mechanikę rynku akcji.",
    },

    {
      id: 5,
      type: "radio",
      text: "Dlaczego akcje są uznawane za ryzykowne?",
      answers: [
        "Ich cena może się dynamicznie zmieniać",
        "Są gwarantowane przez państwo",
        "Mają zawsze stałą wartość",
        "Nie można ich sprzedać przed terminem",
      ],
      correctIndex: 0,
      explanation: "Ceny akcji reagują na wyniki spółek i sytuację rynkową.",
    },
  ],
};
