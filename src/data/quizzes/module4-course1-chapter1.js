// src/data/quizzes/module4-course1-chapter1.js

export default {
  id: "m4c1ch1",
  title: "Psychologia decyzji inwestycyjnych",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest głównym założeniem finansów behawioralnych?",
      answers: [
        "Inwestorzy często działają nielogicznie i emocjonalnie",
        "Inwestorzy zawsze podejmują racjonalne decyzje",
        "Rynek jest całkowicie przewidywalny",
        "Decyzje inwestycyjne zależą wyłącznie od danych finansowych",
      ],
      correctIndex: 0,
      explanation:
        "Finanse behawioralne badają, dlaczego inwestorzy podejmują nieracjonalne decyzje.",
    },

    {
      id: 2,
      type: "radio",
      text: "Który czynnik NAJCZĘŚCIEJ prowadzi do błędów inwestora?",
      answers: [
        "Emocje",
        "Brak wiedzy technicznej",
        "Zbyt niskie saldo",
        "Koszty transakcyjne",
      ],
      correctIndex: 0,
      explanation:
        "Emocje (strach, chciwość, euforia) silnie wpływają na jakość decyzji.",
    },

    {
      id: 3,
      type: "radio",
      text: "Dlaczego inwestorzy często przeceniają własne umiejętności?",
      answers: [
        "Zjawisko overconfidence",
        "Zbyt mała liczba danych",
        "Efekt skali",
        "Przewaga informacyjna",
      ],
      correctIndex: 0,
      explanation:
        "Overconfidence bias to nadmierna wiara inwestora w swoje zdolności.",
    },

    {
      id: 4,
      type: "radio",
      text: "Jaką rolę pełnią heurystyki w procesie inwestycyjnym?",
      answers: [
        "Ułatwiają szybkie podejmowanie decyzji, ale prowadzą do błędów",
        "Gwarantują poprawność decyzji",
        "Stosują je wyłącznie profesjonaliści",
        "Eliminują ryzyko",
      ],
      correctIndex: 0,
      explanation:
        "Heurystyki to uproszczone reguły - przyspieszają decyzje, ale powodują uproszczenia i błędy.",
    },

    {
      id: 5,
      type: "radio",
      text: "Kiedy inwestorzy najczęściej podejmują złe decyzje?",
      answers: [
        "W silnych emocjach lub stresie",
        "Podczas spokojnego trendu",
        "W weekend",
        "Gdy rynek nie zmienia się przez wiele tygodni",
      ],
      correctIndex: 0,
      explanation: "Emocje (panika, euforia) powodują impulsywne transakcje.",
    },
  ],
};
