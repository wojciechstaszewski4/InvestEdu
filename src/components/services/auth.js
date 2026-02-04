// src/components/services/auth.js

// Import Firebase
import { auth, db } from "@/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

// Import Firestore
import { collection, query, where, getDocs } from "firebase/firestore";

// Import repo
import { initUserDocument } from "@/repositories/auth.repo";

// Import usług
import router from "@/router";
import { handleLoginProgress } from "./userProgress";

// ----------------------------------------------
// Sprawdzanie istnienia konta (Firestore + Auth)
// ----------------------------------------------

export async function checkIfEmailExists(email) {
  if (!email) return null;

  // Firestore
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const snap = await getDocs(q);

  if (!snap.empty) {
    const data = snap.docs[0].data();

    let provider = data.provider || "password";
    if (provider === "google.com") provider = "google";
    if (provider === "facebook.com") provider = "facebook";

    return {
      exists: true,
      provider,
      firestore: true,
      auth: true,
    };
  }

  // Firebase Auth
  const methods = await fetchSignInMethodsForEmail(auth, email);
  if (methods.length === 0) return null;

  let provider = "password";
  if (methods.includes("google.com")) provider = "google";
  if (methods.includes("facebook.com")) provider = "facebook";

  return {
    exists: true,
    provider,
    firestore: false,
    auth: true,
  };
}

// ------------------------------------
// Rejestracja użytkownika przez e-mail
// ------------------------------------

export async function registerUser(email, password) {
  if (!email || !password) throw new Error("invalid-credentials");

  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await initUserDocument(cred.user, "password");
  await handleLoginProgress(cred.user.uid);

  router.push("/app");
  return cred.user;
}

// -----------------------------------
// Logowanie + opcja "Zapamiętaj mnie"
// -----------------------------------

export async function loginUser(email, password, remember = true) {
  if (!email || !password) throw new Error("invalid-credentials");

  const persistence = remember
    ? browserLocalPersistence
    : browserSessionPersistence;

  await setPersistence(auth, persistence);

  const cred = await signInWithEmailAndPassword(auth, email, password);

  await initUserDocument(cred.user, "password");
  await handleLoginProgress(cred.user.uid);

  router.push("/app");
  return cred.user;
}

// ----------------
// Logowanie Google
// ----------------

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.addScope("email");

  try {
    const result = await signInWithPopup(auth, provider);

    await initUserDocument(result.user, "google");
    await handleLoginProgress(result.user.uid);

    router.push("/app");
    return result.user;
  } catch (err) {
    if (err.code === "auth/account-exists-with-different-credential") {
      throw new Error("provider-conflict");
    }
    throw err;
  }
}

// ------------------
// Logowanie Facebook
// ------------------

export async function loginWithFacebook() {
  const provider = new FacebookAuthProvider();
  provider.addScope("email");

  try {
    const result = await signInWithPopup(auth, provider);

    await initUserDocument(result.user, "facebook");
    await handleLoginProgress(result.user.uid);

    router.push("/app");
    return result.user;
  } catch (err) {
    if (err.code === "auth/account-exists-with-different-credential") {
      throw new Error("provider-conflict");
    }
    throw err;
  }
}

// -----------
// Reset hasła
// -----------

export async function resetUserPassword(email) {
  if (!email) throw new Error("no-email");
  await sendPasswordResetEmail(auth, email);
  return true;
}

// -----------
// Wylogowanie
// -----------

export async function logoutUser() {
  await signOut(auth);
  router.push("/");
}

// --------------------------------
// Nasłuch zmian w stanie logowania
// --------------------------------

export function listenForAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}
