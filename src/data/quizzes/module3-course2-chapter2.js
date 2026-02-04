// src/data/quizzes/module3-course2-chapter2.js

export default {
  id: "m3c2ch2",
  title: "Mnożniki P/E, P/BV, EV/EBITDA",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co mierzy wskaźnik P/E?",
      answers: [
        "Jak wiele inwestor płaci za 1 zł zysku",
        "Jak wiele płaci za aktywa",
        "Wydajność produkcji",
        "Płynność finansową",
      ],
      correctIndex: 0,
      explanation: "P/E to cena akcji podzielona przez zysk na akcję.",
    },

    {
      id: 2,
      type: "radio",
      text: "Wysoki P/E może oznaczać:",
      answers: [
        "Wysokie oczekiwania inwestorów",
        "Niską jakość aktywów",
        "Poważne zadłużenie",
        "Słabą płynność spółki",
      ],
      correctIndex: 0,
      explanation: "Inwestorzy przewidują szybki wzrost wyników.",
    },

    {
      id: 3,
      type: "radio",
      text: "EV/EBITDA to wskaźnik:",
      answers: [
        "Rentowności operacyjnej firmy",
        "Płynności spółki",
        "Zadłużenia krótkoterminowego",
        "Wydajności kapitału pracującego",
      ],
      correctIndex: 0,
      explanation: "Pokazuje relację wartości firmy do generowanej EBITDA.",
    },

    {
      id: 4,
      type: "radio",
      text: "P/BV porównuje cenę rynkową z:",
      answers: [
        "Wartością księgową",
        "EBITDA",
        "Wolumenem obrotu",
        "Zyskiem netto",
      ],
      correctIndex: 0,
      explanation: "P/BV = Price / Book Value.",
    },

    {
      id: 5,
      type: "radio",
      text: "Niski EV/EBITDA sugeruje, że spółka może być:",
      answers: [
        "Niedowartościowana",
        "Zadłużona ponad normę",
        "Wysoko ryzykowna",
        "Ma niską płynność aktywów",
      ],
      correctIndex: 0,
      explanation: "Może wskazywać atrakcyjną wycenę.",
    },
  ],
};
