// src/router/index.js

// Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Firebase Auth
import { auth } from "@/firebaseConfig";

// Repozytoria (dane użytkownika i postęp)
import { getUserDoc } from "@/repositories/user.repo";
import { getCompletedChapters } from "@/components/services/progressService";

// UI / UX
import { showToast } from "@/composables/useToast";

// Statyczna mapa modułów i kursów
import { modulesMap } from "@/data/map";

// Nazwy tras aplikacji
export const ROUTE = Object.freeze({
  HOME: "home",
  ACCOUNT: "account",
  APP: "app",
  MODULES: "modules",
  MODULE_DETAILS: "course-details",
  COURSE: "course",
  CHAPTER: "chapter",
  LESSON_THEORY: "lesson-theory",
  LESSON_QUIZ: "lesson-quiz",
  RANKING: "ranking",
  DATA_DELETION: "data-deletion",
  PRIVACY: "privacy",
  TERMS: "terms",
  COOKIES: "cookies",
  CONTACT: "contact",
  NOT_FOUND: "not-found",
});

// Helper do parsowania liczbowych params -> props
const createIntProps =
  (...keys) =>
  (route) =>
    Object.fromEntries(keys.map((key) => [key, Number(route.params[key])]));

// Definicja tras
const routes = [
  {
    path: "/",
    name: ROUTE.HOME,
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Start" },

    beforeEnter(to, _, next) {
      // Jeśli użytkownik jest zalogowany, przechodzimy do aplikacji
      if (auth.currentUser) return next("/app");

      // Jeśli nie jest zalogowany, zostajemy na stronie głównej
      return next();
    },
  },

  {
    path: "/account",
    name: ROUTE.ACCOUNT,
    component: () => import("@/views/AccountView.vue"),
    meta: { title: "Moje konto" },
  },

  {
    path: "/app",
    name: ROUTE.APP,
    component: () => import("@/views/app/AppLayout.vue"),
    meta: { title: "Aplikacja", requiresAuth: true },
    children: [
      {
        path: "",
        name: ROUTE.MODULES,
        component: () => import("@/views/app/ModuleView.vue"),
        meta: { title: "Moduły" },
      },

      {
        path: "ranking",
        name: ROUTE.RANKING,
        component: () => import("@/views/app/RankingView.vue"),
        meta: { title: "Ranking" },
      },

      {
        path: ":moduleId(\\d+)/details",
        name: ROUTE.MODULE_DETAILS,
        component: () => import("@/views/app/CourseDetailsView.vue"),
        props: (route) => ({
          moduleId: Number(route.params.moduleId),
        }),
        meta: { title: "Szczegóły modułu" },
      },

      {
        path: ":moduleId(\\d+)/:courseId(\\d+)?",
        name: ROUTE.COURSE,
        component: () => import("@/views/app/CourseView.vue"),
        props: createIntProps("moduleId", "courseId"),
        meta: { title: "Kurs" },
      },

      {
        path: ":moduleId(\\d+)/:courseId(\\d+)/:chapterId(\\d+)",
        component: () => import("@/views/app/ChapterView.vue"),
        props: createIntProps("moduleId", "courseId", "chapterId"),
        meta: { title: "Rozdział" },
        children: [
          {
            path: "",
            name: ROUTE.CHAPTER,
            redirect: { name: ROUTE.LESSON_THEORY },
          },

          {
            path: "theory",
            name: ROUTE.LESSON_THEORY,
            component: () => import("@/views/app/LessonTheoryView.vue"),
            props: createIntProps("moduleId", "courseId", "chapterId"),
            meta: { title: "Teoria" },
          },

          {
            path: "quiz",
            name: ROUTE.LESSON_QUIZ,
            component: () => import("@/views/app/LessonQuizView.vue"),
            props: createIntProps("moduleId", "courseId", "chapterId"),
            meta: { title: "Quiz" },
          },
        ],
      },
    ],
  },

  // Globalne usuwanie danych
  {
    path: "/data-deletion",
    name: ROUTE.DATA_DELETION,
    component: () => import("@/views/legalview/DataDeletionView.vue"),
    meta: { title: "Usuwanie danych", hideLanding: true },
  },

  // Globalna polityka prywatności
  {
    path: "/privacy",
    name: ROUTE.PRIVACY,
    component: () => import("@/views/legalview/PrivacyView.vue"),
    meta: { title: "Polityka prywatności", hideLanding: true },
  },

  // Globalny regulamin
  {
    path: "/terms",
    name: ROUTE.TERMS,
    component: () => import("@/views/legalview/TermsView.vue"),
    meta: { title: "Regulamin", hideLanding: true },
  },

  // Globalne ciasteczka
  {
    path: "/cookies",
    name: ROUTE.COOKIES,
    component: () => import("@/views/legalview/CookiesView.vue"),
    meta: { title: "Cookies", hideLanding: true },
  },

  // Globalny kontakt
  {
    path: "/contact",
    name: ROUTE.CONTACT,
    component: () => import("@/views/legalview/ContactView.vue"),
    meta: { title: "Kontakt", hideLanding: true },
  },

  // Gloablny reset hasła
  {
    path: "/action",
    name: "action",
    component: () => import("@/views/legalview/ResetPasswordView.vue"),
    meta: { title: "Akcja konta", hideLanding: true, publicActionRoute: true },
  },

  // Globalne 404
  {
    path: "/:pathMatch(.*)*",
    name: ROUTE.NOT_FOUND,
    component: () => import("@/views/legalview/NotFoundView.vue"),
    meta: { title: "404", hideLanding: true },
  },
];

// Definicja przekierowań
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    // Smooth scroll do hash (#sekcja)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }

    // Jeżeli użytkownik i tak jest prawie na górze -> nie animujemy
    if (window.scrollY < 40) {
      return false;
    }

    // Animacja scrollowania do góry
    return new Promise((resolve) => {
      const start = window.scrollY;
      const duration = 500;
      const startTime = performance.now();

      function animate(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve(false);
        }
      }

      requestAnimationFrame(animate);
    });
  },
});

// Trasy publiczne (np. reset hasła)
function requireAuthGuard(to) {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();

      const isPublic = to.matched.some(
        (record) => record.meta?.publicActionRoute
      );

      if (isPublic) return resolve(true);

      const needsAuth = to.matched.some((record) => record.meta?.requiresAuth);

      if (needsAuth && !user) {
        showToast("Zaloguj się, aby kontynuować 🔐");

        resolve({
          name: ROUTE.HOME,
          query: { redirect: to.fullPath },
        });
      } else {
        resolve(true);
      }
    });
  });
}

// Ochrona postępu między modułami
async function moduleProgressGuard(to) {
  if (to.name === ROUTE.NOT_FOUND) return true;

  // Interesują nas tylko lekcje (theory + quiz)
  if (to.name !== ROUTE.LESSON_THEORY && to.name !== ROUTE.LESSON_QUIZ) {
    return true;
  }

  // UID aktualnie zalogowanego użytkownika
  const uid = auth.currentUser?.uid;
  if (!uid) return true;

  // ID modułu z URL
  const moduleId = Number(to.params.moduleId);

  // Pierwszy moduł zawsze dostępny
  if (moduleId === 1) {
    return true;
  }

  // ID poprzedniego modułu
  const previousModuleId = moduleId - 1;

  // Pobranie dokumentu użytkownika z Firestore
  const userDoc = await getUserDoc(uid);

  // Jeśli brak dokumentu użytkownika, nie blokujemy
  if (!userDoc) return true;

  // Lista ukończonych modułów użytkownika
  const completedModuleIds = userDoc.completedModuleIds || [];

  // Jeśli poprzedni moduł nie został ukończony
  if (!completedModuleIds.includes(previousModuleId)) {
    showToast("Najpierw ukończ poprzedni moduł 🔒");
    return { name: ROUTE.MODULES };
  }

  // Poprzedni moduł ukończony -> wpuszczamy
  return true;
}

// Ochrona postępu w rozdziałach
async function chapterProgressGuard(to) {
  if (to.name === ROUTE.NOT_FOUND) return true;

  // Interesują nas tylko lekcje (theory + quiz)
  if (to.name !== ROUTE.LESSON_THEORY && to.name !== ROUTE.LESSON_QUIZ) {
    return true;
  }

  const uid = auth.currentUser?.uid;
  if (!uid) return true;

  const moduleId = Number(to.params.moduleId);
  const courseId = Number(to.params.courseId);
  const chapterId = Number(to.params.chapterId);

  // Pobieramy statyczne dane modułu
  const module = modulesMap[moduleId];

  // Moduł nie istnieje -> 404
  if (!module) {
    return { name: ROUTE.NOT_FOUND };
  }

  // Kurs nie istnieje w module -> 404
  const courseExists = module.courses?.some((c) => c.id === courseId);
  if (!courseExists) {
    return { name: ROUTE.NOT_FOUND };
  }

  const courseChapters = module.chapters?.[courseId] || [];

  // Rozdział poza zakresem -> 404
  if (chapterId < 1 || chapterId > courseChapters.length) {
    return { name: ROUTE.NOT_FOUND };
  }

  // Pierwszy rozdział pierwszego kursu pierwszego modułu
  if (moduleId === 1 && courseId === 1 && chapterId === 1) {
    return true;
  }

  // Próba wejścia do nowego kursu
  if (courseId > 1 && chapterId === 1) {
    const user = auth.currentUser;
    if (!user) return true;

    const userDoc = await getUserDoc(uid);

    const prevCourseKey = `m${moduleId}c${courseId - 1}`;

    const prevCourseCompleted = userDoc?.progress?.some(
      (p) => p.id === prevCourseKey && p.pct === 100
    );

    // Poprzedni kurs nie został ukończony
    if (!prevCourseCompleted) {
      showToast("Najpierw ukończ poprzedni kurs 🔒");
      return {
        name: ROUTE.COURSE,
        params: { moduleId },
      };
    }

    // Poprzedni kurs ukończony -> wpuszczamy
    return true;
  }

  // Kolejny rozdział w tym samym kursie
  if (chapterId > 1) {
    const courseKey = `m${moduleId}c${courseId}`;
    const progress = await getCompletedChapters(uid, courseKey);
    const previousChapterId = chapterId - 1;

    // Brak jakiegokolwiek postępu w kursie
    if (!progress || !Array.isArray(progress.completed)) {
      showToast("Najpierw ukończ poprzedni rozdział 🔒");
      return {
        name: ROUTE.COURSE,
        params: { moduleId },
      };
    }

    // Poprzedni rozdział nieukończony
    if (!progress.completed.includes(previousChapterId)) {
      showToast("Najpierw ukończ poprzedni rozdział 🔒");
      return {
        name: ROUTE.COURSE,
        params: { moduleId },
      };
    }
  }

  return true;
}

// Tytuł strony z najgłębszej dopasowanej trasy
function setDocumentTitle(to) {
  const recordWithTitle = [...to.matched]
    .reverse()
    .find((record) => record.meta?.title);

  document.title = recordWithTitle
    ? `${recordWithTitle.meta.title} • InvestEdu`
    : "InvestEdu";
}

// Kolejność guardów ma znaczenie:
// 1. auth -> 2. moduły -> 3. rozdziały
router.beforeEach(requireAuthGuard);
router.beforeEach(moduleProgressGuard);
router.beforeEach(chapterProgressGuard);
router.afterEach(setDocumentTitle);

export default router;
