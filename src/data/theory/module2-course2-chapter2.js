// src/data/theory/module2-course2-chapter2.js

export default {
  id: "m2c2ch2",
  title: "RSI - Relative Strength Index",
  content: [
    {
      heading: "Czym jest RSI?",
      text: `
RSI (Relative Strength Index) to jeden z najpopularniejszych oscylatorów momentum w analizie technicznej.  
Jego głównym zadaniem jest **mierzenie siły ruchu ceny** oraz identyfikowanie momentów, w których rynek może być:

- **wykupiony** (zbyt drogi),
- **wyprzedany** (zbyt tani).

RSI porusza się w przedziale **0–100** i reaguje na dynamikę zmian ceny.
      `,
    },

    {
      heading: "Standardowe ustawienia RSI",
      text: `
Najczęściej używanym parametrem jest:

- **RSI(14)** - oznacza obliczenia na podstawie 14 ostatnich świec.

To ustawienie najlepiej balansuje między szybkością reakcji a wiarygodnością sygnałów.
      `,
    },

    {
      heading: "Wykupienie i wyprzedanie rynku",
      text: `
Klasyczna interpretacja progów RSI:

- **RSI > 70 → wykupienie**  
  Rynek jest „przegrzany”, możliwa korekta.

- **RSI < 30 → wyprzedanie**  
  Rynek może być zbyt mocno wyprzedany, możliwe odbicie.

Warto jednak pamiętać, że w *silnym trendzie* RSI może długo pozostawać wykupiony/wyprzedany i nadal nie musi dojść do odwrócenia.
      `,
    },

    {
      heading: "Dywergencje RSI",
      text: `
Dywergencja występuje, gdy:

- cena tworzy nowe **szczyty**, ale RSI ich **nie potwierdza**,  
- lub cena robi nowe **dołki**, których RSI **nie potwierdza**.

Dywergencja to sygnał ostrzegający, że momentum słabnie i może dojść do zmiany trendu.

Przykład:
- Cena: nowe HH  
- RSI: niższe szczyty  

→ możliwe odwrócenie trendu.
      `,
    },

    {
      heading: "W jakich warunkach RSI działa najlepiej?",
      text: `
RSI najlepiej sprawdza się na **rynkach bocznych**, gdzie cena porusza się w konsolidacji, a oscylacje między wykupieniem a wyprzedaniem są częstsze.

W silnych trendach RSI często bywa:

- długo wykupiony w trendzie wzrostowym,
- długo wyprzedany w trendzie spadkowym.

Dlatego w trendzie RSI jest narzędziem pomocniczym, a nie sygnałem wejścia.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
RSI to jeden z najważniejszych oscylatorów w analizie technicznej.  
Pomaga określić:

- siłę momentum,
- wykupienie/wyprzedanie,
- możliwe odwrócenia trendu (dywergencje).

Najlepiej działa **w konsolidacjach** i w połączeniu z innymi narzędziami (trend, poziomy wsparcia/oporu).  
Nie powinien być używany jako jedyne źródło sygnału.
      `,
    },
  ],
};
