// src/data/quizzes/module1-course2-chapter2.js

export default {
  id: "m1c2ch2",
  title: "Lokaty i depozyty bankowe",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Co jest główną zaletą lokaty bankowej?",
      answers: [
        "Bezpieczeństwo dzięki BFG",
        "Wysoki potencjał zysku",
        "Brak podatku",
        "Możliwość utraty kapitału",
      ],
      correctIndex: 0,
      explanation:
        "Depozyty do 100 000 EUR są chronione przez Bankowy Fundusz Gwarancyjny.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co najczęściej jest wadą lokat?",
      answers: [
        "Niska realna stopa zwrotu przy wysokiej inflacji",
        "Brak bezpieczeństwa",
        "Wysokie opłaty",
        "Ryzyko utraty całego kapitału",
      ],
      correctIndex: 0,
      explanation:
        "Inflacja często przewyższa oprocentowanie, więc realnie tracimy.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza kapitalizacja odsetek?",
      answers: [
        "Dopisywanie odsetek do kapitału",
        "Zmniejszanie oprocentowania",
        "Zerowanie odsetek",
        "Wycofywanie środków",
      ],
      correctIndex: 0,
      explanation:
        "Im częstsza kapitalizacja, tym większy efekt procentu składanego.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz pojęcie związane z lokatami z jego znaczeniem.",
      pairs: [
        {
          left: "Lokata terminowa",
          right: "Depozyt z określonym czasem trwania",
        },
        {
          left: "Kapitalizacja",
          right: "Dopisywanie odsetek do kapitału",
        },
        {
          left: "BFG",
          right: "Instytucja gwarantująca depozyty",
        },
        {
          left: "Zerwanie lokaty",
          right: "Wypłata środków przed terminem",
        },
      ],
      explanation:
        "Znajomość podstawowych pojęć pomaga zrozumieć działanie lokat bankowych.",
    },

    {
      id: 5,
      type: "radio",
      text: "Lokata jest instrumentem:",
      answers: [
        "O niskim ryzyku i niskim zwrocie",
        "O wysokim ryzyku i niskim zwrocie",
        "O wysokim zwrocie",
        "O zmiennej stopie zwrotu",
      ],
      correctIndex: 0,
      explanation:
        "Lokata to najbezpieczniejsza forma inwestowania – ale z minimalnym potencjałem zysków.",
    },
  ],
};
