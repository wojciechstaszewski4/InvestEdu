// src/data/theory/module3-course2-chapter4.js

export default {
  id: "m3c2ch4",
  title: "Metoda DCF – przepływy pieniężne i dyskonto",
  content: [
    {
      heading: "Czym jest metoda DCF?",
      text: `
DCF (Discounted Cash Flow) to jedna z najdokładniejszych metod wyceny przedsiębiorstwa.
Opiera się na założeniu, że **wartość firmy = suma przyszłych przepływów pieniężnych
przeliczonych na wartość dzisiejszą**.

Kluczowa idea:
Firma jest tyle warta, ile gotówki wygeneruje w przyszłości – uwzględniając ryzyko.
      `,
    },

    {
      heading: "Etapy wyceny metodą DCF",
      text: `
Proces wyceny składa się z czterech głównych kroków:

1. **Prognoza przyszłych wolnych przepływów pieniężnych (FCF)**  
   Przewiduje się zwykle 5–10 lat przyszłego cash flow, bazując na:
   - przychodach,
   - marżach,
   - inwestycjach (CAPEX),
   - zmianach kapitału obrotowego.

2. **Dobór stopy dyskontowej**  
   Jest to stopa zwrotu wymagana przez inwestorów. Im większe ryzyko firmy – tym wyższa stopa.

3. **Dyskontowanie przepływów**  
   Każdy rok przyszłych przepływów przelicza się na wartość dzisiejszą:
   \`PV = FCF / (1 + r)^n\`

4. **Obliczenie wartości rezydualnej (TV)**  
   To wartość firmy po okresie prognozy.  
   Uwaga: TV często stanowi ponad 50% wartości DCF, więc jest bardzo wrażliwa na założenia.
      `,
    },

    {
      heading: "Czym jest stopa dyskontowa?",
      text: `
**Stopa dyskontowa to stopa zwrotu oczekiwana przez inwestorów**, która odzwierciedla:
- ryzyko działalności,
- koszt kapitału własnego,
- koszt długu,
- strukturę finansowania firmy.

Im większe ryzyko – tym wyższa wymagana stopa → tym **niższa obecna wartość** przyszłych zysków.

Przykład:
- jeśli firma jest stabilna → r może wynosić 8–10%,
- jeśli wysokiego ryzyka → 15–20% lub więcej.
      `,
    },

    {
      heading: "WACC – średni ważony koszt kapitału",
      text: `
W praktyce stopą dyskontową dla całej firmy jest **WACC (Weighted Average Cost of Capital)**.

WACC uwzględnia:
- koszt kapitału własnego (np. model CAPM),
- koszt długu (oprocentowanie kredytów i obligacji),
- strukturę kapitału: udział długu i kapitału własnego.

Wzór ogólny:
\`WACC = (E/V × Ke) + (D/V × Kd × (1 - podatek))\`

Gdzie:
- **E** – kapitał własny,
- **D** – dług,
- **V** = E + D – wartość całkowita finansowania,
- **Ke** – koszt kapitału własnego,
- **Kd** – koszt długu.

Im wyższy WACC → **niższa wycena DCF**, bo przepływy są mocniej dyskontowane.
      `,
    },

    {
      heading: "Dlaczego wartość spada, gdy stopa dyskontowa rośnie?",
      text: `
Wyobraź sobie, że firma za rok wygeneruje 100 zł gotówki.

Jeśli stopa dyskontowa wynosi:
- 5% → wartość dziś = 95,2 zł  
- 10% → wartość dziś = 90,9 zł  
- 20% → wartość dziś = 83,3 zł  

Im wyższe ryzyko = wyższa stopa = **niższa obecna wartość** tych samych przepływów.

To dlatego spółki stabilne (np. utilities) mają wyższe wyceny,  
a spółki ryzykowne – dużo niższe, nawet przy podobnych wynikach.
      `,
    },

    {
      heading: "Wartość rezydualna – najważniejszy element DCF",
      text: `
**Wartość rezydualna (terminal value, TV)** określa wartość firmy po okresie szczegółowej prognozy.

Najczęściej liczy się ją metodą:
- Gordon Growth (stały wzrost), lub
- exit multiple (np. EV/EBITDA na końcu prognozy).

Dlaczego TV jest tak ważna?

➡ bo odpowiada często za **50–70% całkowitej wartości DCF**.

To właśnie wartość rezydualna sprawia, że model jest:
- bardzo czuły na założenia wzrostu,
- bardzo czuły na stopę dyskontową.

Niewielka zmiana:
- wzrostu z 2% → 3%,  
- WACC z 9% → 10%,  
może zmienić wycenę o kilkanaście lub kilkadziesiąt procent.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Metoda DCF to jedno z najdokładniejszych narzędzi wyceny, ale wymaga świadomych prognoz.

Najważniejsze elementy:
- opiera się na **przyszłych przepływach pieniężnych**, nie historii,
- kluczowa jest **stopa dyskontowa**, odzwierciedlająca ryzyko,
- **WACC** łączy koszt kapitału własnego i długu,
- **wartość rezydualna** jest najbardziej wrażliwym elementem modelu.

DCF jest potężny, ale musi być tworzony z pełną świadomością ryzyk i założeń.
      `,
    },
  ],
};
