// src/composables/useContinueLearning.js

import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import { showToast } from "@/composables/useToast";
import { getLastLesson } from "@/components/services/lastLessonService";
import { modulesMap } from "@/data/map";
import { ROUTE } from "@/router";

// Composable obsługujący logikę "Kontynuuj naukę"
export function useContinueLearning() {
  const router = useRouter();

  // Główna funkcja wywoływana przez przyciski "Kontynuuj naukę"
  async function continueLearning() {
    // Pobranie aktualnie zalogowanego użytkownika
    const uid = getAuth().currentUser?.uid;
    if (!uid) return;

    // Odczyt ostatnio zapisanej lekcji z Firestore
    const last = await getLastLesson(uid);

    // Brak zapisanej lekcji (użytkownik jeszcze nic nie rozpoczął)
    if (!last) {
      showToast("Nie masz jeszcze rozpoczętej lekcji 📘");
      return;
    }

    // Destrukturyzacja zapisanych identyfikatorów
    const { moduleId, courseId, chapterId } = last;

    // Sprawdzenie czy moduł nadal istnieje w danych aplikacji
    const module = modulesMap[moduleId];
    if (!module) {
      showToast("Ostatnia lekcja jest już niedostępna ❌");
      return;
    }

    // Sprawdzenie czy kurs istnieje w danym module
    const courseExists = module.courses?.some((c) => c.id === courseId);
    if (!courseExists) {
      showToast("Kurs ostatniej lekcji nie istnieje 📂");
      return;
    }

    // Sprawdzenie czy rozdział istnieje w danym kursie
    const chapters = module.chapters?.[courseId] || [];
    const chapterExists = chapters.some((c) => c.id === chapterId);

    if (!chapterExists) {
      showToast("Ten rozdział został usunięty 🧩");
      return;
    }

    // Wszystkie dane są poprawne -> przekierowanie do ostatniej lekcji
    router.push({
      name: ROUTE.LESSON_THEORY,
      params: { moduleId, courseId, chapterId },
    });
  }

  // Publiczne API composable
  return { continueLearning };
}
