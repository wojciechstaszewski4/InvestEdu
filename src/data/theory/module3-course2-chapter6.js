// src/data/theory/module3-course2-chapter6.js

export default {
  id: "m3c2ch6",
  title: "Porównywanie spółek – analiza względna",
  content: [
    {
      heading: "Na czym polega analiza względna?",
      text: `
Analiza względna (relative valuation) polega na **porównywaniu spółki do innych firm działających w tej samej branży** lub do średnich sektorowych.  
Zamiast prognozować przyszłe przepływy jak w modelu DCF, wykorzystuje się wskaźniki rynkowe, które pokazują, jak rynek wycenia podobne przedsiębiorstwa.

Najczęściej porównywane elementy:
- wskaźniki wyceny (P/E, EV/EBITDA, P/BV, P/S),
- dynamika przychodów i zysków,
- rentowność (ROE, ROA, marże),
- zadłużenie,
- wielkość i charakterystyka branży.

Celem jest ocena, czy spółka jest **droższa, tańsza, lepsza lub gorsza** od konkurentów.
      `,
    },

    {
      heading: "Dlaczego EV/EBITDA jest najlepszy dla branż kapitałochłonnych?",
      text: `
W sektorach kapitałochłonnych (np. przemysł, energetyka, logistyka) firmy mają duże różnice w:
- strukturze finansowania,
- poziomie amortyzacji,
- wartości aktywów trwałych.

Dlatego wskaźniki bazujące wyłącznie na zysku netto (np. P/E) mogą być zniekształcone.

**EV/EBITDA** jest neutralny względem:
- struktury kapitału (uwzględnia dług),
- amortyzacji,
- polityki podatkowej.

Dzięki temu lepiej porównuje efektywność operacyjną firm o zupełnie innej strukturze bilansu.
      `,
    },

    {
      heading: "Interpretacja różnic we wskaźnikach - co oznacza wysoki P/E?",
      text: `
Spółka może mieć **wyższy P/E niż konkurencja**, jeśli:
- rynek oczekuje szybszego wzrostu przychodów i zysków,
- firma ma przewagi konkurencyjne (np. silna marka, technologia),
- branża ma wysokie perspektywy wzrostu,
- rynek zakłada poprawę wyników w przyszłości.

Wysoki P/E ≠ przewartościowanie - może oznaczać **premię za jakość**.  
Niski P/E również nie zawsze oznacza okazję - bywa sygnałem problemów.
      `,
    },

    {
      heading: "Dlaczego trzeba normalizować dane?",
      text: `
Aby porównać spółki w sposób rzetelny, dane muszą być **porównywalne w czasie i zakresie**.

Najczęstsze normalizacje:
- ujednolicenie roku finansowego (niektóre spółki raportują np. rok 2023/24),
- uwzględnienie zdarzeń jednorazowych (np. odpisy, sprzedaż aktywów),
- dostosowanie danych do waluty (USD vs PLN),
- korekta o różnice w standardach księgowych (IFRS vs US GAAP).

Bez normalizacji analiza względna może prowadzić do fałszywych wniosków.
      `,
    },

    {
      heading: "Kiedy analiza względna jest najbardziej użyteczna?",
      text: `
Analiza porównawcza sprawdza się szczególnie, gdy:

- **chcemy szybko oszacować wartość spółki**, np. na podstawie średniego EV/EBITDA branży,
- oceniamy, czy firma jest atrakcyjna względem konkurencji,
- porównujemy spółki z jednego sektora pod kątem inwestycyjnym,
- analizujemy rynek dynamiczny, gdzie DCF byłby zbyt niepewny,
- oceniamy uczciwość wyceny przy fuzjach, przejęciach, IPO.

To jedna z najpraktyczniejszych i najczęściej stosowanych metod, bo opiera się na bieżącej wycenie rynkowej.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Analiza względna jest szybkim i praktycznym sposobem określania wartości spółki na tle rynku.

Najważniejsze zasady:
- porównujemy spółki o podobnym profilu i w tej samej branży,
- wskaźniki muszą być normalizowane i dotyczyć tych samych okresów,
- EV/EBITDA jest najbardziej uniwersalny dla branż kapitałochłonnych,
- wysoki P/E może oznaczać wzrost, a niski - ryzyko,
- analiza względna świetnie uzupełnia (ale nie zastępuje) wyceny DCF.

To kluczowe narzędzie każdego inwestora analizującego spółki publiczne.
      `,
    },
  ],
};
