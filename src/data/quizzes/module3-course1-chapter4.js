// src/data/quizzes/module3-course1-chapter4.js

export default {
  id: "m3c1ch4",
  title: "Przepływy pieniężne i cash flow",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co przedstawia rachunek przepływów pieniężnych?",
      answers: [
        "Rzeczywisty ruch gotówki w firmie",
        "Wynik finansowy firmy",
        "Listę aktywów trwałych",
        "Plan podatkowy",
      ],
      correctIndex: 0,
      explanation:
        "Cash flow pokazuje, skąd pochodzi gotówka i na co została wydana.",
    },

    {
      id: 2,
      type: "radio",
      text: "Która sekcja pokazuje wpływy i wydatki wynikające z działalności podstawowej?",
      answers: [
        "Działalność operacyjna",
        "Działalność inwestycyjna",
        "Działalność finansowa",
        "Zdarzenia jednorazowe",
      ],
      correctIndex: 0,
      explanation:
        "Działalność operacyjna obejmuje główne procesy biznesowe firmy.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wydatki na zakup maszyn klasyfikuje się jako:",
      answers: [
        "Przepływy inwestycyjne",
        "Operacyjne",
        "Finansowe",
        "Nie są ujmowane w cash flow",
      ],
      correctIndex: 0,
      explanation: "Zakup majątku trwałego to typowa działalność inwestycyjna.",
    },

    {
      id: 4,
      type: "radio",
      text: "Wypłata dywidendy jest przepływem:",
      answers: ["Finansowym", "Inwestycyjnym", "Operacyjnym", "Jednorazowym"],
      correctIndex: 0,
      explanation:
        "Dywidenda to przepływ finansowy - związany z akcjonariuszami.",
    },

    {
      id: 5,
      type: "radio",
      text: "Dodatnie przepływy operacyjne oznaczają, że:",
      answers: [
        "Firma generuje gotówkę z działalności podstawowej",
        "Firma właśnie wzięła kredyt",
        "Firma sprzedała majątek trwały",
        "Firma odnotowała stratę netto",
      ],
      correctIndex: 0,
      explanation: "Najważniejszy sygnał zdrowej działalności operacyjnej.",
    },
  ],
};
