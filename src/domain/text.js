// src/domain/text.js

// --------------------------------------------
// Odmiana słowa "dzień" w zależności od liczby
// --------------------------------------------

export function pluralizeDay(n) {
  const abs = Math.abs(Number(n) || 0);

  if (abs === 1) return "dzień";
  if (abs % 100 >= 12 && abs % 100 <= 14) return "dni";
  if (abs % 10 >= 2 && abs % 10 <= 4) return "dni";
  return "dni";
}

// ---------------------------------------------
// Lokalny klucz dnia (YYYY-MM-DD, czas lokalny)
// ---------------------------------------------

export function getLocalDayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
