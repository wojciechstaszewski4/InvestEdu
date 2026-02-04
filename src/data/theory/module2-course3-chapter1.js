// src/data/theory/module2-course3-chapter1.js

export default {
  id: "m2c3ch1",
  title: "Analiza świecowa",
  content: [
    {
      heading: "Czym jest świeca japońska?",
      text: `
Świeca japońska to podstawowy element analizy technicznej.  
Jedna świeca pokazuje **cztery kluczowe wartości ceny**:

- **Open** – cena otwarcia,  
- **Close** – cena zamknięcia,  
- **High** – najwyższa cena,  
- **Low** – najniższa cena.

Dzięki temu jedna świeca zawiera znacznie więcej informacji niż zwykły punkt na wykresie.
      `,
    },

    {
      heading: "Korpus i knoty - co oznaczają?",
      text: `
**Korpus świecy** przedstawia różnicę między ceną otwarcia a zamknięcia.  
- Duży korpus = silny ruch jednej strony rynku.  
- Mały korpus = brak zdecydowanego kierunku.

**Knoty (cienie)** pokazują ekstremalne poziomy ceny poza korpusem:  
- Długi dolny knot = odrzucenie niższych cen → przewaga popytu.  
- Długi górny knot = odrzucenie wyższych cen → przewaga podaży.  
      `,
    },

    {
      heading: "Formacje odwrócenia trendu",
      text: `
Analiza świecowa pozwala szybko dostrzec momenty, w których rynek może zmieniać kierunek.

**Młot (Hammer)**  
- pojawia się po spadkach,  
- ma długi dolny knot i mały korpus,  
- sygnalizuje odbicie i przewagę kupujących.

**Doji**  
- otwarcie ≈ zamknięcie,  
- oznacza niezdecydowanie rynku,  
- może zapowiadać zmianę trendu, jeśli pojawia się po silnym ruchu.
      `,
    },

    {
      heading: "Momentum świecowe",
      text: `
Momentum opisuje siłę aktualnego ruchu ceny.  
W świecach objawia się to jako:

- duże korpusy,  
- zamknięcie blisko maksimum (trend wzrostowy) lub minimum (trend spadkowy),  
- niewielkie knoty - brak kontrakcji drugiej strony.

Silne momentum potwierdza kierunek trendu i często prowadzi do kontynuacji ruchu.
      `,
    },

    {
      heading: "Najważniejsze zasady analizy świecowej",
      text: `
1. **Świecy nie analizujemy w oderwaniu od kontekstu** – jej znaczenie zależy od trendu.  
2. **Pojedyncza świeca nie zmienia trendu**, potrzebna jest struktura (HH/HL/LH/LL).  
3. **Wolumen wzmacnia sygnały świecowe** - wysoki wolumen = większa wiarygodność.  
4. **Mikroformacje (doji, młot, objęcia) są tylko wskazówkami**, nie gwarancją odwrócenia.

Analiza świec to narzędzie wizualne, które pomaga natychmiast zrozumieć reakcje rynku.
      `,
    },
  ],
};
