<script setup>
// Import komponentów i narzędzi
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { useUser } from "@/composables/useUser";
import { ref } from "vue";

import AccountEdit from "@/components/sections/account/AccountEdit.vue";
import AccountDelete from "@/components/sections/account/AccountDelete.vue";

// Dane użytkownika i inicjały (używane w template)
const userStore = useUser();

const user = userStore.user;
const initials = userStore.initials;

// Stan modala edycji profilu
const showEdit = ref(false);

// Stan modala usuwania konta
const showDelete = ref(false);
</script>

<template>
  <div>
    <!-- Nagłówek sekcji profilu -->
    <header
      class="rounded-2xl border border-border/80 bg-card/70 p-5 sm:p-6 shadow-sm backdrop-blur animate-fade-slide"
    >
      <div
        class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      >
        <!-- Lewa część: Avatar + Dane -->
        <div class="flex items-center gap-3 sm:gap-4 min-w-0">
          <!-- Avatar użytkownika -->
          <div
            v-if="user?.avatarUrl"
            class="h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border border-border shadow shrink-0"
          >
            <img
              :src="user?.avatarUrl"
              class="w-full h-full object-cover"
              alt="avatar"
            />
          </div>

          <!-- Avatar z inicjałami -->
          <div
            v-else
            class="grid h-14 w-14 md:h-16 md:w-16 place-items-center rounded-full bg-linear-to-br from-primary to-secondary text-white font-bold text-xl xs:text-2xl shadow-lg border border-white/10 shrink-0"
          >
            {{ initials }}
          </div>

          <!-- Informacje o użytkowniku -->
          <div class="min-w-0 flex-1">
            <div class="max-w-50 xs:max-w-xs sm:max-w-sm">
              <SectionTitle
                :title="'Panel użytkownika'"
                :subtitle="user?.email || ''"
                :center="false"
                class="text-base xs:text-lg wrap-break-word"
              />
            </div>

            <p class="mt-1 text-xs text-text/60 line-clamp-1">
              Zarządzaj profilem i postępami w nauce.
            </p>
          </div>
        </div>

        <!-- Prawa część: Przyciski akcji -->
        <div class="flex flex-wrap items-center gap-3 pt-2 sm:pt-0">
          <button
            @click="showEdit = true"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold bg-linear-to-r from-primary to-secondary text-white shadow-sm hover:brightness-110 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536M4 20h4l10.5-10.5a2.121 2.121 0 000-3L17 4.5a2.121 2.121 0 00-3 0L4 14v6z"
              />
            </svg>
            Edytuj profil
          </button>

          <button
            @click="showDelete = true"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border border-red-500/60 text-red-500 bg-red-500/5 hover:bg-red-500/15 hover:text-red-600 hover:shadow hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Usuń konto
          </button>
        </div>
      </div>
    </header>

    <!-- Modal "Edycja profilu" -->
    <AccountEdit v-if="showEdit" @close="showEdit = false" />

    <!-- Modal "Usuwanie konta" -->
    <AccountDelete
      v-if="showDelete"
      @close="showDelete = false"
      @deleted="showDelete = false"
    />
  </div>
</template>
