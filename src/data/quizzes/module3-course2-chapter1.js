// src/data/quizzes/module3-course2-chapter1.js

export default {
  id: "m3c2ch1",
  title: "Wycena przedsiębiorstwa – wprowadzenie",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Głównym celem wyceny przedsiębiorstwa jest:",
      answers: [
        "Określenie wartości firmy na potrzeby inwestycyjne",
        "Ustalenie struktury organizacyjnej",
        "Wyznaczenie cen produktów",
        "Określenie wysokości podatków",
      ],
      correctIndex: 0,
      explanation:
        "Wycena pozwala inwestorom określić, ile REALNIE warta jest firma.",
    },

    {
      id: 2,
      type: "radio",
      text: "Wycena porównawcza polega na:",
      answers: [
        "Porównaniu spółki z podobnymi firmami na rynku",
        "Prognozowaniu przyszłych przepływów pieniężnych",
        "Analizie aktywów trwałych",
        "Sumowaniu kosztów produkcji",
      ],
      correctIndex: 0,
      explanation: "To metoda oparta o mnożniki i benchmarki.",
    },

    {
      id: 3,
      type: "radio",
      text: "Która metoda opiera się na przyszłych przepływach pieniężnych?",
      answers: ["DCF", "P/E", "P/BV", "EV/EBITDA"],
      correctIndex: 0,
      explanation:
        "DCF to najbardziej zaawansowana metoda wyceny fundamentalnej.",
    },

    {
      id: 4,
      type: "radio",
      text: "Który czynnik NIE wpływa na wycenę spółki?",
      answers: ["Kolor logotypu", "Zyskowność", "Ryzyko branżowe", "Marże"],
      correctIndex: 0,
      explanation: "Brand nie wpływa bezpośrednio na model wyceny.",
    },

    {
      id: 5,
      type: "radio",
      text: "Co oznacza pojęcie 'wartość godziwa'?",
      answers: [
        "Szacunkową rynkową wartość spółki",
        "Wartość księgową aktywów",
        "Wartość historyczną aktywów",
        "Minimalną cenę sprzedaży",
      ],
      correctIndex: 0,
      explanation: "Fair value to orientacyjna cena w warunkach rynkowych.",
    },
  ],
};
