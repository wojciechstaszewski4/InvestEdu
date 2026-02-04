// src/composables/useScrollSpy.js

import { onMounted, onBeforeUnmount, ref } from "vue";

export function useScrollSpy(links, activeRef, offset = null) {
  const observer = ref(null);

  // Pobiera dynamiczną wysokość sticky headera (lub używa wartości podanej ręcznie)
  function getHeaderOffset() {
    if (offset !== null) return offset;
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 70;
  }

  // Podejmuje kolejne próby uruchomienia obserwacji, aż sekcje będą wyrenderowane
  function tryStartObserver(attempt = 0) {
    const sections = links
      .map((l) => document.querySelector(l.hash))
      .filter(Boolean);

    // Sekcje nie są dostępne -> ponawiamy próbę
    if (!sections.length) {
      if (attempt < 40) setTimeout(() => tryStartObserver(attempt + 1), 60);
      return;
    }

    startObserver(sections);
  }

  // Inicjuje IntersectionObserver z dopasowanymi ustawieniami czułości
  function startObserver(sections) {
    const headerOffset = getHeaderOffset();

    observer.value = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSection = `#${entry.target.id}`;
          }
        }

        if (visibleSection) activeRef.value = visibleSection;
      },
      {
        // Ustawienia zapewniają stabilną detekcję aktywnej sekcji
        rootMargin: `-${headerOffset + 10}px 0px -40% 0px`,
        threshold: 0.25,
      }
    );

    sections.forEach((s) => observer.value.observe(s));
  }

  // Płynnie przewija do sekcji z kompensacją wysokości sticky headera
  function goTo(hash) {
    const el = document.querySelector(hash);
    if (!el) return;

    const headerOffset = getHeaderOffset();
    const y =
      el.getBoundingClientRect().top + window.scrollY - (headerOffset + 4);

    window.scrollTo({ top: y, behavior: "smooth" });

    // Krótkie podświetlenie sekcji po przejściu
    el.classList.add("flash-once");
    el.addEventListener(
      "animationend",
      () => el.classList.remove("flash-once"),
      { once: true }
    );
  }

  // Restartuje obserwację (po zmianie treści lub powrocie na stronę)
  function restart() {
    observer.value?.disconnect();
    tryStartObserver();
  }

  // Inicjuje ScrollSpy po zamontowaniu komponentu
  onMounted(() => {
    tryStartObserver();
  });

  // Usuwa obserwatora przy odmontowaniu komponentu
  onBeforeUnmount(() => observer.value?.disconnect());

  return { goTo, restart };
}
