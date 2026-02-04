// src/data/quizzes/module1-course1-chapter1.js

export default {
  id: "m1c1ch1",
  title: "Czym jest rynek finansowy?",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jakie jest główne zadanie rynku finansowego?",
      answers: [
        "Łączenie podmiotów mających kapitał z tymi, które go potrzebują",
        "Zapewnienie rozrywki inwestorom",
        "Gwarantowanie zysków wszystkim inwestującym",
        "Kontrolowanie cen towarów",
      ],
      correctIndex: 0,
      explanation:
        "Rynek finansowy umożliwia przepływ kapitału od oszczędzających do inwestorów i przedsiębiorstw.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który uczestnik rynku dostarcza kapitału?",
      answers: ["Inwestor", "Emitent", "Dom maklerski", "Giełda"],
      correctIndex: 0,
      explanation:
        "Inwestorzy dostarczają kapitał, który emitenci wykorzystują do finansowania działalności.",
    },

    {
      id: 3,
      type: "matching",
      text: "Połącz uczestników rynku finansowego z ich rolą.",
      pairs: [
        {
          left: "Inwestor",
          right: "Dostarcza kapitał",
        },
        {
          left: "Emitent",
          right: "Pozyskuje kapitał",
        },
        {
          left: "Giełda",
          right: "Organizuje handel",
        },
        {
          left: "Dom maklerski",
          right: "Pośredniczy w transakcjach",
        },
      ],
      explanation:
        "Każdy uczestnik rynku pełni inną funkcję, ale wszystkie są niezbędne do jego działania.",
    },

    {
      id: 4,
      type: "radio",
      text: "Rynek finansowy dzieli się m.in. na:",
      answers: [
        "Rynek pieniężny i rynek kapitałowy",
        "Rynek dóbr i usług",
        "Rynek pracy",
        "Rynek konsumencki",
      ],
      correctIndex: 0,
      explanation:
        "Rynek pieniężny obejmuje instrumenty krótkoterminowe, a kapitałowy – długoterminowe.",
    },

    {
      id: 5,
      type: "matching",
      text: "Połącz pojęcie z jego znaczeniem.",
      pairs: [
        {
          left: "Płynność",
          right: "Możliwość szybkiej sprzedaży aktywa",
        },
        {
          left: "Rynek kapitałowy",
          right: "Instrumenty długoterminowe",
        },
        {
          left: "Rynek pieniężny",
          right: "Instrumenty krótkoterminowe",
        },
      ],
      explanation:
        "Płynność i podział rynku pomagają ocenić ryzyko oraz czas inwestycji.",
    },
  ],
};
