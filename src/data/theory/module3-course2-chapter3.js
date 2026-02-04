// src/data/theory/module3-course2-chapter3.js

export default {
  id: "m3c2ch3",
  title: "EBITDA, zyski i marże",
  content: [
    {
      heading: "Czym są miary zysku i dlaczego są ważne?",
      text: `
W analizie fundamentalnej patrzymy nie tylko na sam zysk netto,
ale na różne jego etapy (EBITDA, EBIT, marże), ponieważ każdy z nich
pokazuje inną warstwę rentowności firmy.

Miary te pomagają ocenić:
- efektywność operacyjną,
- zdolność generowania gotówki,
- wpływ zadłużenia i podatków na finalny zysk,
- różnice między firmami w tej samej branży.

Najważniejsze trzy pojęcia to: **EBITDA**, **EBIT**, **marże**.
      `,
    },

    {
      heading: "EBITDA – zysk operacyjny przed amortyzacją",
      text: `
**EBITDA** (Earnings Before Interest, Taxes, Depreciation and Amortization)  
to zysk operacyjny firmy przed odliczeniem:
- amortyzacji,
- odsetek,
- podatków.

Wzór:
\`EBITDA = EBIT + amortyzacja\`

Dlaczego jest tak popularna?
- usuwa wpływ amortyzacji (kosztu księgowego, nie gotówkowego),
- pozwala zobaczyć czystą efektywność operacyjną,
- umożliwia porównywanie firm o różnej strukturze aktywów lub zadłużeniu.

Wysoka EBITDA oznacza, że firma generuje mocną operacyjną gotówkę,
niezależnie od kosztów finansowych i podatków.

Ostrzeżenie: EBITDA **nie uwzględnia** nakładów inwestycyjnych (CAPEX),
więc może przeceniać firmy wymagające dużych inwestycji, np. energetyczne.
      `,
    },

    {
      heading: "EBIT – zysk operacyjny",
      text: `
**EBIT** (Earnings Before Interest and Taxes) to zysk operacyjny
po amortyzacji, ale przed kosztami finansowymi i podatkami.

\`EBIT = Przychody - koszty operacyjne - amortyzacja\`

EBIT pokazuje:
- jak dobrze działa biznes po uwzględnieniu realnego zużycia majątku,
- jak spółka zarabia z działalności podstawowej.

EBIT jest *bliżej realnego zysku* niż EBITDA, ale wciąż nie uwzględnia
struktury finansowania (odsetek).

Przykład różnicy:
- EBITDA może być wysoka → firma ma silne operacje,  
- ale EBIT może być niski → firma ma duże koszty amortyzacji (np. przestarzały sprzęt).
      `,
    },

    {
      heading: "Marże – klucz do zrozumienia efektywności",
      text: `
Marże pokazują **jakim procentem przychodów jest zysk** na danym etapie.

Najważniejsze marże:

1. **Marża brutto**  
   \`(Zysk brutto / przychody)\`  
   Mierzy rentowność samej sprzedaży – im wyższa, tym lepsza struktura kosztów bezpośrednich.

2. **Marża operacyjna**  
   \`(EBIT / przychody)\`  
   Pokazuje efektywność działalności operacyjnej – niskie koszty działalności = wysoka marża.

3. **Marża netto**  
   \`(Zysk netto / przychody)\`  
   To finalna rentowność firmy po wszystkich kosztach, podatkach i finansowaniu.

Interpretacje:
- **wysoka marża operacyjna** → firma świetnie kontroluje koszty działalności,
- **wysoka marża netto** → dobra rentowność całego biznesu,
- **niskie marże** → presja konkurencyjna, wysokie koszty, niskie ceny sprzedaży.

Marże najlepiej porównywać:
- w czasie dla tej samej spółki,
- do średnich w branży,
- do konkurencji o podobnym modelu biznesowym.
      `,
    },

    {
      heading: "Co wpływa na EBITDA i marże?",
      text: `
Na EBITDA wpływają przede wszystkim:
- poziom cen produktów/usług,
- koszty operacyjne (np. energia, logistyka, wynagrodzenia),
- struktura kosztów stałych,
- sezonowość sprzedaży,
- efektywność zarządzania.

Na marże wpływają dodatkowo:
- zadłużenie (przez koszty odsetkowe → wpływa na marżę netto),
- polityka podatkowa,
- amortyzacja (wpływa na EBIT i marże operacyjne).

Firmy o wysokich marżach to zwykle:
- biznesy o przewagach konkurencyjnych,
- firmy technologiczne lub software,
- spółki z wysoką automatyzacją,
- marki premium.

Firmy o niskich marżach:
- handel detaliczny,
- spółki produkcyjne niskomarżowe,
- biznesy zależne od kosztów surowców.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Najważniejsze wnioski:

- **EBITDA** pokazuje czystą moc operacyjną firmy (bez amortyzacji i podatków).  
- **EBIT** jest bardziej konserwatywny, bo uwzględnia amortyzację.  
- **Marże** mówią, która część przychodu zamienia się w zysk na różnych etapach.

Aby rzetelnie ocenić spółkę, inwestor powinien analizować **wszystkie te miary razem**, porównując je do:
- poprzednich okresów,
- firm w branży,
- średnich sektorowych.

Dopiero całość daje obraz prawdziwej rentowności przedsiębiorstwa.
      `,
    },
  ],
};
