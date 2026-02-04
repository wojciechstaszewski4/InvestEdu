// src/data/quizzes/module1-course2-chapter3.js

export default {
  id: "m1c2ch3",
  title: "Fundusze inwestycyjne",
  difficulty: "łatwy",

  questions: [
    {
      id: 1,
      type: "radio",
      text: "Jak działa fundusz inwestycyjny?",
      answers: [
        "Łączy środki wielu inwestorów i inwestuje je zbiorczo",
        "Gwarantuje stały zysk",
        "Pracuje tylko w obligacjach",
        "Jest prywatnym kontem bankowym",
      ],
      correctIndex: 0,
      explanation:
        "Fundusz pozwala inwestować grupowo i korzystać z wiedzy zarządzających.",
    },

    {
      id: 2,
      type: "radio",
      text: "Czym różni się TFI od ETF-a?",
      answers: [
        "TFI ma zarządzanie aktywne, ETF zazwyczaj pasywne",
        "TFI jest notowane na giełdzie",
        "ETF nie pobiera opłat",
        "ETF nie inwestuje na rynkach zagranicznych",
      ],
      correctIndex: 0,
      explanation:
        "TFI = zarządzający decyduje o portfelu. ETF = odwzorowanie indeksu.",
    },

    {
      id: 3,
      type: "radio",
      text: "Co oznacza opłata za zarządzanie?",
      answers: [
        "Stały koszt pobierany przez fundusz",
        "Prowizję maklerską",
        "Podatek",
        "Dodatkową opłatę za zakupy jednostek",
      ],
      correctIndex: 0,
      explanation: "Opłaty te obniżają realny zwrot funduszu.",
    },

    {
      id: 4,
      type: "matching",
      text: "Połącz typ funduszu z jego charakterystyką.",
      pairs: [
        {
          left: "Fundusz akcyjny",
          right: "Wysokie ryzyko i wysoki potencjał zysku",
        },
        {
          left: "Fundusz obligacyjny",
          right: "Niższe ryzyko i stabilniejsze wyniki",
        },
        {
          left: "ETF",
          right: "Odwzorowuje indeks giełdowy",
        },
        {
          left: "TFI aktywne",
          right: "Portfel zarządzany przez specjalistów",
        },
      ],
      explanation:
        "Różne fundusze mają różny poziom ryzyka i sposób zarządzania.",
    },

    {
      id: 5,
      type: "radio",
      text: "Fundusze obligacyjne są zwykle:",
      answers: [
        "Mniej ryzykowne niż fundusze akcyjne",
        "Tak samo ryzykowne",
        "Bardziej ryzykowne",
        "Niezgodne z prawem UE",
      ],
      correctIndex: 0,
      explanation:
        "Obligacje są mniej zmienne niż akcje, więc fundusze obligacyjne są bezpieczniejsze.",
    },
  ],
};
