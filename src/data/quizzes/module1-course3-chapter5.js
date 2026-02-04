// src/data/quizzes/module1-course3-chapter5.js

export default {
  id: "m1c3ch5",
  title: "Podstawy budowy portfela",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest celem budowy portfela inwestycyjnego?",
      answers: [
        "Osiągnięcie najlepszego stosunku zwrotu do ryzyka",
        "Uzyskanie najwyższego możliwego zysku",
        "Kupno jak największej liczby aktywów",
        "Brak konieczności dywersyfikacji",
      ],
      correctIndex: 0,
      explanation:
        "Celem portfela jest efektywność - maksymalny zwrot przy akceptowalnym ryzyku.",
    },

    {
      id: 2,
      type: "radio",
      text: "Portfel 60/40 składa się z:",
      answers: [
        "60% akcji, 40% obligacji",
        "60% złota, 40% akcji",
        "60% surowców, 40% akcji",
        "60% nieruchomości, 40% gotówki",
      ],
      correctIndex: 0,
      explanation:
        "To klasyczny portfel defensywny, łączący wzrost i stabilność.",
    },

    {
      id: 3,
      type: "radio",
      text: "Czym jest rebalancing?",
      answers: [
        "Przywracaniem pierwotnych proporcji portfela",
        "Kupnem losowych aktywów",
        "Oczekiwaniem na wzrost rynku",
        "Podwajaniem pozycji",
      ],
      correctIndex: 0,
      explanation: "Rebalancing utrzymuje ryzyko portfela na stałym poziomie.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz strategię z jej opisem.",
      pairs: [
        {
          left: "Portfel 60/40",
          right: "Akcje + obligacje dla stabilnego wzrostu",
        },
        {
          left: "DCA",
          right: "Regularne inwestowanie stałej kwoty",
        },
        {
          left: "Rebalancing",
          right: "Przywracanie proporcji portfela",
        },
        {
          left: "Dywersyfikacja",
          right: "Rozłożenie ryzyka na różne aktywa",
        },
      ],
      explanation:
        "Strategie portfelowe pomagają kontrolować ryzyko i emocje inwestora.",
    },

    {
      id: 5,
      type: "radio",
      text: "Strategia DCA polega na:",
      answers: [
        "Regularnym inwestowaniu stałej kwoty",
        "Kupnie wszystkiego naraz",
        "Wybieraniu tylko tanich spółek",
        "Kupowaniu po dużych wzrostach",
      ],
      correctIndex: 0,
      explanation: "DCA zmniejsza ryzyko wejścia w złym momencie rynkowym.",
    },
  ],
};
