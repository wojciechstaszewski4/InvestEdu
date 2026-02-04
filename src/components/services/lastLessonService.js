// src/components/services/lastLessonService.js

// Import Firestore
import { db } from "@/firebaseConfig";
import { doc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";

// ------------------------------
// Zapis ostatnio otwartej lekcji
// ------------------------------

export async function saveLastLesson(uid, moduleId, courseId, chapterId) {
  // Brak użytkownika -> nie zapisujemy danych
  if (!uid) return;

  // Referencja do dokumentu użytkownika
  const ref = doc(db, "users", uid);

  // Jeśli dokument usera nie istnieje, nie zapisujemy lekcji
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  // Nadpisujemy pole lastLesson aktualnymi danymi
  await updateDoc(ref, {
    lastLesson: {
      moduleId,
      courseId,
      chapterId,
      updatedAt: serverTimestamp(),
    },
  });
}

// -------------------------------
// Odczyt ostatnio otwartej lekcji
// -------------------------------

export async function getLastLesson(uid) {
  // Brak użytkownika -> brak danych
  if (!uid) return null;

  // Pobranie dokumentu użytkownika
  const snap = await getDoc(doc(db, "users", uid));

  // Dokument nie istnieje (np. nowy użytkownik)
  if (!snap.exists()) return null;

  // Zwracamy zapisane dane lub null, jeśli jeszcze nie ma wpisu
  return snap.data().lastLesson || null;
}
