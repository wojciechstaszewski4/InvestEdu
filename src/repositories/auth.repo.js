// src/repositories/auth.repo.js

// Repozytorium konta użytkownika
import { db } from "@/firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// -----------------------------------
// Inicjalizacja dokumentu użytkownika
// -----------------------------------

export async function initUserDocument(user, provider) {
  if (!user?.uid) return;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  const baseData = {
    email: user.email,
    provider,
    lastLogin: serverTimestamp(),
    lastActive: serverTimestamp(),
  };

  // Pierwsze logowanie
  if (!snap.exists()) {
    await setDoc(ref, {
      ...baseData,

      displayName: user.displayName || user.email?.split("@")[0] || "",
      displayNameLocked: false,

      avatarUrl: user.photoURL || "",
      avatarLocked: false,

      joinedAt: serverTimestamp(),
      bio: "",

      preferences: {
        emails: true,
        theme: "system",
        publicProfile: true,
        statsVisible: true,
        activityVisible: true,
      },

      xp: 0,
      level: 1,
      streak: 0,

      firstQuizXpGranted: false,
      signupBonusShown: false,

      badges: {},
      quizCompleted: 0,
      totalCorrect: 0,
      totalWrong: 0,

      progress: [],
    });

    return;
  }

  // Kolejne logowanie
  const existing = snap.data();
  const updates = { ...baseData };

  // 'displayName'
  if (
    !existing.displayNameLocked &&
    (!existing.displayName || existing.displayName === "") &&
    user.displayName
  ) {
    updates.displayName = user.displayName;
  }

  // 'avatar'
  if (
    !existing.avatarLocked &&
    (!existing.avatarUrl || existing.avatarUrl === "") &&
    user.photoURL
  ) {
    updates.avatarUrl = user.photoURL;
  }

  await updateDoc(ref, updates);
}
