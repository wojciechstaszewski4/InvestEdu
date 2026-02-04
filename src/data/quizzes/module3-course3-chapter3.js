// src/data/quizzes/module3-course3-chapter3.js

export default {
  id: "m3c3ch3",
  title: "Analiza marż, kosztów i efektywności",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Która marża najlepiej pokazuje efektywność sprzedaży?",
      answers: [
        "Marża netto",
        "Marża brutto",
        "Marża EBITDA",
        "Marża operacyjna",
      ],
      correctIndex: 0,
      explanation: "Marża netto uwzględnia wszystkie koszty i podatki.",
    },

    {
      id: 2,
      type: "radio",
      text: "Wzrost marży brutto może oznaczać:",
      answers: [
        "Poprawę efektywności produkcji",
        "Spadek rentowności",
        "Wzrost zadłużenia",
        "Zwiększenie kosztów ogólnych",
      ],
      correctIndex: 0,
      explanation: "Marża brutto odzwierciedla koszt wytworzenia.",
    },

    {
      id: 3,
      type: "radio",
      text: "Wysoki wskaźnik kosztów stałych oznacza:",
      answers: [
        "Duże ryzyko spadku rentowności przy niższej sprzedaży",
        "Niski poziom ryzyka",
        "Wysoką płynność",
        "Brak konkurencji",
      ],
      correctIndex: 0,
      explanation: "Wysokie koszty stałe mogą mocno uderzyć w zyski.",
    },

    {
      id: 4,
      type: "radio",
      text: "Wskaźnik ROA mierzy:",
      answers: [
        "Zyskowność aktywów",
        "Rentowność kapitału własnego",
        "Koszt długu",
        "Poziom zapasów",
      ],
      correctIndex: 0,
      explanation: "ROA = zysk netto / aktywa.",
    },

    {
      id: 5,
      type: "radio",
      text: "Wzrost kosztów operacyjnych przy stałych przychodach:",
      answers: [
        "Obniży marżę operacyjną",
        "Zwiększy marżę netto",
        "Poprawi efektywność firmy",
        "Zwiększy wartość księgową",
      ],
      correctIndex: 0,
      explanation: "Wyższe koszty zawsze zmniejszają rentowność.",
    },
  ],
};
