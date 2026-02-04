# 💹 InvestEdu – interaktywna aplikacja webowa do nauki inwestowania

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.x-ffca28?logo=firebase&logoColor=black)](https://firebase.google.com/)

Projekt webowy oparty na **Vue 3 + Vite + Tailwind CSS + Firebase**.

To interaktywna aplikacja webowa wspierająca naukę podstaw inwestowania w sposób **przystępny i angażujący**.  
Projekt powstał w ramach pracy inżynierskiej i ma na celu **popularyzację wiedzy ekonomicznej** poprzez nowoczesne narzędzia e-learningowe, łączące **edukację** i **grywalizację**.

Aplikacja została zaprojektowana jako **Single Page Application (SPA)**, z naciskiem na płynność interfejsu, intuicyjną nawigację oraz responsywność.

---

## 🎯 Cel projektu

Celem projektu jest zaprojektowanie i implementacja interaktywnej aplikacji webowej,  
która umożliwia użytkownikom zdobywanie wiedzy z zakresu finansów i inwestycji - w formie krótkich lekcji, quizów oraz elementów decyzyjnych.

Użytkownik poznaje m.in.:

- rodzaje aktywów,
- ryzyko inwestycyjne,
- strategie dywersyfikacji,
- podstawy funkcjonowania rynków finansowych,
- psychologię inwestora.

Aplikacja czerpie inspirację z popularnych platform edukacyjnych (np. Duolingo), wykorzystując mechanizmy grywalizacji, takie jak punkty doświadczenia, poziomy i rankingi.

---

## ⚙️ Zakres funkcjonalny

### 👤 1. Rejestracja i profil użytkownika

- Tworzenie konta użytkownika (Firebase Authentication).
- Logowanie oraz odzyskiwanie hasła.
- Zarządzanie profilem użytkownika.
- Zapisywanie postępów i wyników w nauce.

### 📘 2. Moduły edukacyjne

Treści podzielone na tematyczne sekcje:

- Fundamenty inwestowania
- Tradycyjne formy inwestycji
- Alternatywne inwestycje
- Zarządzanie ryzykiem
- Psychologia inwestora

Każdy moduł składa się z kursów i rozdziałów realizowanych w ustalonej kolejności.

### 🧠 3. Interaktywne lekcje i quizy

- Krótkie materiały edukacyjne w formie kart.
- Quizy sprawdzające poziom wiedzy (różne typy pytań).
- Natychmiastowa informacja zwrotna po udzieleniu odpowiedzi.

### 🏆 4. System punktów, poziomów i doświadczenia (XP)

- Za ukończone lekcje i quizy użytkownik zdobywa XP.
- Liczba punktów zależna od poziomu trudności materiału.
- XP wpływa na poziom użytkownika i jego pozycję w rankingu.
- System wspiera regularność nauki (element grywalizacji).

### 📈 5. Rankingi użytkowników

- Ranking globalny użytkowników oparty na zdobytym XP.
- Możliwość porównania postępów z innymi uczestnikami platformy.

### 📊 6. Panel statystyk

- Wizualizacja postępów użytkownika.
- Informacje o poziomie, zdobytym XP, ukończonych quizach i kursach.
- Historia ostatniej aktywności w aplikacji.

### 💻 7. Responsywny interfejs

- Interfejs dostosowany do urządzeń mobilnych i desktopowych.
- Spójny design oparty o Tailwind CSS.
- Intuicyjna obsługa i nowoczesny wygląd.

---

## 🛠️ Technologie

| Warstwa             | Technologia                                   |
| ------------------- | --------------------------------------------- |
| **Frontend**        | Vue.js 3 + Vite + Tailwind CSS                |
| **Backend**         | Firebase (Authentication, Firestore, Hosting) |
| **Baza danych**     | Firestore                                     |
| **Kontrola wersji** | Git + GitHub                                  |

---

## 🧩 Opis działania aplikacji

1. Użytkownik tworzy konto i loguje się do aplikacji.
2. Po zalogowaniu uzyskuje dostęp do **ścieżki edukacyjnej** z modułami tematycznymi.
3. Każdy moduł zawiera zestaw **lekcji i quizów** sprawdzających wiedzę.
4. Za aktywność użytkownik otrzymuje **punkty doświadczenia (XP)** i awansuje na kolejne poziomy.
5. System rankingów i odznak wspiera **motywację** i **rywalizację** między użytkownikami.
6. Postępy nauki są **zapisywane w Firestore** i wizualizowane w panelu statystyk.
7. Interfejs przypomina popularne aplikacje edukacyjne (np. Duolingo), zapewniając prostotę i intuicyjność obsługi.

---

## 🚀 Zakładane efekty projektu

- 📚 Użytkownik może w sposób interaktywny poznawać zasady inwestowania.
- 🧩 System XP i rankingów wspiera motywację poprzez element rywalizacji.
- 🌐 Aplikacja stanowi nowoczesne, webowe narzędzie edukacyjne.
- 🔄 Projekt jest skalowalny - możliwa rozbudowa o:
  - nowe moduły edukacyjne,
  - rozbudowane statystyki,
  - symulator portfela inwestycyjnego,
  - dodatkowe formy interakcji edukacyjnej.
