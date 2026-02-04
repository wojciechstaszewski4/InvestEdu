// src/components/services/account.js

// Import repo
import {
  reauthenticate,
  updateAuthDisplayName,
  updateAuthEmail,
  updateAuthPassword,
  updateUserFirestore,
} from "@/repositories/account.repo";

// Import Firebase
import { auth } from "@/firebaseConfig";

// ------------------------
// Aktualizacja displayName
// ------------------------

export async function updateDisplayName(newName) {
  if (!newName || typeof newName !== "string") {
    throw new Error("invalid-display-name");
  }

  // Auth
  await updateAuthDisplayName(newName);

  // Firestore
  const uid = getCurrentUid();
  await updateUserFirestore(uid, { displayName: newName });

  return true;
}

// --------------------
// Zmiana adresu e-mail
// --------------------

export async function changeEmail(newEmail, currentPassword) {
  if (!newEmail) throw new Error("invalid-email");

  await reauthenticate(currentPassword);

  try {
    // Aktualizacja e-maila w Auth
    await updateAuthEmail(newEmail);

    // Aktualizacja e-maila w Firestore
    const uid = getCurrentUid();
    await updateUserFirestore(uid, { email: newEmail });
  } catch (err) {
    // Błąd częściowej aktualizacji
    throw new Error("email-update-failed");
  }

  return true;
}

// ------------------------
// Zmiana hasła użytkownika
// ------------------------

export async function changeUserPassword(currentPassword, newPassword) {
  if (!newPassword) throw new Error("invalid-password");

  await reauthenticate(currentPassword);
  await updateAuthPassword(newPassword);

  return true;
}

// ------------------------
// Aktualizacja preferencji
// ------------------------

export async function updatePreferences(uid, prefs) {
  // Zabezpieczenie przed nieprawidłowym payloadem preferencji
  if (!uid || typeof prefs !== "object") {
    throw new Error("invalid-input");
  }

  await updateUserFirestore(uid, {
    "preferences.emails": !!prefs.emails,
    "preferences.theme": prefs.theme || "system",
    "preferences.publicProfile": !!prefs.publicProfile,
    "preferences.statsVisible": !!prefs.statsVisible,
    "preferences.activityVisible": !!prefs.activityVisible,
  });

  return true;
}

// --------------------
// Helper: aktualny UID
// --------------------

function getCurrentUid() {
  const uid = auth.currentUser?.uid;
  if (!uid) throw new Error("no-auth-user");
  return uid;
}
