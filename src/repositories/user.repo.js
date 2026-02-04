// src/repositories/user.repo.js

// Repozytorium użytkownika
import { db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

// ------------------------------
// Pobranie dokumentu użytkownika
// ------------------------------

export async function getUserDoc(uid) {
  if (!uid) return null;

  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ----------------------------
// Aktualizacja dokumentu usera
// ----------------------------

export async function updateUserDoc(uid, fields) {
  if (!uid) return false;
  if (!fields || typeof fields !== "object") return false;

  await updateDoc(doc(db, "users", uid), fields);
  return true;
}

// -----------------------------------------
// Utworzenie dokumentu usera (merge = true)
// -----------------------------------------

export async function setUserDoc(uid, payload) {
  if (!uid) return false;
  if (!payload || typeof payload !== "object") return false;

  await setDoc(doc(db, "users", uid), payload, { merge: true });
  return true;
}
