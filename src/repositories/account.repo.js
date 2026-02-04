// src/repositories/account.repo.js

// Repozytorium konta użytkownika
import { auth, db } from "@/firebaseConfig";
import {
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

// --------------------------
// Reautentykacja użytkownika
// --------------------------

export async function reauthenticate(currentPassword) {
  const user = auth.currentUser;
  if (!user || !user.email) {
    throw new Error("no-auth-user");
  }

  if (!currentPassword) {
    throw new Error("no-password");
  }

  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  await reauthenticateWithCredential(user, credential);
}

// ------------------------
// Aktualizacja displayName
// ------------------------

export async function updateAuthDisplayName(newName) {
  const user = auth.currentUser;
  if (!user) throw new Error("no-auth-user");

  await updateProfile(user, { displayName: newName });
}

// --------------------
// Zmiana adresu e-mail
// --------------------

export async function updateAuthEmail(newEmail) {
  const user = auth.currentUser;
  if (!user) throw new Error("no-auth-user");

  await updateEmail(user, newEmail);
}

// ------------------------
// Zmiana hasła użytkownika
// ------------------------

export async function updateAuthPassword(newPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error("no-auth-user");

  await updatePassword(user, newPassword);
}

// ----------------------
// Aktualizacja Firestore
// ----------------------

export async function updateUserFirestore(uid, fields) {
  if (!uid || !fields || typeof fields !== "object") {
    throw new Error("invalid-input");
  }

  await updateDoc(doc(db, "users", uid), fields);
}
