<script setup>
// Importy
import { ref } from "vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { useUser } from "@/composables/useUser";
import { showToast } from "@/composables/useToast";

// Motyw (zamiast ręcznej manipulacji DOM)
import { useTheme } from "@/composables/useTheme";

// Dane użytkownika
const { user, authUser, saveUser } = useUser();
const { theme, apply } = useTheme();

// Lokalny stan preferencji
const prefs = ref({
  emails: user.value?.preferences?.emails ?? true,
  theme: user.value?.preferences?.theme ?? "system",
  publicProfile: user.value?.preferences?.publicProfile ?? true,
  statsVisible: user.value?.preferences?.statsVisible ?? true,
  activityVisible: user.value?.preferences?.activityVisible ?? true,
});

// Flaga zapisu
const saving = ref(false);

// Przewijanie do góry
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Zapis preferencji
async function save() {
  if (!authUser.value) return;
  saving.value = true;

  try {
    // Zapis tylko zmienionych pól
    await saveUser({
      "preferences.emails": prefs.value.emails,
      "preferences.theme": prefs.value.theme,
      "preferences.publicProfile": prefs.value.publicProfile,
      "preferences.statsVisible": prefs.value.statsVisible,
      "preferences.activityVisible": prefs.value.activityVisible,
    });

    // Odświeżenie motywu
    theme.value = prefs.value.theme;
    apply();

    // Przeładowanie rankingów
    window.dispatchEvent(new Event("preferences-updated"));

    showToast("Zapisano preferencje ✨");

    scrollToTop();
  } catch (err) {
    console.error(err);
    showToast("Nie udało się zapisać zmian 😣");
  }

  saving.value = false;
}
</script>

<template>
  <section
    class="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur animate-fade-in"
  >
    <SectionTitle
      title="Preferencje"
      subtitle="Zarządzaj ustawieniami konta"
      :center="false"
      class="mb-6"
    />

    <!-- Powiadomienia -->
    <div
      class="rounded-xl border border-border/70 bg-bg/50 p-4 animate-fade-slide"
    >
      <h3 class="text-sm font-semibold text-text/90 mb-3">Powiadomienia</h3>

      <label class="inline-flex items-center gap-3 text-sm cursor-pointer px-1">
        <input
          type="checkbox"
          v-model="prefs.emails"
          class="h-4 w-4 accent-primary"
        />
        <span>Otrzymuj e-maile z aktualizacjami i postępami</span>
      </label>
    </div>

    <!-- Motyw -->
    <div
      class="mt-4 rounded-xl border border-border/70 bg-bg/50 p-4 animate-fade-slide-delay"
    >
      <h3 class="text-sm font-semibold text-text/90 mb-3">Motyw interfejsu</h3>

      <div class="flex flex-col sm:flex-row gap-3">
        <label class="inline-flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="radio"
            v-model="prefs.theme"
            value="light"
            class="accent-primary"
          />
          Jasny
        </label>

        <label class="inline-flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="radio"
            v-model="prefs.theme"
            value="dark"
            class="accent-primary"
          />
          Ciemny
        </label>

        <label class="inline-flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="radio"
            v-model="prefs.theme"
            value="system"
            class="accent-primary"
          />
          Systemowy
        </label>
      </div>
    </div>

    <!-- Prywatność -->
    <div
      class="mt-4 rounded-xl border border-border/70 bg-bg/50 p-4 animate-fade-slide-delay-2"
    >
      <h3 class="text-sm font-semibold text-text/90 mb-3">Prywatność</h3>

      <div class="flex flex-col space-y-3">
        <label
          class="inline-flex items-center gap-3 text-sm cursor-pointer px-1"
        >
          <input
            type="checkbox"
            v-model="prefs.publicProfile"
            class="h-4 w-4 accent-primary"
          />
          <span>Publiczny profil</span>
        </label>

        <label
          class="inline-flex items-center gap-3 text-sm cursor-pointer px-1"
        >
          <input
            type="checkbox"
            v-model="prefs.statsVisible"
            class="h-4 w-4 accent-primary"
          />
          <span>Pokazuj moje statystyki w rankingu</span>
        </label>

        <label
          class="inline-flex items-center gap-3 text-sm cursor-pointer px-1"
        >
          <input
            type="checkbox"
            v-model="prefs.activityVisible"
            class="h-4 w-4 accent-primary"
          />
          <span>Pokazuj ostatnią aktywność</span>
        </label>
      </div>
    </div>

    <!-- Zapis -->
    <div class="mt-6 flex justify-end animate-fade-slide-delay-2">
      <button
        @click="save"
        :disabled="saving"
        class="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow transition-all duration-300 hover:bg-secondary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 cursor-pointer"
      >
        {{ saving ? "Zapisywanie..." : "Zapisz zmiany" }}
      </button>
    </div>
  </section>
</template>
