// src/repositories/progress.repo.js

// Repozytorium progresu
import { db } from "@/firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// --------------------------------------
// Odczyt progresu kursu (courseProgress)
// --------------------------------------

export async function getCourseProgress(uid, courseKey) {
  if (!uid || !courseKey) return null;

  const ref = doc(db, "users", uid, "courseProgress", courseKey);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { completed: [], unlocked: [1], quizScores: {} };
  }

  return snap.data();
}

// --------------------
// Zapis progresu kursu
// --------------------

export async function saveCourseProgress(uid, courseKey, data) {
  if (!uid || !courseKey || !data) return false;

  const ref = doc(db, "users", uid, "courseProgress", courseKey);
  await setDoc(ref, data, { merge: true });

  return true;
}

// --------------------------------------------
// Aktualizacja progresu globalnego użytkownika
// --------------------------------------------

export async function updateUserCourseProgress(uid, list) {
  if (!uid || !Array.isArray(list)) return false;

  await updateDoc(doc(db, "users", uid), {
    progress: list,
    lastActive: serverTimestamp(),
  });

  return true;
}
