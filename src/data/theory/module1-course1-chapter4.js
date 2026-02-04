// src/data/theory/module1-course1-chapter4.js

export default {
  id: "m1c1ch4",
  title: "Stopa zwrotu i procent składany",
  content: [
    {
      heading: "Czym jest stopa zwrotu?",
      text: `
Stopa zwrotu to miara pokazująca, **ile Twoja inwestycja zarobiła lub straciła** w określonym czasie.  
Może być wyrażona jako:

- zwrot nominalny (bez uwzględnienia inflacji),
- zwrot realny (po uwzględnieniu inflacji),
- zwrot skumulowany (od początku inwestycji),
- zwrot roczny (np. CAGR).

Stopa zwrotu jest kluczowa, bo pozwala porównywać różne inwestycje - nawet te o różnym czasie trwania.
      `,
    },

    {
      heading: "Czym jest procent składany?",
      text: `
Procent składany to mechanizm, w którym **zyski generują kolejne zyski**.  
Kapitał rośnie nie tylko dzięki wpłacie początkowej, ale również dzięki zyskom, które systematycznie reinwestujesz.

Przykład:
- inwestujesz 1000 zł,
- zyskujesz 10% -> masz 1100 zł,
- w kolejnym roku zysk liczony jest od 1100 zł, nie od 1000 zł.

To właśnie dlatego Einstein nazwał procent składany „**ósmym cudem świata**”.
      `,
    },

    {
      heading: "Czym jest CAGR?",
      text: `
**CAGR (Compound Annual Growth Rate)** to średnioroczna stopa zwrotu, która uwzględnia procent składany.  
Pokazuje, jakby inwestycja rosła, gdyby każdy rok miał taki sam zwrot.

Wzór uproszczony:

\`CAGR = (Wartość końcowa / Wartość początkowa)^(1 / liczba lat) - 1\`

Dlaczego jest ważny?
- pozwala porównywać różne inwestycje,
- wygładza zmienność,
- daje realny obraz długoterminowego tempa wzrostu.
      `,
    },

    {
      heading: "Stabilność a zmienność zwrotów",
      text: `
Dwie inwestycje mogą mieć podobny **zwrot całkowity**, ale bardzo różny **CAGR**.

Przykłady:
- stabilne 7% rocznie → kapitał rośnie przewidywalnie,
- zmienne wyniki od -20% do +35% → efekt procentu składanego jest znacznie słabszy.

Dlatego inwestorzy cenią **stabilne zwroty**, bo są lepiej wykorzystywane przez procent składany.
      `,
    },

    {
      heading: "Realna stopa zwrotu",
      text: `
Realna stopa zwrotu to zysk po uwzględnieniu **inflacji**.

Przykład:
- inwestycja daje 8%,
- inflacja wynosi 6%,
- realny zwrot = 2%.

Realna stopa zwrotu pokazuje, czy Twoje pieniądze **realnie zwiększyły swoją siłę nabywczą**, czy tylko nominalnie urosły.
      `,
    },

    {
      heading: "Reguła 72",
      text: `
Reguła 72 to szybki sposób na oszacowanie, ile czasu zajmie **podwojenie kapitału** przy danej stopie zwrotu.

Wzór:
\`czas (w latach) = 72 / stopa zwrotu (%)\`

Przykład:
- zwrot 8% → 72 / 8 = 9 lat na podwojenie kapitału,
- zwrot 12% → 72 / 12 = 6 lat.

To narzędzie bardzo przydatne w planowaniu finansów osobistych.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Stopa zwrotu i procent składany to fundament inwestowania.  
Pozwalają zrozumieć, jak rośnie kapitał i jak duży wpływ ma stabilność zwrotów.

Warto zapamiętać:

- CAGR pokazuje *rzeczywiste tempo wzrostu* inwestycji.
- Procent składany działa najlepiej przy reinwestowaniu zysków i stabilnych zwrotach.
- Realna stopa zwrotu uwzględnia inflację - tylko ona pokazuje, czy naprawdę zarabiasz.
- Reguła 72 pozwala szybko obliczyć czas podwojenia kapitału.

Zrozumienie tych pojęć daje inwestorowi przewagę i pozwala podejmować lepsze decyzje.
      `,
    },
  ],
};
