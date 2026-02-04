// src/data/theory/module5-course1-chapter5.js

export default {
  id: "m5c1ch5",
  title: "Dźwignia finansowa",
  content: [
    {
      heading: "Czym jest dźwignia finansowa?",
      text: `
Dźwignia finansowa to **mechanizm, który pozwala kontrolować pozycję większą niż posiadany kapitał**.  
Przykład: przy kapitale 1 000 zł i dźwigni x5 możesz otworzyć pozycję o wartości 5 000 zł.

Dźwignia zwiększa:
- ekspozycję na rynek,
- potencjalne zyski,
- **ale także potencjalne straty**.

To narzędzie, które wymaga dyscypliny i świadomego zarządzania ryzykiem.
      `,
    },

    {
      heading: "Jak działa dźwignia w praktyce?",
      text: `
Dźwignia działa proporcjonalnie - wzmacnia ruchy rynku.

Przykład działania dźwigni x5:
- ruch ceny +2% = wynik +10% na Twojej pozycji,
- ruch ceny –2% = wynik –10% na Twojej pozycji.

Właśnie dlatego profesjonalni inwestorzy traktują dźwignię jak **narzędzie precyzyjne**, a nie sposób na szybsze bogacenie się.
      `,
    },

    {
      heading: "Największe ryzyko dźwigni",
      text: `
Najpoważniejszym zagrożeniem dźwigni jest **możliwość bardzo szybkiej utraty kapitału**.

Dlaczego?
- Straty powiększają się wielokrotnie tak samo jak zyski.
- Wysoka zmienność może doprowadzić do likwidacji pozycji (margin call / liquidation).
- Portfel z dużą dźwignią staje się niezwykle niestabilny.

Dźwignia nie wybacza braku planu - nawet mały błąd może skończyć się katastrofą.
      `,
    },

    {
      heading: "Kiedy stosowanie dźwigni ma sens?",
      text: `
Dźwignia może być uzasadniona jedynie wtedy, gdy inwestor:
- ma **konkretny system działania**,  
- stosuje **wyraźnie określone poziomy SL**,  
- kontroluje **ryzyko jednostkowe**,  
- rozumie **zmienność instrumentu**,  
- ma doświadczenie w zarządzaniu stresem i stratami.

Profesjonaliści często używają dźwigni w sposób konserwatywny - np. dźwignia 1.2x lub 1.5x, a nie x20 czy x50.
      `,
    },

    {
      heading: "Co oznacza dźwignia x5?",
      text: `
Dźwignia x5 oznacza, że **Twoja pozycja jest pięć razy większa od posiadanego kapitału**.

Jeśli masz 2 000 zł:
- pozycja przy x5 = 10 000 zł,
- zmiana ceny o 1% = zmiana wyniku o 5%.

Im większa dźwignia, tym węższy margines błędu - rynek nie musi spaść dużo, by wyczyścić portfel.
      `,
    },

    {
      heading: "Najczęstsze błędy początkujących",
      text: `
1. **Zbyt duże pozycje względem kapitału**  
   - inwestorzy myślą, że dźwignia przyspieszy drogę do zysków.  
   - w rzeczywistości przyspiesza drogę do strat.

2. **Brak SL przy transakcjach z dźwignią**  
   - to prosta droga do likwidacji konta.

3. **Stosowanie dźwigni w zmiennych momentach rynku**  
   - im większa zmienność, tym większe ryzyko nagłej likwidacji.

4. **Emocjonalne zwiększanie pozycji po kilku zyskach**  
   - euforia + dźwignia = klasyczny recipe na blow-up.

Dźwignia **nie jest zła sama w sobie**, ale w nieumiejętnych rękach staje się najbardziej ryzykownym narzędziem rynku.
      `,
    },
  ],
};
