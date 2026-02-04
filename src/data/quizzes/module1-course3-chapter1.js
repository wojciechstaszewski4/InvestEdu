// src/data/quizzes/module1-course3-chapter1.js

export default {
  id: "m1c3ch1",
  title: "Czym jest ryzyko?",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Ryzyko inwestycyjne można najlepiej opisać jako:",
      answers: [
        "Możliwość, że wynik inwestycji będzie inny niż oczekiwany",
        "Gwarancję straty",
        "Zawsze możliwość dużego zysku",
        "Brak zmienności na rynku",
      ],
      correctIndex: 0,
      explanation:
        "Ryzyko to nie tylko możliwość straty, ale również odchylenie od oczekiwań.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który rodzaj ryzyka dotyczy całego rynku?",
      answers: [
        "Ryzyko systemowe",
        "Ryzyko specyficzne",
        "Ryzyko operacyjne firmy",
        "Ryzyko zarządcze",
      ],
      correctIndex: 0,
      explanation:
        "Ryzyko systemowe obejmuje czynniki makroekonomiczne i globalne.",
    },

    {
      id: 3,
      type: "radio",
      text: "Ryzyko specyficzne można ograniczyć:",
      answers: [
        "Dywersyfikacją portfela",
        "Kupnem jednej spółki",
        "Za pomocą obligacji krótkoterminowych",
        "Zmianą konta maklerskiego",
      ],
      correctIndex: 0,
      explanation:
        "Dywersyfikacja zmniejsza wpływ problemów pojedynczych spółek.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz rodzaj ryzyka z jego przykładem.",
      pairs: [
        {
          left: "Ryzyko systemowe",
          right: "Kryzys finansowy",
        },
        {
          left: "Ryzyko inflacji",
          right: "Spadek siły nabywczej pieniądza",
        },
        {
          left: "Ryzyko kredytowe",
          right: "Niewypłacalność emitenta",
        },
        {
          left: "Ryzyko rynkowe",
          right: "Wahania cen aktywów",
        },
      ],
      explanation:
        "Różne rodzaje ryzyka wynikają z odmiennych źródeł zagrożeń.",
    },

    {
      id: 5,
      type: "radio",
      text: "Ryzyko a zwrot są zazwyczaj:",
      answers: [
        "Dodatnio skorelowane",
        "Ujemnie skorelowane",
        "Niezależne od siebie",
        "Zawsze odwrotne",
      ],
      correctIndex: 0,
      explanation:
        "Wyższy potencjalny zwrot zwykle wiąże się z wyższym ryzykiem.",
    },

    {
      id: 6,
      type: "radio",
      text: "Co nie jest formalną formą ryzyka inwestycyjnego?",
      answers: [
        "Ryzyko stopy procentowej",
        "Ryzyko inflacji",
        "Ryzyko humoru inwestora",
        "Ryzyko kredytowe",
      ],
      correctIndex: 2,
      explanation:
        "Emocje wpływają na decyzje, ale nie są klasyfikowane jako typ ryzyka.",
    },
  ],
};
