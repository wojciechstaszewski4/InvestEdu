// src/data/loaders/theory.js

// --------------------------------------------------
// Loader teorii dla dowolnego modułu/kursu/rozdziału
// --------------------------------------------------

// Ładuje teorię z pliku: /src/data/theory/module{m}-course{c}-chapter{ch}.js
// Przykład ID: m1c2ch3 -> module1-course2-chapter3.js

export async function loadTheory(moduleId, courseId, chapterId) {
  try {
    // Dynamiczny import
    const theory = await import(
      `../theory/module${moduleId}-course${courseId}-chapter${chapterId}.js`
    );

    return theory.default;
  } catch (err) {
    console.error(
      `[TheoryLoader] Nie znaleziono teorii: module${moduleId}-course${courseId}-chapter${chapterId}.js`
    );
    return null;
  }
}
