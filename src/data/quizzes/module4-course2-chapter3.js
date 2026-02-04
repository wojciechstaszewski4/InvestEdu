// src/data/quizzes/module4-course2-chapter3.js

export default {
  id: "m4c2ch3",
  title: "Awersja do strat w praktyce",
  difficulty: "średni",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Dlaczego inwestorzy trzymają stratne pozycje zbyt długo?",
      answers: [
        "Bo nie chcą „zrealizować” straty",
        "Bo rynek zawsze wraca",
        "Bo to najlepsza strategia",
        "Bo tak zaleca analiza techniczna",
      ],
      correctIndex: 0,
      explanation:
        "Psychicznie łatwiej odłożyć stratę na później, licząc na odbicie.",
    },

    {
      id: 2,
      type: "radio",
      text: "Awersja do strat powoduje:",
      answers: [
        "Szybką realizację zysków i trzymanie strat",
        "Trzymanie zysków",
        "Zwiększenie dywersyfikacji",
        "Zmniejszenie ryzyka",
      ],
      correctIndex: 0,
      explanation:
        "Inwestor blokowany strachem zamyka dobre pozycje, a złe utrzymuje.",
    },

    {
      id: 3,
      type: "radio",
      text: "Jakie działanie redukuje awersję do strat?",
      answers: [
        "Ustalanie stop-lossów przed wejściem w pozycję",
        "Unikanie wykresów",
        "Kupowanie większej liczby akcji",
        "Poleganie tylko na intuicji",
      ],
      correctIndex: 0,
      explanation:
        "Decyzja o ryzyku powinna być podjęta wcześniej - nie w trakcie stresu.",
    },

    {
      id: 4,
      type: "radio",
      text: "Która sytuacja jest przykładem awersji do strat?",
      answers: [
        "„Jeszcze poczekam, nie mogę sprzedać na minusie…”",
        "Realizacja zysku zgodnie z planem",
        "Wchodzenie w ETF",
        "Analiza raportu finansowego",
      ],
      correctIndex: 0,
      explanation:
        "Unikanie realizacji straty to klasyczna manifestacja loss aversion.",
    },

    {
      id: 5,
      type: "radio",
      text: "Awersja do strat jest silniejsza niż zadowolenie z zysków w proporcji:",
      answers: ["ok. 2:1", "1:1", "5:1", "0.5:1"],
      correctIndex: 0,
      explanation:
        "Straty bolą około dwa razy bardziej niż cieszą zyski tej samej wartości - Kahneman i Tversky.",
    },
  ],
};
