// src/data/quizzes/module2-course1-chapter5.js

export default {
  id: "m2c1ch5",
  title: "Formacje techniczne",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest formacja głowa z ramionami (RGR)?",
      answers: [
        "Formacją odwrócenia trendu",
        "Formacją kontynuacji",
        "Konsolidacją trendową",
        "Układem wolumenowym",
      ],
      correctIndex: 0,
      explanation: "RGR najczęściej sygnalizuje koniec trendu wzrostowego.",
    },

    {
      id: 2,
      type: "radio",
      text: "Flaga należy do:",
      answers: [
        "Formacji kontynuacji",
        "Formacji odwrócenia",
        "Wskaźników",
        "Formacji świecowych",
      ],
      correctIndex: 0,
      explanation:
        "Flaga to krótka korekta w trendzie i stanowi formację kontynuacji.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co sygnalizuje trójkąt symetryczny?",
      answers: [
        "Zmniejszającą się zmienność i zbliżające wybicie",
        "Zmianę trendu na wzrostowy",
        "Brak znaczenia",
        "Formację świecową",
      ],
      correctIndex: 0,
      explanation:
        "Trójkąt zwęża ruch ceny - zwykle kończy się dużym wybiciem.",
    },

    {
      id: 4,
      type: "radio",
      text: "Która formacja ma najczęściej fałszywe wybicia?",
      answers: ["Trójkąt zniżkujący", "RGR", "Flaga", "Podwójny szczyt"],
      correctIndex: 0,
      explanation:
        "Trójkąty zniżkujące często „udają” wybicia przed właściwym ruchem.",
    },

    {
      id: 5,
      type: "radio",
      text: "Podwójne dno jest formacją:",
      answers: [
        "Odwrócenia trendu spadkowego",
        "Kontynuacji trendu",
        "Neutralną",
        "Świecową",
      ],
      correctIndex: 0,
      explanation: "Podwójne dno zwykle poprzedza ruch wzrostowy.",
    },
  ],
};
