// src/composables/useUser.js

// Importy z Vue
import { ref, computed, nextTick, watch } from "vue";

// Import Firebase
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";

// Import domeny
import { getUserFirstName } from "@/domain/user";
import { computeLevel } from "@/domain/level";
import { getLocalDayKey, pluralizeDay } from "@/domain/text";

// Import repo
import { getUserDoc, updateUserDoc } from "@/repositories/user.repo";

// Import usług
import {
  handleLoginProgress,
  autoExpireStreak,
  DAILY_XP,
} from "@/components/services/userProgress";
import { showToast } from "@/composables/useToast";

// Motyw
import { useTheme } from "@/composables/useTheme";

// Reactive state użytkownika
const authUser = ref(null);
const user = ref(null);
const loading = ref(true);

// Motyw aplikacji
const { theme, apply } = useTheme();

// ----------------------------------
// Lokalna, reaktywna aktualizacja XP
// ----------------------------------

function applyXp(xp) {
  if (!user.value || !xp) return { levelUp: false };

  const currentXp = Number(user.value.xp) || 0;
  const currentLevel = Number(user.value.level) || 1;

  const nextXp = currentXp + xp;
  const nextLevel = computeLevel(nextXp, currentLevel);

  // Bezpieczna aktualizacja reaktywna
  user.value = {
    ...user.value,
    xp: nextXp,
    level: nextLevel,
  };

  return {
    levelUp: nextLevel > currentLevel,
    newLevel: nextLevel,
  };
}

// -------------------------------
// Aktualizacja przyznanych odznak
// -------------------------------

function applyBadges(newBadges = []) {
  if (!newBadges.length || !user.value) return;

  const current = user.value.badges || {};
  const merged = { ...current };

  newBadges.forEach((id) => {
    if (!merged[id]) {
      merged[id] = {
        earnedAt: serverTimestamp(),
      };
    }
  });

  user.value = {
    ...user.value,
    badges: merged,
  };
}

// ----------------------------
// Pobieranie danych Firestore
// ----------------------------

async function loadUserData(uid) {
  if (!uid) {
    user.value = null;
    return;
  }

  const data = await getUserDoc(uid);
  if (!data) {
    user.value = null;
    return;
  }

  await migrateBadges(uid, data);
  user.value = data;
}

// Migracja badges: array -> map
async function migrateBadges(uid, data) {
  if (!uid || !data) return;

  if (Array.isArray(data.badges)) {
    const migrated = {};

    data.badges.forEach((b) => {
      migrated[b] = {
        earnedAt: data.joinedAt || serverTimestamp(),
      };
    });

    await updateUserDoc(uid, { badges: migrated });
  }
}

// -----------------------------------
// Zapis zmian użytkownika (Firestore)
// -----------------------------------

async function saveUser(fields) {
  if (!authUser.value?.uid) {
    throw new Error("no-auth-user");
  }

  if (!fields || typeof fields !== "object") {
    throw new Error("invalid-payload");
  }

  await updateUserDoc(authUser.value.uid, fields);

  // Odświeżenie lokalnego stanu
  await loadUserData(authUser.value.uid);
}

// -------------------------------------------------
// Przypomnienie o streaku (po wejściu do aplikacji)
// -------------------------------------------------

// Globalny handler timera (czyszczony przy logout)
let streakReminderTimeout = null;

// Czyszczenie przypomnienia o streaku
function clearStreakReminder() {
  if (streakReminderTimeout) {
    clearTimeout(streakReminderTimeout);
    streakReminderTimeout = null;
  }
}

function scheduleStreakReminder(data) {
  if (!data) return;
  if (!authUser.value) return;

  const todayKey = getLocalDayKey();

  // Jeśli streak już dziś zaliczony -> nie pokazujemy i czyścimy timer
  if (data.lastStreakDayKey === todayKey) {
    clearStreakReminder();
    return;
  }

  // Wczorajszy dzień
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getLocalDayKey(yesterday);

  // Tylko jeśli streak był wczoraj
  if (data.lastStreakDayKey !== yesterdayKey) return;

  // Jeśli reminder już zaplanowany -> nie planujemy ponownie
  if (streakReminderTimeout) return;

  streakReminderTimeout = setTimeout(() => {
    if (!authUser.value) return;
    showToast("Zrób dziś lekcję, aby przedłużyć streak! 🔥");
  }, 60000);
}

// ----------------------
// Listener Firebase Auth
// ----------------------

onAuthStateChanged(auth, async (u) => {
  loading.value = true;
  await nextTick();

  authUser.value = u || null;

  // Wylogowanie
  if (!u) {
    user.value = null;
    clearStreakReminder();

    loading.value = false;
    return;
  }

  // Firestore - pierwsze ładowanie
  await loadUserData(u.uid);

  // Automatyczne wygaszanie streaka
  const expireResult = await autoExpireStreak(u.uid);
  if (expireResult?.expired) {
    showToast(
      `Streak ${expireResult.previousStreak} ${pluralizeDay(
        expireResult.previousStreak
      )} został utracony 💔`
    );
    await loadUserData(u.uid);
  }

  // Side effects po loginie
  if (user.value) {
    const prevLevel = user.value.level ?? 1;

    // XP dzienne
    const loginResult = await handleLoginProgress(u.uid);
    await loadUserData(u.uid);

    // Toast dziennego XP
    if (loginResult?.gained > 0) {
      showToast(`Dzienny bonus: +${loginResult.gained} XP ⭐`);
    }

    // Toast nowego levelu
    if ((user.value.level ?? 1) > prevLevel) {
      showToast(`Nowy poziom: ${user.value.level}! 🎉`);
    }

    // Przypomnienie o streaku
    scheduleStreakReminder(user.value);

    // Motyw
    const prefTheme = user.value?.preferences?.theme ?? "system";
    theme.value = prefTheme;
    apply();
  }

  loading.value = false;
});

// ----------------
// Toasty powitalne
// ----------------

watch(
  () => user.value,
  async (val) => {
    if (!val) return;

    const justLoggedIn = sessionStorage.getItem("justLoggedIn");
    if (!justLoggedIn) return;

    await nextTick();

    // Toast powitalny
    const name =
      val.displayName ||
      auth.currentUser?.displayName ||
      auth.currentUser?.email?.split("@")[0];

    if (name) {
      const firstName = getUserFirstName(name);
      showToast(`Witaj ${firstName}! 👋`);
    } else {
      showToast("Witaj! 👋");
    }

    // Startowy bonus XP (tylko raz)
    if (!val.signupBonusShown) {
      showToast(`Startowy bonus: +${DAILY_XP} XP 🎉`);

      await updateUserDoc(auth.currentUser.uid, {
        signupBonusShown: true,
      });

      // Aktualizacja lokalna (bez reloadu)
      val.signupBonusShown = true;
    }

    sessionStorage.removeItem("justLoggedIn");
  },
  { immediate: false }
);

// --------------------------------------------
// Reaktywne anulowanie przypomnienia o streaku
// --------------------------------------------

watch(
  () => user.value?.lastStreakDayKey,
  (newKey) => {
    if (!newKey) return;

    const todayKey = getLocalDayKey();

    // Jeśli streak został dziś zaliczony -> anulujemy reminder
    if (newKey === todayKey) {
      clearStreakReminder();
    }
  }
);

// ----------------
// Computed helpers
// ----------------

// Czy użytkownik jest zalogowany? Sprawdzam :)
const isLoggedIn = computed(() => !!authUser.value);

// Inicjały użytkownika
const initials = computed(() => {
  const name = user.value?.displayName;
  const email = user.value?.email;

  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }

  if (email) return email[0].toUpperCase();
  return "?";
});

// -------------------
// Publiczne API hooka
// -------------------

export function useUser() {
  return {
    authUser,
    user,
    loading,
    isLoggedIn,
    initials,
    loadUserData,
    saveUser,
    applyXp,
    applyBadges,
  };
}

// ----------------------------
// Zwrócenie pierwszego imienia
// ----------------------------

export { getUserFirstName };
