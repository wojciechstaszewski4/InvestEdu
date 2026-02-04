// src/components/services/badgesService.js

// Import Firestore
import { db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";

// ----------------
// Definicje odznak
// ----------------

export const BADGES = {
  // Streak
  STREAK_3: "streak_3",
  STREAK_7: "streak_7",
  STREAK_14: "streak_14",
  STREAK_30: "streak_30",

  // Lekcje
  FIRST_LESSON: "first_lesson",
  LESSONS_10: "ten_lessons",
  LESSONS_50: "fifty_lessons",
  LESSONS_100: "hundred_lessons",

  // Quizy
  FIRST_QUIZ: "first_quiz",
  PERFECT_QUIZ: "perfect_quiz",
  QUIZZES_10: "ten_quizzes",
  QUIZZES_50: "fifty_quizzes",

  // Kursy
  FIRST_COURSE: "first_course",
  COURSES_5: "five_courses",
  COURSES_10: "ten_courses",

  // Moduły
  FIRST_MODULE: "first_module",
  MODULES_3: "three_modules",
  ALL_MODULES: "all_modules",

  // XP / poziom
  FIRST_XP: "first_xp",
  XP_500: "xp_500",
  XP_1000: "xp_1000",
  XP_5000: "xp_5000",
  LEVEL_10: "level_10",
  LEVEL_25: "level_25",

  // Meta
  NIGHT_OWL: "night_owl",
  EARLY_BIRD: "early_bird",
};

// ----------------------------------
// Przyznawanie odznaki użytkownikowi
// ----------------------------------

export async function awardBadge(uid, badge) {
  if (!uid || !badge) return false;

  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return false;

  // Jeśli odznaka została już zdobyta
  if (snap.data()?.badges?.[badge]) return false;

  // Atomiczny zapis (mapa w Firestore)
  await updateDoc(ref, {
    [`badges.${badge}`]: {
      earnedAt: serverTimestamp(),
    },
  });

  return true;
}
