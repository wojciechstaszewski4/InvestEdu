// src/domain/courseProgress.js

// ---------------------
// Logika progresu kursu
// ---------------------

export function computeCourseProgress(completedCount, totalChapters) {
  if (!totalChapters || totalChapters <= 0) return 0;
  return Math.round((completedCount / totalChapters) * 100);
}

export function mergeCourseProgress(
  list,
  courseKey,
  label,
  pct,
  moduleId = null
) {
  const idx = list.findIndex((p) => p.id === courseKey);

  if (idx >= 0) {
    const next = [...list];
    next[idx] = {
      ...next[idx],
      pct,
      moduleId,
    };
    return next;
  }

  return [
    ...list,
    {
      id: courseKey,
      label,
      pct,
      moduleId,
    },
  ];
}
