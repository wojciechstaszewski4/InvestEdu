// src/components/services/progressService.js

// Import Firestore
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/firebaseConfig";

// Import domeny
import {
  computeCourseProgress,
  mergeCourseProgress,
} from "@/domain/courseProgress";

// Import usług
import { extendStreak, updateXP } from "./userProgress";
import { awardBadge, BADGES } from "./badgesService";
import { calculateQuizXP } from "./xpCalculator";

// Mapa struktury edukacji
import { modulesMap } from "@/data/map";

// Import repo
import {
  getCourseProgress,
  saveCourseProgress,
  updateUserCourseProgress,
} from "@/repositories/progress.repo";
import { getUserDoc } from "@/repositories/user.repo";

// XP za powtórne ukończenie rozdziału (30%)
const REPLAY_XP_MULTIPLIER = 0.3;

// ------------------------------
// Pobieranie postępu użytkownika
// ------------------------------

export async function getUserCourseProgress(uid) {
  if (!uid) return null;

  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;

  return snap.data().progress || [];
}

// ------------------------------------------
// Odczyt ukończonych rozdziałów danego kursu
// ------------------------------------------

export async function getCompletedChapters(uid, courseKey) {
  return await getCourseProgress(uid, courseKey);
}

// ---------------------------
// Zapis ukończonego rozdziału
// ---------------------------

export async function completeChapter(uid, moduleId, courseId, chapterId) {
  if (!uid) return null;

  const courseKey = `m${moduleId}c${courseId}`;
  const data = await getCourseProgress(uid, courseKey);

  if (!data.completed.includes(chapterId)) {
    data.completed.push(chapterId);
  }

  const totalChapters = modulesMap[moduleId]?.chapters?.[courseId]?.length || 0;

  const next = chapterId + 1;

  if (next <= totalChapters && !data.unlocked.includes(next)) {
    data.unlocked.push(next);
  }

  await saveCourseProgress(uid, courseKey, data);
  return data;
}

// ----------------------------------------------------------------
// Zapis wyniku quizu przypisanego do kursu i konkretnego rozdziału
// ----------------------------------------------------------------

export async function saveChapterQuizScore(
  uid,
  moduleId,
  courseId,
  chapterId,
  score
) {
  if (!uid) return null;

  const courseKey = `m${moduleId}c${courseId}`;
  const data = await getCourseProgress(uid, courseKey);

  data.quizScores = data.quizScores || {};
  data.quizScores[`ch${chapterId}`] = score;

  await saveCourseProgress(uid, courseKey, data);
  return data;
}

// -------------------------------------------
// Pełna funkcja obsługi ukończonego rozdziału
// -------------------------------------------

export async function finishChapterAndQuiz({
  uid,
  moduleId,
  courseId,
  chapterId,
  courseLabel,
  quizScore,
}) {
  if (!uid) return { error: "no-user" };

  const earnedBadges = [];

  // Pobranie usera
  const user = await getUserDoc(uid);
  if (!user) return { error: "user-not-found" };

  // Czy ten rozdział był już wcześniej ukończony? Sprawdzam :)
  const courseKey = `m${moduleId}c${courseId}`;
  const previousProgress = await getCourseProgress(uid, courseKey);
  const alreadyCompleted =
    previousProgress?.completed?.includes(chapterId) ?? false;

  // Ustalenie poziomu trudności kursu
  const courseDifficulty = modulesMap[moduleId]?.courses?.find(
    (c) => c.id === courseId
  )?.difficulty;

  // Zapis chaptera
  const courseProgress = await completeChapter(
    uid,
    moduleId,
    courseId,
    chapterId
  );

  // Zapis quizu
  if (quizScore) {
    await saveChapterQuizScore(uid, moduleId, courseId, chapterId, {
      ...quizScore,
      difficulty: courseDifficulty,
    });
  }

  // Perfekcyjny quiz (100% poprawnych)
  if (
    quizScore &&
    quizScore.correct === quizScore.total &&
    quizScore.total > 0
  ) {
    if (await awardBadge(uid, BADGES.PERFECT_QUIZ)) {
      earnedBadges.push(BADGES.PERFECT_QUIZ);
    }
  }

  // Odznaki za liczbę quizów (każde rozwiązanie, także powtórki)
  if (quizScore) {
    // Licznik quizów
    const nextQuizCount = (user.quizCompleted || 0) + 1;

    await updateDoc(doc(db, "users", uid), {
      quizCompleted: increment(1),
      totalCorrect: increment(quizScore.correct),
      totalWrong: increment(quizScore.total - quizScore.correct),
    });

    if (nextQuizCount === 1 && (await awardBadge(uid, BADGES.FIRST_QUIZ))) {
      earnedBadges.push(BADGES.FIRST_QUIZ);
    }

    if (nextQuizCount === 10 && (await awardBadge(uid, BADGES.QUIZZES_10))) {
      earnedBadges.push(BADGES.QUIZZES_10);
    }

    if (nextQuizCount === 50 && (await awardBadge(uid, BADGES.QUIZZES_50))) {
      earnedBadges.push(BADGES.QUIZZES_50);
    }
  }

  // -------------
  // Obliczanie XP
  // -------------

  let xpAwarded = 0;

  if (
    quizScore &&
    typeof quizScore.correct === "number" &&
    typeof quizScore.total === "number"
  ) {
    const baseXp = calculateQuizXP(
      courseDifficulty,
      quizScore.correct,
      quizScore.total
    );

    xpAwarded = alreadyCompleted
      ? Math.round(baseXp * REPLAY_XP_MULTIPLIER)
      : baseXp;
  }

  // Aktualizacja XP
  if (xpAwarded > 0) {
    const xpResult = await updateXP(uid, xpAwarded);
    if (xpResult?.earnedBadges?.length) {
      earnedBadges.push(...xpResult.earnedBadges);
    }
  }

  // ------
  // Streak
  // ------

  const streakResult = await extendStreak(uid);
  if (streakResult?.earnedBadges?.length) {
    earnedBadges.push(...streakResult.earnedBadges);
  }

  // Lekcje globalne (tylko pierwszy raz)
  if (!alreadyCompleted) {
    const totalLessons = (user.totalLessons || 0) + 1;
    await updateDoc(doc(db, "users", uid), { totalLessons });

    if (totalLessons === 1 && (await awardBadge(uid, BADGES.FIRST_LESSON))) {
      earnedBadges.push(BADGES.FIRST_LESSON);
    }

    if (totalLessons === 10 && (await awardBadge(uid, BADGES.LESSONS_10))) {
      earnedBadges.push(BADGES.LESSONS_10);
    }

    if (totalLessons === 50 && (await awardBadge(uid, BADGES.LESSONS_50))) {
      earnedBadges.push(BADGES.LESSONS_50);
    }

    if (totalLessons === 100 && (await awardBadge(uid, BADGES.LESSONS_100))) {
      earnedBadges.push(BADGES.LESSONS_100);
    }
  }

  // Rzeczywista liczba rozdziałów kursu z mapy modułów
  const realTotalChapters =
    modulesMap[moduleId]?.chapters?.[courseId]?.length || 1;

  // Progres kursu liczony na podstawie realnej struktury
  const pct = computeCourseProgress(
    courseProgress.completed.length,
    realTotalChapters
  );

  const prevCompleted = (user.progress || []).some(
    (p) => p.id === courseKey && p.pct === 100
  );

  const completedCourses =
    (user.completedCourses || 0) + (!prevCompleted && pct === 100 ? 1 : 0);

  // Odznaka za pierwszy ukończony kurs
  if (pct === 100 && completedCourses === 1) {
    if (await awardBadge(uid, BADGES.FIRST_COURSE)) {
      earnedBadges.push(BADGES.FIRST_COURSE);
    }
  }

  await updateDoc(doc(db, "users", uid), { completedCourses });

  if (completedCourses === 5 && (await awardBadge(uid, BADGES.COURSES_5))) {
    earnedBadges.push(BADGES.COURSES_5);
  }

  if (completedCourses === 10 && (await awardBadge(uid, BADGES.COURSES_10))) {
    earnedBadges.push(BADGES.COURSES_10);
  }

  const courseDef = modulesMap[moduleId]?.courses?.find(
    (c) => c.id === courseId
  );

  const safeCourseLabel = courseDef?.name || courseLabel || `Kurs ${courseId}`;

  const nextProgress = mergeCourseProgress(
    user.progress || [],
    courseKey,
    safeCourseLabel,
    pct,
    moduleId
  );

  await updateUserCourseProgress(uid, nextProgress);

  // Sprawdzenie ukończenia modułu
  const moduleDef = modulesMap[moduleId];
  if (moduleDef?.courses?.length) {
    const totalCoursesInModule = moduleDef.courses.length;

    const completedCoursesInModule = nextProgress.filter(
      (p) => p.moduleId === moduleId && p.pct === 100
    ).length;

    const moduleCompleted = completedCoursesInModule === totalCoursesInModule;

    const alreadyCompletedModule =
      Array.isArray(user.completedModuleIds) &&
      user.completedModuleIds.includes(moduleId);

    if (moduleCompleted && !alreadyCompletedModule) {
      const completedModules = Array.isArray(user.completedModuleIds)
        ? user.completedModuleIds.length + 1
        : 1;

      await updateDoc(doc(db, "users", uid), {
        completedModules,
        completedModuleIds: [...(user.completedModuleIds || []), moduleId],
      });

      if (
        completedModules === 1 &&
        (await awardBadge(uid, BADGES.FIRST_MODULE))
      ) {
        earnedBadges.push(BADGES.FIRST_MODULE);
      }

      if (completedModules === 3 && (await awardBadge(uid, BADGES.MODULES_3))) {
        earnedBadges.push(BADGES.MODULES_3);
      }

      const totalModules = Object.keys(modulesMap).length;
      if (
        completedModules === totalModules &&
        (await awardBadge(uid, BADGES.ALL_MODULES))
      ) {
        earnedBadges.push(BADGES.ALL_MODULES);
      }
    }
  }

  return {
    done: true,
    pct,
    xpAwarded,
    alreadyCompleted,
    streak: streakResult?.streak,
    streakAlready: streakResult?.already,
    earnedBadges,
  };
}

// ---------------------
// Logika progresu kursu
// ---------------------

export { computeCourseProgress };
