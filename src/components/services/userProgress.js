// src/components/services/userProgress.js

// Import Firestore
import { db } from "@/firebaseConfig";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

// Import funkcji
import { awardBadge, BADGES } from "./badgesService";

// Import domeny
import { computeLevel, getLevelProgress } from "@/domain/level";
import { pluralizeDay, getLocalDayKey } from "@/domain/text";

// Import repo
import { getUserDoc, updateUserDoc } from "@/repositories/user.repo";

// Dzienne XP
export const DAILY_XP = 25;

// -----------------
// XP przy logowaniu
// -----------------

export async function handleLoginProgress(uid) {
  if (!uid) return { gained: 0 };

  const data = await getUserDoc(uid);
  if (!data) return { gained: 0 };

  const todayKey = getLocalDayKey();

  // Dzienne XP tylko raz dziennie
  if (data.lastLoginDayKey === todayKey) {
    return { gained: 0 };
  }

  const delta = DAILY_XP;

  const currentXp = Number.isFinite(data.xp) ? data.xp : 0;
  const currentLevel =
    Number.isFinite(data.level) && data.level > 0 ? data.level : 1;

  const newXp = currentXp + delta;
  const newLevel = computeLevel(newXp, currentLevel);

  await updateUserDoc(uid, {
    xp: newXp,
    level: newLevel,
    lastLoginDayKey: todayKey,
    lastLogin: serverTimestamp(),
    lastActive: serverTimestamp(),
  });

  return { gained: delta, xp: newXp, level: newLevel };
}

// ------------
// Dodawanie XP
// ------------

export async function updateXP(uid, amount) {
  if (!uid) return null;

  const data = await getUserDoc(uid);
  if (!data) return null;

  const earnedBadges = [];

  const delta = Number(amount) || 0;
  if (delta <= 0) return null;

  // Pierwsze XP zdobyte za quiz (nie bonus systemowy)
  if (!data.firstQuizXpGranted) {
    if (await awardBadge(uid, BADGES.FIRST_XP)) {
      earnedBadges.push(BADGES.FIRST_XP);
    }

    await updateUserDoc(uid, {
      firstQuizXpGranted: true,
    });
  }

  const xp = (Number(data.xp) || 0) + delta;
  const level = computeLevel(xp, data.level || 1);

  await updateUserDoc(uid, {
    xp,
    level,
  });

  // Progi XP
  if (xp >= 500 && (await awardBadge(uid, BADGES.XP_500))) {
    earnedBadges.push(BADGES.XP_500);
  }

  if (xp >= 1000 && (await awardBadge(uid, BADGES.XP_1000))) {
    earnedBadges.push(BADGES.XP_1000);
  }

  if (xp >= 5000 && (await awardBadge(uid, BADGES.XP_5000))) {
    earnedBadges.push(BADGES.XP_5000);
  }

  // Progi level
  if (level >= 10 && (await awardBadge(uid, BADGES.LEVEL_10))) {
    earnedBadges.push(BADGES.LEVEL_10);
  }

  if (level >= 25 && (await awardBadge(uid, BADGES.LEVEL_25))) {
    earnedBadges.push(BADGES.LEVEL_25);
  }

  return { xp, level, earnedBadges };
}

// -------------------------------
// Automatyczne wygaszenie streaka
// -------------------------------

export async function autoExpireStreak(uid) {
  if (!uid) return null;

  const user = await getUserDoc(uid);
  if (!user) return null;

  const lastKey = user.lastStreakDayKey;
  const streak = Number(user.streak) || 0;

  if (!lastKey || streak === 0) {
    return { expired: false };
  }

  const todayKey = getLocalDayKey();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getLocalDayKey(yesterday);

  // Jeśli streak nie był ani wczoraj, ani dziś -> przepada
  if (lastKey !== todayKey && lastKey !== yesterdayKey) {
    await updateUserDoc(uid, {
      streak: 0,
      lastStreakDayKey: null,
    });

    return {
      expired: true,
      previousStreak: streak,
    };
  }

  return { expired: false };
}

// ----------
// Ranking XP
// ----------

export async function getLeaderboard(limitCount = 10) {
  const q = query(collection(db, "users"), orderBy("xp", "desc"), limit(2000));

  const snap = await getDocs(q);
  const result = [];

  snap.docs.forEach((d) => {
    const data = d.data();
    const prefs = data.preferences || {};

    if (prefs.publicProfile === false || prefs.statsVisible === false) return;

    result.push({
      place: result.length + 1,
      id: d.id,
      displayName:
        data.displayName || data.email?.split("@")[0] || "Użytkownik",
      xp: data.xp || 0,
      level: data.level || 1,
      streak: data.streak || 0,
    });
  });

  return result.slice(0, limitCount);
}

// ----------------
// Ranking streaków
// ----------------

export async function getStreakLeaderboard(limitCount = 10) {
  const q = query(
    collection(db, "users"),
    orderBy("streak", "desc"),
    limit(2000)
  );

  const snap = await getDocs(q);
  const result = [];

  snap.docs.forEach((d) => {
    const data = d.data();
    const prefs = data.preferences || {};

    if (prefs.publicProfile === false || prefs.statsVisible === false) return;

    result.push({
      place: result.length + 1,
      id: d.id,
      displayName:
        data.displayName || data.email?.split("@")[0] || "Użytkownik",
      streak: data.streak || 0,
      xp: data.xp || 0,
      level: data.level || 1,
    });
  });

  return result.slice(0, limitCount);
}

// ---------------
// Progres poziomu
// ---------------

export { getLevelProgress };

// --------------------------------------------
// Odmiana słowa "dzień" w zależności od liczby
// --------------------------------------------

export { pluralizeDay };

// ------------------------------
// Przedłużanie streaka + odznaki
// ------------------------------

export async function extendStreak(uid) {
  if (!uid) return null;

  const earnedBadges = [];
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  const data = snap.data();
  const todayKey = getLocalDayKey();
  const lastStreakDayKey = data.lastStreakDayKey || null;

  // Jeśli streak jest już dziś zaliczony
  if (lastStreakDayKey === todayKey) {
    const hour = new Date().getHours();

    // Meta: pora dnia (niezależna od streaka)
    if ((hour >= 22 || hour < 5) && (await awardBadge(uid, BADGES.NIGHT_OWL))) {
      earnedBadges.push(BADGES.NIGHT_OWL);
    }

    if (hour >= 5 && hour <= 8 && (await awardBadge(uid, BADGES.EARLY_BIRD))) {
      earnedBadges.push(BADGES.EARLY_BIRD);
    }

    return {
      already: true,
      streak: data.streak || 0,
      earnedBadges,
    };
  }

  let streak = Number.isFinite(data.streak) ? data.streak : 0;

  // Wczorajszy dzień do streaka
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getLocalDayKey(yesterday);

  streak = lastStreakDayKey === yesterdayKey ? streak + 1 : 1;

  // Zapis streaka
  await updateDoc(ref, {
    streak,
    lastStreakDayKey: todayKey,
  });

  // Progi streaka
  if (streak === 3 && (await awardBadge(uid, BADGES.STREAK_3))) {
    earnedBadges.push(BADGES.STREAK_3);
  }

  if (streak === 7 && (await awardBadge(uid, BADGES.STREAK_7))) {
    earnedBadges.push(BADGES.STREAK_7);
  }

  if (streak === 14 && (await awardBadge(uid, BADGES.STREAK_14))) {
    earnedBadges.push(BADGES.STREAK_14);
  }

  if (streak === 30 && (await awardBadge(uid, BADGES.STREAK_30))) {
    earnedBadges.push(BADGES.STREAK_30);
  }

  // Meta: pora dnia (niezależna od streaka)
  const hour = new Date().getHours();

  if ((hour >= 22 || hour < 5) && (await awardBadge(uid, BADGES.NIGHT_OWL))) {
    earnedBadges.push(BADGES.NIGHT_OWL);
  }

  if (hour >= 5 && hour <= 8 && (await awardBadge(uid, BADGES.EARLY_BIRD))) {
    earnedBadges.push(BADGES.EARLY_BIRD);
  }

  return { streak, earnedBadges };
}
