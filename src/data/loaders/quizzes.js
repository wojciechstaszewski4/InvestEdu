// src/data/loaders/quizzes.js

// --------------------------------------------------
// Loader quizów dla dowolnego modułu/kursu/rozdziału
// --------------------------------------------------

// Ładuje quiz z pliku: /src/data/quizzes/module{m}-course{c}-chapter{ch}.js
// Przykład ID: m1c2ch3 -> module1-course2-chapter3.js

export async function loadQuiz(moduleId, courseId, chapterId) {
  try {
    // Dynamiczny import
    const quiz = await import(
      `../quizzes/module${moduleId}-course${courseId}-chapter${chapterId}.js`
    );

    return quiz.default;
  } catch (err) {
    console.error(
      `[QuizLoader] Nie znaleziono quizu: module${moduleId}-course${courseId}-chapter${chapterId}.js`
    );
    return null;
  }
}
