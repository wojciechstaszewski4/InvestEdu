// src/data/modules.js

// Import mapy
import { modulesMap } from "./map";

// -------------
// ŹRÓDŁA WIEDZY
// -------------

// Moduł 1 - Podstawy inwestowania
//    Bodie, Kane, Marcus - "Investments"
//    Malkiel - "A Random Walk Down Wall Street"
//    Bernstein - "The Four Pillars of Investing"

// Moduł 2 - Analiza techniczna
//    Murphy - "Technical Analysis of the Financial Markets"
//    Pring - "Technical Analysis Explained"
//    Bulkowski - "Encyclopedia of Chart Patterns"

// Moduł 3 - Analiza fundamentalna
//    Penman - "Financial Statement Analysis and Security Valuation"
//    Damodaran - "Investment Valuation" + Damodaran Online

// Moduł 4 - Psychologia inwestora
//    Kahneman - "Thinking, Fast and Slow"
//    Montier - "The Little Book of Behavioral Investing"

// Moduł 5 - Zarządzanie ryzykiem
//    Jorion - "Value at Risk"
//    Taleb - "Antifragile"

// Źrodła uniwersalne
//    CFA Institute Research & Curriculum
//    Investopedia - źródło pomocnicze
//    OECD & BIS - raporty finansowe
//    Federal Reserve / ECB - materiały edukacyjne

// -----------------------------
// Definicje modułów (statyczne)
// -----------------------------

export const modules = [
  {
    id: 1,
    name: "Podstawy inwestowania",
    difficulty: "Początkujący",
    desc: "Fundamenty rynków, instrumentów i ryzyka.",
    longDesc:
      "Poznasz główne klasy aktywów, sposób działania giełd oraz kluczowe pojęcia jak zwrot, zmienność czy dywersyfikacja. Moduł prowadzi od podstaw do zbudowania pierwszego, świadomego portfela.",
    cta: "Start",
  },

  {
    id: 2,
    name: "Analiza techniczna",
    difficulty: "Średnio zaawansowany",
    desc: "Trend, formacje, wskaźniki i timing.",
    longDesc:
      "Dowiesz się, jak identyfikować trend, wyznaczać kluczowe poziomy oraz oceniać miejsca wejścia i wyjścia. Moduł obejmuje price action, strukturę rynku i praktyczne wykorzystanie wielu interwałów.",
    cta: "Start",
  },

  {
    id: 3,
    name: "Analiza fundamentalna",
    difficulty: "Średnio zaawansowany",
    desc: "Wyceny, mnożniki i sprawozdania.",
    longDesc:
      "Zrozumiesz bilans, rachunek wyników i przepływy pieniężne oraz nauczysz się wykorzystywać wskaźniki, mnożniki i modele wycen do oceny kondycji spółek. Moduł pokazuje fundamenty podejmowania decyzji inwestycyjnych.",
    cta: "Start",
  },

  {
    id: 4,
    name: "Psychologia inwestora",
    difficulty: "Każdy poziom",
    desc: "Biasy, dyscyplina i proces.",
    longDesc:
      "Poznasz mechanizmy psychologiczne wpływające na decyzje: FOMO, strach, pewność siebie i inne błędy poznawcze. Dowiesz się, jak budować dyscyplinę, proces oraz stabilne nawyki inwestycyjne.",
    cta: "Start",
  },

  {
    id: 5,
    name: "Zarządzanie ryzykiem",
    difficulty: "Zaawansowany",
    desc: "Pozycjonowanie, drawdown i rebalancing.",
    longDesc:
      "Nauczysz się ustalania wielkości pozycji, pracy z korelacjami oraz kontroli obsunięć kapitału. Poznasz metody rebalancingu i narzędzia, które pomagają utrzymać portfel stabilny oraz odporny na zmienność rynku.",
    cta: "Start",
  },
];

// --------------------------------------------------------
// Dynamiczne metadane modułu - liczone na podstawie map.js
// --------------------------------------------------------

export function computeModuleMeta(moduleId) {
  const module = modulesMap[moduleId];
  const moduleInfo = modules.find((m) => m.id === moduleId);

  if (!module) return null;

  // Sumujemy liczbę rozdziałów
  const chapters = Object.values(module.chapters).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  // Sumujemy ETA z kursów
  const etaMin = module.courses.reduce((sum, c) => sum + (c.etaMin || 0), 0);

  return {
    chapters,
    etaMin,
    difficulty: moduleInfo?.difficulty || "Brak danych",
  };
}
