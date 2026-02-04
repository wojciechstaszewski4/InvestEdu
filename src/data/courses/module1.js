// src/data/courses/module1.js

// -------------
// ŹRÓDŁA WIEDZY
// -------------

// Moduł 1 - Podstawy inwestowania
//    Bodie, Kane, Marcus - "Investments"
//    Malkiel - "A Random Walk Down Wall Street"
//    Bernstein - "The Four Pillars of Investing"

export const module1Courses = [
  {
    id: 1,
    moduleId: 1,
    name: "Wprowadzenie do rynków finansowych",
    desc: "Czym jest rynek? Aktywa, inwestorzy i infrastruktura.",
    lessons: 5,
    difficulty: "łatwy",
    etaMin: 60,
  },

  {
    id: 2,
    moduleId: 1,
    name: "Instrumenty finansowe",
    desc: "Akcje, obligacje, ETF-y, surowce - podstawy działania.",
    lessons: 5,
    difficulty: "łatwy",
    etaMin: 75,
  },

  {
    id: 3,
    moduleId: 1,
    name: "Ryzyko i portfel inwestora",
    desc: "Zmienność, dywersyfikacja, korelacje, budowa portfela.",
    lessons: 6,
    difficulty: "średni",
    etaMin: 90,
  },
];
