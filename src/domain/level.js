// src/domain/level.js

// XP potrzebne na kolejny level
const XP_PER_LEVEL = 250;

// -----------
// Levelowanie
// -----------

export function computeLevel(xp, level = 1) {
  let current = level;

  // Zabezpieczenia
  const safeXp = Number.isFinite(xp) ? xp : 0;
  current = Number.isFinite(current) && current > 0 ? current : 1;

  while (safeXp >= current * XP_PER_LEVEL) current++;
  return current;
}

// ---------------
// Progres poziomu
// ---------------

export function getLevelProgress(xp, level) {
  const safeXp = Number.isFinite(xp) ? xp : 0;
  const safeLevel = Number.isFinite(level) && level > 0 ? level : 1;

  const min = (safeLevel - 1) * XP_PER_LEVEL;
  const max = safeLevel * XP_PER_LEVEL;

  return Math.min(100, Math.max(0, ((safeXp - min) / (max - min)) * 100));
}
