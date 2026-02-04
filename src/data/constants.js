// src/data/constants.js

// -------------------------------------------------
// Globalne stałe aplikacji - XP & poziomy trudności
// -------------------------------------------------

// XP za quiz zależne od trudności kursu
export const DIFFICULTY_XP_MULTIPLIER = {
  łatwy: 4,
  średni: 7,
  trudny: 10,
};

// Minimalne i maksymalne XP za quiz
export const MIN_QUIZ_XP = 5;
export const MAX_QUIZ_XP = 100;

// Statusy kursów / lekcji
export const COURSE_STATUS = {
  NOT_STARTED: "Nierozpoczęty",
  IN_PROGRESS: "W trakcie",
  COMPLETED: "Ukończony",
};

// Poziomy trudności kursów
export const DIFFICULTY_LABELS = {
  łatwy: "Łatwy",
  średni: "Średni",
  trudny: "Trudny",
};

// Dozwolone poziomy trudności kursów
export const DIFFICULTIES = ["łatwy", "średni", "trudny"];
