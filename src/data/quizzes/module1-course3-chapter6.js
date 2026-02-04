// src/data/quizzes/module1-course3-chapter6.js

export default {
  id: "m1c3ch6",
  title: "Ocena własnego profilu ryzyka",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Profil ryzyka określa:",
      answers: [
        "Jak dużą zmienność inwestor jest w stanie tolerować",
        "Maksymalny możliwy zysk",
        "Obowiązkowy rodzaj inwestycji",
        "Minimalne wpłaty na konto",
      ],
      correctIndex: 0,
      explanation: "Profil ryzyka = tolerancja na wahania cen i straty.",
    },

    {
      id: 2,
      type: "radio",
      text: "Inwestor konserwatywny preferuje:",
      answers: [
        "Obligacje i instrumenty niskiego ryzyka",
        "Kryptowaluty",
        "Spekulacyjne akcje small-cap",
        "ETF-y lewarowane",
      ],
      correctIndex: 0,
      explanation: "Konserwatywny = bezpieczeństwo ponad zysk.",
    },

    {
      id: 3,
      type: "radio",
      text: "Inwestor agresywny akceptuje:",
      answers: [
        "Duże wahania wartości portfela",
        "Tylko minimalne ryzyko",
        "Wyłącznie depozyty",
        "Brak strat",
      ],
      correctIndex: 0,
      explanation: "Agresywny inwestor ma wysoką tolerancję na zmienność.",
    },

    {
      id: 4,
      type: "radio",
      text: "Horyzont inwestycyjny wpływa na profil ryzyka:",
      answers: [
        "Im dłuższy horyzont, tym większe ryzyko można podjąć",
        "Krótki horyzont pozwala na większe ryzyko",
        "Horyzont nie ma znaczenia",
        "Długi horyzont wymaga tylko gotówki",
      ],
      correctIndex: 0,
      explanation: "Długi czas pozwala przeczekać spadki.",
    },

    {
      id: 5,
      type: "matching",
      text: "Połącz typ inwestora z charakterystyką.",
      pairs: [
        {
          left: "Konserwatywny",
          right: "Niskie ryzyko i stabilność",
        },
        {
          left: "Zbalansowany",
          right: "Połączenie akcji i obligacji",
        },
        {
          left: "Agresywny",
          right: "Wysoka zmienność i potencjał zysku",
        },
      ],
      explanation: "Profil inwestora determinuje dobór aktywów w portfelu.",
    },

    {
      id: 6,
      type: "radio",
      text: "Jak często warto oceniać swój profil ryzyka?",
      answers: [
        "Co 1–2 lata lub po dużych zmianach sytuacji życiowej",
        "Codziennie",
        "Co tydzień",
        "Nigdy - jest stały",
      ],
      correctIndex: 0,
      explanation: "Zmiany życiowe wpływają na tolerancję ryzyka.",
    },
  ],
};
