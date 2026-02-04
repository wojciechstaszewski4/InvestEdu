// src/data/quizzes/module1-course1-chapter3.js

export default {
  id: "m1c1ch3",
  title: "Giełda i handel",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jakie zlecenie gwarantuje wykonanie, ale nie cenę?",
      answers: ["Market", "Limit", "Stop loss", "Stop limit"],
      correctIndex: 0,
      explanation:
        "Zlecenie market realizuje się natychmiast po najlepszej dostępnej cenie.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co oznacza spread?",
      answers: [
        "Różnicę między ceną kupna a sprzedaży",
        "Koszt prowizji",
        "Całkowitą wartość transakcji",
        "Podatek giełdowy",
      ],
      correctIndex: 0,
      explanation:
        "Spread to różnica między ceną ofertową a popytową - koszt płynności.",
    },

    {
      id: 3,
      type: "matching",
      text: "Połącz pojęcie giełdowe z jego opisem.",
      pairs: [
        {
          left: "Animator rynku",
          right: "Zapewnia płynność poprzez oferty kupna i sprzedaży",
        },
        {
          left: "Spread",
          right: "Różnica między ceną kupna i sprzedaży",
        },
        {
          left: "Wolumen",
          right: "Liczba zawartych transakcji lub jednostek",
        },
        {
          left: "Zlecenie market",
          right: "Realizowane natychmiast po cenie rynkowej",
        },
      ],
      explanation:
        "Podstawowe pojęcia giełdowe opisują sposób działania rynku i płynności.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co to jest wolumen?",
      answers: [
        "Liczba zawartych transakcji lub obróconych jednostek",
        "Cena zamknięcia sesji",
        "Wielkość spółki",
        "Podatek od transakcji",
      ],
      correctIndex: 0,
      explanation:
        "Wolumen pokazuje, jak intensywny jest handel danym instrumentem.",
    },

    {
      id: 5,
      type: "matching",
      text: "Połącz instrument z miejscem handlu.",
      pairs: [
        {
          left: "Akcje",
          right: "Giełda papierów wartościowych",
        },
        {
          left: "ETF",
          right: "Giełda jak zwykłe akcje",
        },
        {
          left: "Kontrakty terminowe",
          right: "Rynek instrumentów pochodnych",
        },
      ],
      explanation:
        "Większość instrumentów finansowych jest notowana na zorganizowanych rynkach.",
    },
  ],
};
