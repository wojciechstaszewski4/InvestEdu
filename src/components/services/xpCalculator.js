// src/components/services/xpCalculator.js

// Import stałych
import {
  DIFFICULTY_XP_MULTIPLIER,
  MIN_QUIZ_XP,
  MAX_QUIZ_XP,
} from "@/data/constants";

// -----------------------------------------
// Obliczamy XP na podstawie trudności quizu
// -----------------------------------------

export function calculateQuizXP(quizDifficulty, correct, total) {
  const diff = quizDifficulty?.toLowerCase() || "łatwy";

  const multiplier =
    DIFFICULTY_XP_MULTIPLIER[diff] || DIFFICULTY_XP_MULTIPLIER["łatwy"];

  const score = total > 0 ? correct / total : 0;

  let xp = Math.round(score * multiplier * 10);

  xp = Math.max(MIN_QUIZ_XP, xp);
  xp = Math.min(MAX_QUIZ_XP, xp);

  return xp;
}
