<script setup>
// Import komponentów UI
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import AuthModal from "@/components/sections/auth/AuthModal.vue";
import AuthPopup from "@/components/sections/auth/AuthPopup.vue";

// Import narzędzi Vue
import {
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  computed,
  nextTick,
} from "vue";

// Import routera i tras
import { useRoute, useRouter } from "vue-router";
import { ROUTE } from "@/router";

// Import funkcji aplikacji
import { useScrollSpy } from "@/composables/useScrollSpy";
import { lockScroll, unlockScroll } from "@/composables/useScrollLock";
import { showToast } from "@/composables/useToast";
import { useUser, getUserFirstName } from "@/composables/useUser.js";
import {
  getLevelProgress,
  pluralizeDay,
} from "@/components/services/userProgress.js";
import { useContinueLearning } from "@/composables/useContinueLearning";

// Import funkcji Firebase Auth
import { logoutUser } from "@/components/services/auth.js";

// Inicjalizacja routera, trasy i pobranie użytkownika
const router = useRouter();
const route = useRoute();
const { user, initials } = useUser();

// Preferencje użytkownika
const prefs = computed(() => user.value?.preferences || {});

// Funkcja kontynuacji nauki
const { continueLearning } = useContinueLearning();

// Stan interfejsu
const mobileMenuOpen = ref(false);
const showAuthModal = ref(false);
const showAuthPopup = ref(false);
const isLoginMode = ref(true);
const isScrolled = ref(false);

// Ukrywanie sekcji landing page
const isLanding = computed(() => route.path === "/");

const hideLandingSections = computed(
  () => !!user.value || route.meta?.hideLanding || !isLanding.value
);

// Przyjęcie nazwy marki
const { brand } = defineProps({
  brand: { type: String, default: "InvestEdu" },
});

// Lista sekcji ScrollSpy
const links = Object.freeze([
  { hash: "#features", label: "Nauka" },
  { hash: "#learn-more", label: "Jak to działa?" },
  { hash: "#ranking", label: "Ranking" },
]);

// Mini statystyki w navbarze (respektują preferencje użytkownika)
const navbarStats = computed(() => {
  if (!user.value) return null;

  // Sprawdzenie, czy statystyki są ukryte
  const statsHidden = prefs.value.statsVisible === false;

  // Zwracanie ukrytych statystyk lub rzeczywistych danych
  if (statsHidden) {
    return {
      level: "-",
      xp: "-",
      streak: "-",
      progress: 0,
      hidden: true,
    };
  }

  // Rzeczywiste dane użytkownika
  const level = user.value.level || 1;
  const xp = user.value.xp || 0;
  const streak = user.value.streak || 0;

  return {
    level,
    xp,
    streak,
    progress: getLevelProgress(xp, level),
    hidden: false,
  };
});

// ScrollSpy - aktywna sekcja
const active = ref(null);
const { goTo, restart } = useScrollSpy(links, active, 80);

// Restart ScrollSpy po zmianie widoku
watch(
  () => route.path,
  async (path) => {
    if (path === "/") {
      await nextTick();
      restart();
    }
  }
);

// Obsługa zmiany scrolla
function handleScroll() {
  isScrolled.value = window.scrollY > 10;
  if (window.scrollY < 10) active.value = null;
}

// Obsługa kontynuacji nauki z navbaru
function continueLearningFromNavbar() {
  continueLearning();
}

// Obsługa wylogowania
async function handleLogout() {
  try {
    const firstName = getUserFirstName(user.value?.displayName);
    await logoutUser();

    showToast(
      firstName
        ? `Do zobaczenia, ${firstName}! 👋`
        : "Wylogowano - do zobaczenia! 👋"
    );
  } catch (e) {
    showToast("Nie udało się wylogować ⚠️");
  }
}

// Otwieranie modali logowania
function openAuthModal(isLogin = true) {
  isLoginMode.value = isLogin;
  showAuthModal.value = true;
}

function handlePopupAuth(type) {
  isLoginMode.value = type === "login";
  showAuthPopup.value = false;
  showAuthModal.value = true;
}

// Blokowanie scrolla, gdy modal lub popup jest otwarty
watch([showAuthModal, showAuthPopup], ([modal, popup]) => {
  modal || popup ? lockScroll() : unlockScroll();
});

// Przejście do sekcji w mobile menu
function selectMobile(hash) {
  toggleMobileMenu();
  nextTick().then(() => goTo(hash));
}

// Zamknięcie menu mobilnego przy naciśnięciu ESC
function handleEsc(e) {
  if (e.key === "Escape" && mobileMenuOpen.value) {
    toggleMobileMenu();
  }
}

// Powrót do góry strony lub przejście do "/" + scroll top
function scrollToTop() {
  if (route.path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    active.value = null;
    restart();
  } else {
    router.push("/").then(() => {
      restart();
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    });
  }
}

// Przełączanie panelu mobilnego
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;

  if (!showAuthModal.value && !showAuthPopup.value) {
    mobileMenuOpen.value ? lockScroll() : unlockScroll();
  }
}

// Rejestracja eventów scrolla
onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("keydown", handleEsc);

  handleScroll();

  if (route.path === "/") {
    nextTick().then(restart);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEsc);
});

// Style linków i przycisków
const baseLink =
  "relative rounded-md px-3 py-2 text-text/80 transition-all duration-300 ease-out cursor-pointer " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 " +
  "before:bg-primary/25 before:transition-all before:duration-300 " +
  "hover:text-primary hover:before:scale-x-100 hover:scale-[1.05] active:scale-[0.97]";

const activeLink =
  "text-primary before:scale-x-100 before:bg-primary/60 before:duration-300";

const continueLink =
  "relative inline-flex items-center gap-2 px-3 py-2 rounded-md " +
  "text-warm/90 font-semibold tracking-tight cursor-pointer " +
  "transition-all duration-300 ease-out " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 " +
  "before:origin-left before:scale-x-0 before:bg-warm/50 " +
  "before:transition-all before:duration-300 " +
  "hover:text-warm hover:before:scale-x-100 hover:scale-[1.05] " +
  "active:scale-[0.97]";

const mobileContinueLink =
  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm " +
  "font-semibold text-warm/90 cursor-pointer " +
  "transition-all duration-200 " +
  "hover:bg-warm/10 hover:text-warm " +
  "active:scale-[0.98]";

const rankingLink =
  "relative inline-flex items-center gap-2 px-3 py-2 rounded-md " +
  "text-primary font-semibold tracking-tight cursor-pointer " +
  "transition-all duration-300 ease-out " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 " +
  "before:origin-left before:scale-x-0 before:bg-primary/50 " +
  "before:transition-all before:duration-300 " +
  "hover:text-primary hover:before:scale-x-100 hover:scale-[1.05] " +
  "active:scale-[0.97]";

const mobileRankingLink =
  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm " +
  "font-semibold text-primary cursor-pointer " +
  "transition-all duration-200 " +
  "hover:bg-primary/10 hover:text-primary " +
  "active:scale-[0.98]";

const linkClass = (isActive) => [baseLink, isActive && activeLink];

const mobileLinkBase =
  "block px-4 py-2.5 rounded-xl text-sm font-medium text-text/90 transition-all " +
  "hover:bg-primary/5 hover:text-primary/90 cursor-pointer";

const mobileLinkActive = "bg-primary/10 text-primary font-semibold shadow-sm";

const mobileSectionHeader =
  "text-xs font-semibold tracking-wide text-text/60 uppercase pl-1";

const mobileNavWrapper =
  "space-y-2 p-3 rounded-xl bg-card/40 border border-border/40 backdrop-blur-sm";

const btnBase =
  "inline-flex items-center whitespace-nowrap rounded-full font-semibold transition-all cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-[0.96]";

const btnPrimary =
  btnBase +
  " px-4 py-2 bg-linear-to-r from-primary to-secondary text-white shadow-sm hover:shadow-lg hover:brightness-110 hover:scale-[1.03]";

const btnGhost =
  btnBase +
  " px-3 py-2 border border-primary/70 text-primary hover:bg-primary/10 hover:scale-[1.03]";

const btnWarm =
  btnBase +
  " px-4 py-2 bg-linear-to-r from-warm to-warm-light text-white shadow-sm hover:shadow-lg hover:brightness-110 hover:scale-[1.03]";

const btnWarmGhost =
  btnBase +
  " px-3 py-2 border border-warm/70 text-warm hover:bg-warm/10 hover:text-warm-dark hover:scale-[1.03]";
</script>

<template>
  <!-- Navbar -->
  <header
    :class="[
      'sticky top-0 z-50 border-b border-border backdrop-blur transition duration-500',
      isScrolled
        ? 'bg-card/95 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.18)]'
        : 'bg-card/70 shadow-none',
    ]"
  >
    <!-- Pasek dekoracyjny -->
    <div class="h-0.5 bg-linear-to-r from-primary via-warm to-secondary"></div>

    <!-- Właściwy pasek nawigacyjny -->
    <div
      class="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-3 sm:px-4"
    >
      <!-- Logo -->
      <a
        role="button"
        tabindex="0"
        @click.prevent="user ? router.push('/app') : scrollToTop()"
        class="text-lg font-extrabold tracking-wide text-primary transition hover:text-secondary hover:scale-[1.05] px-1 cursor-pointer"
      >
        {{ brand }}
      </a>

      <!-- Nawigacja -->
      <nav class="flex items-center gap-2 md:gap-3 text-sm ml-auto">
        <!-- Desktop: Nawigacja lub statystyki -->
        <div class="relative hidden lg:flex items-center min-h-6">
          <TransitionGroup
            name="nav-fade"
            tag="div"
            class="flex items-center gap-5"
          >
            <!-- Niezalogowany -->
            <template v-if="!user && !hideLandingSections">
              <a
                v-for="l in links"
                :key="'guest-' + l.hash"
                href="#"
                @click.prevent="goTo(l.hash)"
                :class="linkClass(active === l.hash)"
              >
                {{ l.label }}
              </a>
            </template>

            <!-- Zalogowany -->
            <template v-else-if="user && navbarStats">
              <!-- Szybkie akcje: Kontynuuj + Ranking -->
              <div key="actions" class="flex items-center gap-4">
                <!-- Kontynuuj naukę -->
                <a
                  role="button"
                  tabindex="0"
                  @click.prevent="continueLearningFromNavbar"
                  :class="continueLink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 -translate-y-[0.5px] opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>

                  <span>Kontynuuj naukę</span>
                </a>

                <!-- Ranking -->
                <RouterLink :to="{ name: ROUTE.RANKING }" :class="rankingLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 -translate-y-[0.5px] opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3v18h18M7 14v4M12 10v8M17 6v12"
                    />
                  </svg>

                  <span>Ranking</span>
                </RouterLink>
              </div>

              <!-- Mini statystyki -->
              <div
                key="stats"
                class="flex flex-col items-end pr-2 text-[11px] leading-tight"
              >
                <span
                  :key="'level-' + navbarStats.level + '-' + navbarStats.hidden"
                  class="font-semibold"
                  :class="navbarStats.hidden ? 'text-text/50' : 'text-primary'"
                >
                  Poziom {{ navbarStats.level }}
                </span>

                <span
                  v-show="!navbarStats.hidden"
                  :key="
                    'xp-streak-' +
                    navbarStats.xp +
                    '-' +
                    navbarStats.streak +
                    '-' +
                    navbarStats.hidden
                  "
                  class="mt-0.5 text-text/70 transition-opacity duration-300"
                >
                  {{ navbarStats.xp }} XP • 🔥 {{ navbarStats.streak }}
                  {{ pluralizeDay(navbarStats.streak) }}
                </span>

                <span
                  v-show="prefs.publicProfile === false"
                  key="private"
                  class="mt-0.5 text-[10px] text-text/40 italic transition-opacity duration-300"
                >
                  Profil prywatny
                </span>

                <span
                  v-show="navbarStats.hidden"
                  key="hidden"
                  class="mt-0.5 text-[10px] text-text/40 italic transition-opacity duration-300"
                >
                  Statystyki ukryte
                </span>
              </div>
            </template>
          </TransitionGroup>
        </div>

        <!-- Przełącznik motywu -->
        <ThemeToggle
          class="flex w-10 h-10 items-center justify-center mx-1 md:mx-3"
        />

        <!-- Desktop: Przyciski logowania -->
        <template v-if="!user">
          <div class="hidden lg:flex items-center gap-3">
            <a :class="btnPrimary" @click.prevent="openAuthModal(false)"
              >Zarejestruj</a
            >

            <a :class="btnGhost" @click.prevent="openAuthModal(true)"
              >Zaloguj</a
            >
          </div>
        </template>

        <!-- Desktop: Konto + Avatar -->
        <template v-else>
          <div class="hidden lg:flex items-center gap-4">
            <RouterLink :to="{ name: ROUTE.ACCOUNT }" :class="btnWarm"
              >Konto</RouterLink
            >
            <button :class="btnWarmGhost" @click="handleLogout">Wyloguj</button>

            <div
              class="h-10 w-10 rounded-full overflow-hidden border border-border shadow"
            >
              <img
                v-if="user.avatarUrl"
                :src="user.avatarUrl"
                class="w-full h-full object-cover"
              />

              <div
                v-else
                class="grid h-full w-full place-items-center bg-linear-to-br from-primary to-secondary text-white font-bold text-sm"
              >
                {{ initials }}
              </div>
            </div>
          </div>
        </template>

        <!-- Mobile: Hamburger + Avatar -->
        <div class="flex lg:hidden items-center gap-3">
          <!-- Hamburger -->
          <button
            @click="toggleMobileMenu"
            class="w-10 h-10 flex items-center justify-center p-2 rounded-lg border border-border bg-card text-text/80 hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer"
          >
            <div class="hamburger" :class="{ open: mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <!-- Avatar w mobile -->
          <div
            v-if="user"
            class="h-9 w-9 rounded-full overflow-hidden border border-border shadow"
          >
            <img
              v-if="user.avatarUrl"
              :src="user.avatarUrl"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="grid h-full w-full place-items-center bg-linear-to-br from-primary to-secondary text-white font-bold text-xs"
            >
              {{ initials }}
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <!-- Panel mobilny -->
  <Teleport to="body">
    <div class="fixed inset-0 z-9999 lg:hidden pointer-events-none">
      <!-- Tło -->
      <div
        class="absolute inset-0 bg-black/50 transition-opacity duration-300"
        :class="
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        "
        @click="toggleMobileMenu"
      ></div>

      <!-- Panel -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-250 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <aside
          v-if="mobileMenuOpen"
          class="absolute top-0 right-0 h-full w-72 bg-card border-l border-border shadow-xl p-6 flex flex-col gap-4 overflow-y-auto pointer-events-auto"
        >
          <!-- Nawigacja Landing Page -->
          <div v-if="!hideLandingSections" class="space-y-3">
            <h3 :class="mobileSectionHeader">Nawigacja</h3>

            <div :class="mobileNavWrapper">
              <a
                v-for="l in links"
                :key="l.hash"
                @click.prevent="selectMobile(l.hash)"
                :class="[mobileLinkBase, active === l.hash && mobileLinkActive]"
              >
                {{ l.label }}
              </a>
            </div>

            <!-- Separator -->
            <div class="border-t border-border/40 mt-4"></div>
          </div>

          <!-- Sekcja niezalogowanego użytkownika -->
          <div v-if="!user" class="space-y-4">
            <!-- Karta powitalna -->
            <div
              class="p-4 rounded-xl bg-card/60 border border-border/50 shadow-sm space-y-2"
            >
              <p
                class="text-xs font-semibold text-text/60 uppercase tracking-wide"
              >
                Witaj w InvestEdu 👋
              </p>

              <p class="text-sm text-text/80 leading-snug">
                Dołącz za darmo, aby śledzić swój postęp, zdobywać poziomy i
                rywalizować w rankingu.
              </p>
            </div>

            <!-- Separator -->
            <div class="border-t border-border/40"></div>

            <!-- Przyciski logowania -->
            <button
              @click="
                () => {
                  openAuthModal(false);
                  toggleMobileMenu();
                }
              "
              :class="
                btnPrimary + ' w-full text-center justify-center px-5 py-3'
              "
            >
              Zarejestruj się
            </button>

            <button
              @click="
                () => {
                  openAuthModal(true);
                  toggleMobileMenu();
                }
              "
              :class="btnGhost + ' w-full text-center justify-center px-5 py-3'"
            >
              Zaloguj się
            </button>
          </div>

          <!-- Sekcja konta -->
          <div v-else class="space-y-4 pt-2">
            <!-- Mini statystyki -->
            <div
              v-if="navbarStats"
              class="p-4 rounded-xl bg-card/60 border border-border/50 shadow-sm space-y-1"
            >
              <p
                class="text-xs font-semibold text-text/60 uppercase tracking-wide"
              >
                Moje statystyki
              </p>

              <div class="mt-2 flex justify-between text-sm text-text/90">
                <span>Poziom:</span>

                <span
                  :class="
                    navbarStats.hidden
                      ? 'text-text/50'
                      : 'font-semibold text-primary'
                  "
                >
                  {{ navbarStats.level }}
                </span>
              </div>

              <div class="flex justify-between text-sm text-text/90">
                <span>XP:</span>

                <span :class="navbarStats.hidden ? 'text-text/50' : ''">
                  {{ navbarStats.xp }}
                </span>
              </div>

              <div class="flex justify-between text-sm text-text/90">
                <span>Seria:</span>

                <span v-if="!navbarStats.hidden">
                  🔥 {{ navbarStats.streak }}
                  {{ pluralizeDay(navbarStats.streak) }}
                </span>

                <span v-else class="text-text/50">
                  {{ navbarStats.streak }}
                </span>
              </div>

              <div
                class="mt-2.5 h-1.5 w-full rounded-full bg-border/40 overflow-hidden"
              >
                <div
                  class="h-full rounded-full transition-all"
                  :class="
                    navbarStats.hidden
                      ? 'bg-border/50'
                      : 'bg-linear-to-r from-primary to-secondary'
                  "
                  :style="{
                    width: navbarStats.hidden
                      ? '100%'
                      : navbarStats.progress + '%',
                  }"
                ></div>
              </div>

              <p
                v-if="prefs.publicProfile === false && navbarStats.hidden"
                class="pt-1 text-[11px] text-text/50 italic text-right"
              >
                Profil prywatny / Statystyki ukryte
              </p>

              <p
                v-else-if="prefs.publicProfile === false"
                class="pt-1 text-[11px] text-text/50 italic text-right"
              >
                Profil prywatny
              </p>

              <p
                v-else-if="navbarStats.hidden"
                class="pt-1 text-[11px] text-text/50 italic text-right"
              >
                Statystyki ukryte
              </p>
            </div>

            <!-- Separator -->
            <div class="border-t border-border/40"></div>

            <!-- Akcje użytkownika -->
            <div :class="mobileNavWrapper">
              <!-- Ranking -->
              <RouterLink
                :to="{ name: ROUTE.RANKING }"
                @click="toggleMobileMenu"
                :class="mobileRankingLink"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v18h18M7 14v4M12 10v8M17 6v12"
                  />
                </svg>

                Ranking
              </RouterLink>

              <!-- Kontynuuj naukę -->
              <a
                @click.prevent="
                  () => {
                    continueLearningFromNavbar();
                    toggleMobileMenu();
                  }
                "
                :class="mobileContinueLink"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                Kontynuuj naukę
              </a>
            </div>

            <!-- Separator -->
            <div class="border-t border-border/40"></div>

            <!-- Przyciski konta -->
            <RouterLink
              :to="{ name: ROUTE.ACCOUNT }"
              @click="toggleMobileMenu"
              :class="
                btnWarm + ' w-full text-center justify-center px-5 py-3 block'
              "
            >
              Konto
            </RouterLink>

            <button
              @click="
                () => {
                  handleLogout();
                  toggleMobileMenu();
                }
              "
              :class="
                btnWarmGhost + ' w-full text-center justify-center px-5 py-3'
              "
            >
              Wyloguj
            </button>
          </div>
        </aside>
      </Transition>
    </div>
  </Teleport>

  <!-- Popup i modal logowania -->
  <AuthPopup
    v-if="showAuthPopup"
    @open-auth="handlePopupAuth"
    @close="
      () => {
        showAuthPopup = false;
        unlockScroll();
      }
    "
  />

  <AuthModal
    v-if="showAuthModal"
    :is-login="isLoginMode"
    @close="
      () => {
        showAuthModal = false;
        unlockScroll();
      }
    "
  />
</template>
