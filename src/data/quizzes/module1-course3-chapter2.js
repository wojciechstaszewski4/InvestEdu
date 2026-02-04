// src/data/quizzes/module1-course3-chapter2.js

export default {
  id: "m1c3ch2",
  title: "Zmienność rynku",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Zmienność to:",
      answers: [
        "Miara wahań ceny w czasie",
        "Różnica między ceną kupna a sprzedaży",
        "Opłata za zarządzanie",
        "Suma dywidend spółki",
      ],
      correctIndex: 0,
      explanation: "Zmienność opisuje skalę i częstotliwość zmian cen aktywów.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który rynek jest najbardziej zmienny?",
      answers: [
        "Kryptowaluty",
        "Obligacje skarbowe",
        "Lokaty 6-miesięczne",
        "Rynki pieniężne",
      ],
      correctIndex: 0,
      explanation:
        "Kryptowaluty cechują się bardzo dużymi i częstymi wahaniami cen.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wysoka zmienność oznacza:",
      answers: [
        "Potencjalnie wysokie zyski, ale też straty",
        "Brak ryzyka",
        "Stałą stopę zwrotu",
        "Brak wahań ceny",
      ],
      correctIndex: 0,
      explanation:
        "Im większe wahania, tym większy potencjał, ale i większe ryzyko.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie ze znaczeniem.",
      pairs: [
        {
          left: "Zmienność",
          right: "Skala wahań ceny",
        },
        {
          left: "VIX",
          right: "Indeks oczekiwanej zmienności",
        },
        {
          left: "Rynek stabilny",
          right: "Niewielkie wahania cen",
        },
        {
          left: "Rynek turbulentny",
          right: "Duże i częste zmiany cen",
        },
      ],
      explanation:
        "Zmienność opisuje zachowanie cen, a VIX mierzy oczekiwania rynku.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co powoduje wzrost zmienności?",
      answers: [
        "Niepewność rynkowa i ważne wydarzenia makro",
        "Niski obrót",
        "Brak wiadomości ekonomicznych",
        "Niedzielne notowania",
      ],
      correctIndex: 0,
      explanation:
        "Kryzysy, decyzje banków centralnych i wojny zwiększają zmienność.",
    },
  ],
};
