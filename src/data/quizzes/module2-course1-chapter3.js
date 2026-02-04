// src/data/quizzes/module2-course1-chapter3.js

export default {
  id: "m2c1ch3",
  title: "Struktura rynku - HH, HL, LH, LL",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co oznacza HH (higher high)?",
      answers: [
        "Nowy szczyt wyżej niż poprzedni",
        "Minimalny poziom ceny",
        "Strefę podaży",
        "Wolumen rosnący",
      ],
      correctIndex: 0,
      explanation: "HH to wyższy szczyt - kluczowy element trendu wzrostowego.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który układ sygnalizuje trend spadkowy?",
      answers: ["LH i LL", "HH i HL", "HH i LL", "HL i LH"],
      correctIndex: 0,
      explanation: "Lower High + Lower Low to definicja trendu spadkowego.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza zmiana HL → LL?",
      answers: [
        "Pogorszenie struktury rynku i możliwe odwrócenie trendu",
        "Silne przyspieszenie trendu wzrostowego",
        "Powstanie formacji trójkąta",
        "Brak jakiegokolwiek sygnału",
      ],
      correctIndex: 0,
      explanation: "Powstanie LL to pierwszy sygnał zmiany charakteru rynku.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który element potwierdza zmianę trendu?",
      answers: [
        "Złamanie kluczowego LH lub HH",
        "Duża pojedyncza świeca",
        "Spadek wolumenu",
        "Przecięcie dwóch wskaźników",
      ],
      correctIndex: 0,
      explanation:
        "Zmiana struktury (np. wybicie LH w trendzie wzrostowym) jest jednoznacznym sygnałem.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kiedy rynek tworzy konsolidację?",
      answers: [
        "Gdy nie występują nowe HH ani LL",
        "Gdy cena silnie przyspiesza",
        "Gdy powstają bardzo długie świece",
        "Gdy średnie kroczące rosną",
      ],
      correctIndex: 0,
      explanation:
        "Brak nowych szczytów/dołków = brak kierunku = konsolidacja.",
    },
  ],
};
