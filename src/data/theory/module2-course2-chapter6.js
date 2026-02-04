// src/data/theory/module2-course2-chapter6.js

export default {
  id: "m2c2ch6",
  title: "Łączenie wskaźników w praktyce",
  content: [
    {
      heading: "Po co łączyć wskaźniki?",
      text: `
Wskaźniki analizy technicznej nie służą do przewidywania przyszłości - pomagają **interpretować zachowanie ceny**.  
Łączenie kilku wskaźników pozwala stworzyć kompletny obraz rynku, ale tylko wtedy, gdy każdy z nich pełni **inną funkcję** (np. trend, momentum, zmienność).
      `,
    },

    {
      heading: "Najczęstszy błąd traderów",
      text: `
Najpoważniejszy błąd to **nakładanie zbyt wielu wskaźników naraz**:

- prowadzi to do sprzecznych sygnałów,  
- wykres staje się nieczytelny,  
- większość wskaźników bazuje na tych samych danych → powtarza te same informacje.

Minimalizm = większa skuteczność i szybsze decyzje.
      `,
    },

    {
      heading: "Optymalny zestaw wskaźników",
      text: `
Najlepszym podejściem jest wykorzystanie wskaźników, które **uzupełniają się**, a nie duplikują:

1. **Trend** → MA50, MA200  
2. **Momentum** → RSI lub MACD  
3. **Zmienność** → Wstęgi Bollingera  

Ten zestaw daje pełen obraz rynku: kierunek trendu + siłę ruchu + potencjalne strefy wybicia.
      `,
    },

    {
      heading: "Konfluencja sygnałów",
      text: `
**Konfluencja** to sytuacja, w której kilka wskaźników sugeruje ten sam kierunek ruchu.

Przykład:  
- Cena powyżej MA200 (trend wzrostowy),  
- RSI odbija od poziomu 40 (momentum wzrostowe),  
- Cena jest przy dolnej wstędze Bollingera (potencjalne wyprzedanie).

Taki zestaw znacząco zwiększa prawdopodobieństwo poprawnej decyzji.
      `,
    },

    {
      heading: "Dlaczego minimalizm jest skuteczny?",
      text: `
Wiele wskaźników bazuje na **tej samej cenie zamknięcia**, dlatego ich sygnały często się powtarzają.  
Przykład: MACD, RSI i Stochastic - wszystkie analizują momentum, ale w nieco inny sposób.

Dodawanie kolejnych oscylatorów nie zwiększa trafności - zwiększa **szum**.
      `,
    },

    {
      heading: "Rola kontekstu i analizy multi-timeframe",
      text: `
Najważniejszy element analizy technicznej to **kontekst**, czyli:

- trend na wyższym interwale,  
- kluczowe poziomy wsparć/oporów,  
- struktura rynku (HH/HL, LH/LL).  

Wskaźniki pomagają tylko wtedy, gdy są analizowane **w ramach szerszego obrazu**.

Zawsze zaczynaj analizę od wysokich interwałów → dopiero potem przechodź do sygnałów wskaźnikowych na niższych.
      `,
    },

    {
      heading: "Podsumowanie",
      text: `
Skuteczne użycie wskaźników = prosty, spójny system:

- 1 wskaźnik trendu,  
- 1 wskaźnik momentum,  
- 1 wskaźnik zmienności,  
- analiza rynku z wyższego interwału.

To minimalny, ale kompletny zestaw, który działa w praktyce.
      `,
    },
  ],
};
