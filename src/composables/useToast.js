// src/composables/useToast.js

// Importy z Vue
import { ref } from "vue";

// Treść toastu
export const toastMessage = ref("");

// Widoczność toastu
export const toastVisible = ref(false);

// Kolejka FIFO
const queue = [];
let isShowing = false;

// Dodanie toastu
export function showToast(message, duration = 3000) {
  queue.push({ message, duration });
  processQueue();
}

// Obsługa kolejki
function processQueue() {
  if (isShowing) return;
  if (queue.length === 0) return;

  isShowing = true;

  const { message, duration } = queue.shift();

  // Ukrycie poprzedniego
  toastVisible.value = false;

  setTimeout(() => {
    toastMessage.value = message;
    toastVisible.value = true;

    setTimeout(() => {
      toastVisible.value = false;

      setTimeout(() => {
        isShowing = false;
        processQueue();
      }, 400);
    }, duration);
  }, 300);
}
