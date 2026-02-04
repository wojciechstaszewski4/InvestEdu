// src/data/quizzes/module3-course1-chapter1.js

export default {
  id: "m3c1ch1",
  title: "Wprowadzenie do finansów przedsiębiorstwa",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jaki jest główny cel finansów przedsiębiorstwa?",
      answers: [
        "Maksymalizacja wartości firmy dla akcjonariuszy",
        "Minimalizacja kosztów niezależnie od skutków",
        "Stały wzrost zatrudnienia",
        "Zwiększanie liczby produktów",
      ],
      correctIndex: 0,
      explanation:
        "Celem finansów jest maksymalizacja wartości przedsiębiorstwa, nie tylko krótkoterminowego zysku.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza pojęcie 'struktura kapitału'?",
      answers: [
        "Podział finansowania na kapitał własny i dług",
        "Liczbę pracowników w firmie",
        "Wartość maszyn i urządzeń",
        "Rodzaje produktów w ofercie",
      ],
      correctIndex: 0,
      explanation:
        "Struktura kapitału określa proporcje między finansowaniem własnym a obcym.",
    },

    {
      id: 3,
      type: "radio",
      text: "Który dokument pokazuje wynik finansowy firmy?",
      answers: [
        "Rachunek zysków i strat",
        "Bilans",
        "Cash flow",
        "Raport roczny ESG",
      ],
      correctIndex: 0,
      explanation:
        "Rachunek zysków i strat informuje o przychodach, kosztach i wypracowanym wyniku.",
    },

    {
      id: 4,
      type: "radio",
      text: "Kapitał obrotowy netto to:",
      answers: [
        "Aktywa obrotowe minus zobowiązania krótkoterminowe",
        "Zysk netto minus koszty finansowania",
        "Kapitał własny minus amortyzacja",
        "Wartość zapasów firmy",
      ],
      correctIndex: 0,
      explanation:
        "Kapitał obrotowy pokazuje, ile firma ma środków do bieżącej działalności.",
    },

    {
      id: 5,
      type: "radio",
      text: "Który element NIE należy do finansów przedsiębiorstwa?",
      answers: [
        "Zarządzanie ryzykiem",
        "Ocena projektów inwestycyjnych",
        "Planowanie przepływów pieniężnych",
        "Projektowanie materiałów marketingowych",
      ],
      correctIndex: 3,
      explanation: "Marketing nie jest elementem finansów przedsiębiorstwa.",
    },
  ],
};
