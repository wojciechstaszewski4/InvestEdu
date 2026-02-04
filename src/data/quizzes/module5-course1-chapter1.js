// src/data/quizzes/module5-course1-chapter1.js

export default {
  id: "m5c1ch1",
  title: "Wielkość pozycji - podstawy",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Dlaczego wielkość pozycji jest kluczowa w zarządzaniu ryzykiem?",
      answers: [
        "Bo decyduje, jak duży wpływ pojedyncza transakcja ma na cały portfel",
        "Bo gwarantuje zysk na każdej pozycji",
        "Bo określa minimalny czas trwania transakcji",
        "Bo zmienia strukturę rynku",
      ],
      correctIndex: 0,
      explanation:
        "Wielkość pozycji determinuje, jak bardzo jedna transakcja może wpłynąć na wynik całego portfela.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza pojęcie ekspozycja?",
      answers: [
        "Łączna wartość zaangażowanego kapitału w rynek",
        "Liczba transakcji wykonanych w ciągu dnia",
        "Czas trwania pozycji",
        "Procentowa zmiana ceny aktywa",
      ],
      correctIndex: 0,
      explanation:
        "Ekspozycja określa, jaka część kapitału jest aktualnie narażona na ryzyko rynkowe.",
    },

    {
      id: 3,
      type: "radio",
      text: "Jaki błąd najczęściej popełniają początkujący inwestorzy?",
      answers: [
        "Zbyt dużą wielkość pozycji względem kapitału",
        "Zbyt małe pozycje",
        "Zbyt szybkie wychodzenie z rynku",
        "Zbyt długie analizy",
      ],
      correctIndex: 0,
      explanation:
        "Zbyt duża pozycja powoduje, że jedna strata może poważnie uszkodzić portfel.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co oznacza ryzyko jednostkowe?",
      answers: [
        "Maksymalną stratę na jednej pozycji",
        "Ryzyko całego portfela",
        "Ryzyko wynikające z korelacji aktywów",
        "Ryzyko regulacyjne",
      ],
      correctIndex: 0,
      explanation:
        "Ryzyko jednostkowe to kwota lub procent kapitału, który inwestor akceptuje jako maksymalną stratę na jednej transakcji.",
    },

    {
      id: 5,
      type: "radio",
      text: "Jakie podejście jest właściwe przy budowaniu pozycji?",
      answers: [
        "Najpierw ryzyko, potem potencjalny zysk",
        "Najpierw przewidywany zysk",
        "Najpierw analiza wskaźników",
        "Najpierw intuicja inwestora",
      ],
      correctIndex: 0,
      explanation:
        "Profesjonalne zarządzanie pozycją zawsze zaczyna się od kontroli ryzyka, a dopiero potem oceny potencjalnego zysku.",
    },
  ],
};
