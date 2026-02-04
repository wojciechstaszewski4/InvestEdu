// src/data/quizzes/module5-course3-chapter2.js

export default {
  id: "m5c3ch2",
  title: "Rebalancing czasowy i progowy",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest rebalancing czasowy?",
      answers: [
        "Przywracaniem alokacji w stałych odstępach czasu",
        "Przywracaniem alokacji tylko po spadkach",
        "Metodą analizy technicznej",
        "Losowym doborem momentu transakcji",
      ],
      correctIndex: 0,
      explanation:
        "W tym podejściu inwestor rebalansuje np. raz w roku lub kwartalnie.",
    },

    {
      id: 2,
      type: "radio",
      text: "Czym jest rebalancing progowy?",
      answers: [
        "Przywracaniem alokacji po przekroczeniu określonego odchylenia",
        "Rebalansowaniem o stałej godzinie",
        "Zmienianiem aktywów po trendzie",
        "Losową zmianą pozycji",
      ],
      correctIndex: 0,
      explanation:
        "Uruchamiany, gdy udział aktywa odjedzie np. o 5–10% od celu.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który rebalancing lepiej dostosowuje się do rynku?",
      answers: ["Progowy", "Czasowy", "Dowolny", "Żaden"],
      correctIndex: 0,
      explanation:
        "Rebalancing progowy reaguje na zmienność aktywów, a nie kalendarz.",
    },

    {
      id: 4,
      type: "radio",
      text: "Minusem rebalancingu progowego może być:",
      answers: [
        "Większa liczba transakcji",
        "Mniejsza zgodność z rynkiem",
        "Mniejsza kontrola ryzyka",
        "Brak reakcji na zmienność",
      ],
      correctIndex: 0,
      explanation:
        "W okresach dużej zmienności portfel może wymagać wielu korekt.",
    },

    {
      id: 5,
      type: "radio",
      text: "Rebalancing czasowy jest:",
      answers: [
        "Prostszy i łatwiejszy do wdrożenia",
        "Zawsze bardziej zyskowny",
        "Bardzo skomplikowany",
        "Skierowany tylko do zaawansowanych inwestorów",
      ],
      correctIndex: 0,
      explanation: "Jest szczególnie popularny w portfelach pasywnych.",
    },
  ],
};
