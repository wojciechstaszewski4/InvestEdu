// src/data/quizzes/module1-course3-chapter4.js

export default {
  id: "m1c3ch4",
  title: "Korelacje między aktywami",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Korelacja mierzy:",
      answers: [
        "Jak aktywa poruszają się względem siebie",
        "Koszty transakcyjne",
        "Rentowność obligacji",
        "Dywidendy",
      ],
      correctIndex: 0,
      explanation:
        "Korelacja opisuje zależność ruchów cen między dwoma aktywami.",
    },

    {
      id: 2,
      type: "radio",
      text: "Korelacja -1 oznacza:",
      answers: [
        "Aktywa poruszają się w przeciwnych kierunkach",
        "Aktywa są identyczne",
        "Brak zależności",
        "Silną zależność dodatnią",
      ],
      correctIndex: 0,
      explanation:
        "Ujemna korelacja oznacza, że gdy jedno aktywo rośnie, drugie spada.",
    },

    {
      id: 3,
      type: "radio",
      text: "Korelacja 0 oznacza:",
      answers: [
        "Brak zależności",
        "Przeciwny ruch aktywów",
        "Idealne dopasowanie",
        "Zależność liniową",
      ],
      correctIndex: 0,
      explanation: "Aktywa nie wykazują powiązanych ruchów cenowych.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz poziom korelacji z jego znaczeniem.",
      pairs: [
        {
          left: "+1",
          right: "Aktywa poruszają się identycznie",
        },
        {
          left: "0",
          right: "Brak zależności między aktywami",
        },
        {
          left: "-1",
          right: "Aktywa poruszają się przeciwnie",
        },
        {
          left: "Niska korelacja",
          right: "Lepsza dywersyfikacja portfela",
        },
      ],
      explanation:
        "Znajomość korelacji pozwala skuteczniej ograniczać ryzyko portfela.",
    },

    {
      id: 5,
      type: "radio",
      text: "Dlaczego korelacje są ważne?",
      answers: [
        "Pozwalają budować stabilny portfel",
        "Określają koszt ETF",
        "Wskazują na poziom dywidend",
        "Decydują o podatku Belki",
      ],
      correctIndex: 0,
      explanation:
        "Niska korelacja między aktywami zmniejsza zmienność portfela.",
    },
  ],
};
