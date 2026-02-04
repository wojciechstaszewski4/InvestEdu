// src/data/quizzes/module5-course3-chapter1.js

export default {
  id: "m5c3ch1",
  title: "Czym jest rebalancing?",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest głównym celem rebalancingu portfela?",
      answers: [
        "Przywrócenie docelowej alokacji aktywów",
        "Maksymalizacja krótkoterminowego zwrotu",
        "Zmniejszenie liczby transakcji",
        "Podwojenie ekspozycji na najlepsze aktywa",
      ],
      correctIndex: 0,
      explanation:
        "Rebalancing przywraca pierwotne proporcje portfela, kontrolując ryzyko.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co jest efektem braku rebalancingu?",
      answers: [
        "Nadmierna koncentracja na aktywach rosnących",
        "Zwiększona dywersyfikacja",
        "Stała ekspozycja ryzyka",
        "Mniejsze wahania wartości portfela",
      ],
      correctIndex: 0,
      explanation:
        "Bez rebalancingu aktywa rosnące dominują portfel, zwiększając ryzyko.",
    },

    {
      id: 3,
      type: "radio",
      text: "Rebalancing jest szczególnie ważny w portfelach:",
      answers: [
        "Długoterminowych",
        "Dziennych spekulacyjnych",
        "Scalpingowych",
        "Z pojedynczym aktywem",
      ],
      correctIndex: 0,
      explanation:
        "W długim terminie rebalancing utrzymuje stabilny profil ryzyka.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co sprawia, że rebalancing ma sens w praktyce?",
      answers: [
        "Różna dynamika wzrostu różnych klas aktywów",
        "Jednakowe zachowanie wszystkich aktywów",
        "Brak korelacji między rynkami",
        "Zawsze rosnące obligacje",
      ],
      correctIndex: 0,
      explanation:
        "Różne aktywa rosną i spadają w innym tempie - stąd potrzeba korekty udziałów.",
    },

    {
      id: 5,
      type: "radio",
      text: "Rebalancing można uznać za:",
      answers: [
        "Strategię kontroli ryzyka",
        "Metodę agresywnego tradingu",
        "Model analizy technicznej",
        "Formę optymalizacji podatkowej",
      ],
      correctIndex: 0,
      explanation:
        "Jego podstawą jest utrzymanie ryzyka na stałym, zaplanowanym poziomie.",
    },
  ],
};
