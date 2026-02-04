// src/composables/useScrollLock.js

// Ilość aktualnych blokad scrolla (umożliwia wiele popupów naraz)
let scrollLockCount = 0;

// Blokujemy przewijanie + kompensujemy pasek scrolla
export function lockScroll() {
  if (scrollLockCount === 0) {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollBarWidth}px`
    );

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }
  scrollLockCount++;
}

// Odblokowujemy przewijanie
export function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount === 0) {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.documentElement.style.removeProperty("--scrollbar-width");
  }
}
