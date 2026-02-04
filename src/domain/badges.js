// src/domain/badges.js

// ----------------
// Definicje odznak
// ----------------

export const badgeMap = {
  // Streak
  streak_3: { label: "3 dni z rzędu", icon: "🔥" },
  streak_7: { label: "7 dni nauki", icon: "🔥🔥" },
  streak_14: { label: "2 tygodnie", icon: "⚡" },
  streak_30: { label: "Miesiąc bez przerwy", icon: "🏆" },

  // Lekcje
  first_lesson: { label: "Pierwsza lekcja", icon: "🎯" },
  ten_lessons: { label: "10 lekcji", icon: "📘" },
  fifty_lessons: { label: "50 lekcji", icon: "📚" },
  hundred_lessons: { label: "100 lekcji", icon: "🏛️" },

  // Quizy
  first_quiz: { label: "Pierwszy quiz", icon: "🧪" },
  perfect_quiz: { label: "Perfekcyjny quiz", icon: "💯" },
  ten_quizzes: { label: "10 quizów", icon: "🧠" },
  fifty_quizzes: { label: "50 quizów", icon: "🧠🔥" },

  // Kursy
  first_course: { label: "Pierwszy kurs", icon: "📗" },
  five_courses: { label: "5 kursów", icon: "📘📘" },
  ten_courses: { label: "10 kursów", icon: "📚⭐" },

  // Moduły
  first_module: { label: "Pierwszy moduł", icon: "📦" },
  three_modules: { label: "3 moduły", icon: "🧩" },
  all_modules: { label: "Wszystkie moduły", icon: "🌍" },

  // XP / Level
  first_xp: { label: "Pierwsze XP", icon: "✨" },
  xp_500: { label: "500 XP", icon: "⭐" },
  xp_1000: { label: "1000 XP", icon: "🌟" },
  xp_5000: { label: "5000 XP", icon: "👑" },
  level_10: { label: "Poziom 10", icon: "🔟" },
  level_25: { label: "Poziom 25", icon: "🏅" },

  // Meta
  night_owl: { label: "Nocny mark", icon: "🌙" },
  early_bird: { label: "Ranny ptaszek", icon: "☀️" },
};

// --------------------------
// Helper: dane odznaki po ID
// --------------------------

export function getBadgeMeta(id) {
  return badgeMap[id] || { label: id, icon: "🏅" };
}
