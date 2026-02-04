// src/data/quizzes/module2-course1-chapter2.js

export default {
  id: "m2c1ch2",
  title: "Linie trendu i kanały",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jak poprawnie rysować linię trendu wzrostowego?",
      answers: [
        "Łączyć co najmniej dwa dołki (HL)",
        "Łączyć dwa szczyty (HH)",
        "Łączyć przypadkowe punkty",
        "Łączyć wolumen zamiast ceny",
      ],
      correctIndex: 0,
      explanation:
        "Linia trendu wzrostowego powinna przebiegać po kolejnych wyższych dołkach.",
    },

    {
      id: 2,
      type: "radio",
      text: "Co to jest kanał cenowy?",
      answers: [
        "Dwa równoległe poziomy ograniczające ruch ceny",
        "Formacja odwrócenia trendu",
        "Metoda obliczania wolumenu",
        "Wskaźnik techniczny podobny do RSI",
      ],
      correctIndex: 0,
      explanation:
        "Kanał cenowy to równoległe linie obejmujące ruch ceny w górę lub w dół.",
    },

    {
      id: 3,
      type: "radio",
      text: "W którym miejscu kanału trendowego najczęściej dochodzi do reakcji ceny?",
      answers: [
        "Przy górnym i dolnym ograniczeniu",
        "W centrum kanału",
        "W punkcie zerowym",
        "Na wolumenie",
      ],
      correctIndex: 0,
      explanation:
        "Krawędzie kanału są naturalnymi miejscami odbić lub wybicia.",
    },

    {
      id: 4,
      type: "radio",
      text: "Co sygnalizuje wybicie z kanału?",
      answers: [
        "Możliwą zmianę dynamiki lub kierunku trendu",
        "Powrót ceny do środka kanału",
        "Brak znaczenia dla ceny",
        "Automatyczne wejście w trend boczny",
      ],
      correctIndex: 0,
      explanation:
        "Wybicie z kanału to jeden z najważniejszych sygnałów zmiany charakteru ruchu.",
    },

    {
      id: 5,
      type: "radio",
      text: "Który interwał jest najważniejszy do wyznaczania kanałów?",
      answers: [
        "Wyższy interwał",
        "Niższy interwał",
        "1-minutowy",
        "Dowolny, nie ma to znaczenia",
      ],
      correctIndex: 0,
      explanation:
        "Kanały rysowane na wysokich interwałach wyznaczają najpewniejsze struktury.",
    },
  ],
};
