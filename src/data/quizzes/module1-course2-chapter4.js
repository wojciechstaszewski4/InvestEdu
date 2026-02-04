// src/data/quizzes/module1-course2-chapter4.js

export default {
  id: "m1c2ch4",
  title: "ETF - fundusze notowane na giełdzie",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jaka jest główna zaleta ETF?",
      answers: [
        "Niskie koszty i szeroka dywersyfikacja",
        "Gwarancja zysku",
        "Brak ryzyka rynkowego",
        "Możliwość kupna tylko w banku",
      ],
      correctIndex: 0,
      explanation:
        "ETF-y umożliwiają tanie i szerokie inwestowanie w całe rynki.",
    },

    {
      id: 2,
      type: "radio",
      text: "ETF na indeks S&P 500 odwzorowuje:",
      answers: [
        "Zachowanie 500 największych spółek USA",
        "Tylko spółki technologiczne",
        "Handel surowcami",
        "Rynek obligacji",
      ],
      correctIndex: 0,
      explanation: "S&P 500 to największe firmy z rynku amerykańskiego.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza pojęcie TER?",
      answers: [
        "Roczny koszt utrzymania ETF",
        "Ryzyko walutowe",
        "Wielkość emitenta",
        "Dywidendę wypłacaną inwestorowi",
      ],
      correctIndex: 0,
      explanation: "To kluczowa miara kosztów ETF - im niższa, tym lepiej.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz typ ETF z jego charakterystyką.",
      pairs: [
        {
          left: "ETF fizyczny",
          right: "Kupuje rzeczywiste akcje lub obligacje",
        },
        {
          left: "ETF syntetyczny",
          right: "Odwzorowuje indeks przez instrumenty pochodne",
        },
        {
          left: "ETF sektorowy",
          right: "Skupia się na jednej branży",
        },
        {
          left: "ETF globalny",
          right: "Zapewnia szeroką dywersyfikację geograficzną",
        },
      ],
      explanation: "ETF-y różnią się konstrukcją i zakresem inwestycji.",
    },

    {
      id: 5,
      type: "radio",
      text: "Jaki ETF jest klasycznym przykładem dywersyfikacji?",
      answers: [
        "ETF globalny (np. MSCI World)",
        "ETF na jedną spółkę",
        "ETF na jeden sektor",
        "ETF na jedną obligację",
      ],
      correctIndex: 0,
      explanation: "MSCI World obejmuje spółki z wielu krajów i sektorów.",
    },
  ],
};
