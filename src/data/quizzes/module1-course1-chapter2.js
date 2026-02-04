// src/data/quizzes/module1-course1-chapter2.js

export default {
  id: "m1c1ch2",
  title: "Aktywa - definicje i rodzaje",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Czym jest aktywo finansowe?",
      answers: [
        "Prawem do przyszłych przepływów pieniężnych",
        "Rzeczą materialną jak nieruchomość",
        "Zawsze stabilnym źródłem zysku",
        "Dokumentem bez wartości",
      ],
      correctIndex: 0,
      explanation:
        "Aktywa finansowe reprezentują prawo do przyszłych dochodów, np. akcja lub obligacja.",
    },

    {
      id: 2,
      type: "radio",
      text: "Które z poniższych jest przykładem aktywa realnego?",
      answers: ["Nieruchomość", "Akcja", "Obligacja", "Kontrakt ETF"],
      correctIndex: 0,
      explanation:
        "Aktywa realne to dobra materialne, takie jak nieruchomości, ziemia czy maszyny.",
    },

    {
      id: 3,
      type: "matching",
      text: "Połącz rodzaj aktywa z jego cechą.",
      pairs: [
        {
          left: "Aktywa finansowe",
          right: "Nie mają fizycznej postaci",
        },
        {
          left: "Aktywa realne",
          right: "Są dobrami materialnymi",
        },
        {
          left: "Akcje",
          right: "Reprezentują udział w spółce",
        },
        {
          left: "Obligacje",
          right: "Są formą długu",
        },
      ],
      explanation:
        "Podział aktywów pomaga zrozumieć różnice w ryzyku i sposobie inwestowania.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który rodzaj aktywów zwykle cechuje się największą zmiennością?",
      answers: [
        "Akcje",
        "Gotówka",
        "Lokata bankowa",
        "Obligacje skarbowe krótkoterminowe",
      ],
      correctIndex: 0,
      explanation:
        "Akcje są bardziej zmienne niż inne popularne instrumenty finansowe.",
    },

    {
      id: 5,
      type: "matching",
      text: "Połącz pojęcie z jego znaczeniem.",
      pairs: [
        {
          left: "Dywersyfikacja",
          right: "Rozłożenie inwestycji na różne aktywa",
        },
        {
          left: "Korelacja",
          right: "Zależność zmian cen aktywów",
        },
        {
          left: "Niska korelacja",
          right: "Zmniejsza ryzyko portfela",
        },
      ],
      explanation:
        "Zrozumienie korelacji i dywersyfikacji jest kluczowe w budowie portfela.",
    },
  ],
};
