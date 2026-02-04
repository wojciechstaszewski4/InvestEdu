// src/data/quizzes/module2-course1-chapter6.js

export default {
  id: "m2c1ch6",
  title: "Kontekst rynkowy i multi-timeframe",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co oznacza analiza multi-timeframe?",
      answers: [
        "Łączenie analizy kilku interwałów czasowych",
        "Analizę wielu instrumentów naraz",
        "Wolumen na kilku giełdach",
        "Średnie kroczące z różnych rynków",
      ],
      correctIndex: 0,
      explanation:
        "Multi-timeframe to analiza jednego instrumentu na wielu interwałach.",
    },

    {
      id: 2,
      type: "radio",
      text: "Z którego interwału powinno się zaczynać analizę?",
      answers: [
        "Od najwyższego (np. W1)",
        "Od najniższego (np. M1)",
        "Od interwału średniego (H1)",
        "Nie ma znaczenia, ważne by było szybko",
      ],
      correctIndex: 0,
      explanation:
        "Najpierw patrzymy na Big Picture, dopiero potem schodzimy niżej.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza, że rynek jest w silnym trendzie na wyższym interwale?",
      answers: [
        "Niższe interwały często go tylko „szumią”",
        "Niski interwał zawsze przewraca trend",
        "Można ignorować strukturę rynku",
        "Trend przestaje istnieć na niższych interwałach",
      ],
      correctIndex: 0,
      explanation:
        "Drobne korekty na niskich interwałach nie zmieniają głównego trendu.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co jest najważniejsze w łączeniu interwałów?",
      answers: [
        "Spójność trendu i kluczowych poziomów",
        "Szybkość wykresu",
        "Kolor świec",
        "Wskaźniki wolumenowe",
      ],
      correctIndex: 0,
      explanation:
        "Ważne są kierunek trendu, strefy oraz struktura - spójne na wszystkich interwałach.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kiedy najczęściej dochodzi do fałszywych sygnałów AT?",
      answers: [
        "Gdy patrzymy tylko na niski interwał",
        "Gdy używamy wielu interwałów",
        "Gdy analizujemy tylko D1",
        "Gdy ignorujemy wolumen",
      ],
      correctIndex: 0,
      explanation: "Niski interwał generuje mnóstwo szumu i fałszywych wybici",
    },
  ],
};
