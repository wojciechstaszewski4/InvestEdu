// src/firebaseConfig.js

// Plik konfiguracyjny Firebase - inicjalizuje aplikację i udostępnia najważniejsze usługi
// takie jak Firestore, Authentication  i Analytics w całym projekcie.
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Konfiguracja Firebase pobierana z pliku .env
// (klucze API są publiczne, ale ograniczone regułami Firebase)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Inicjalizacja aplikacji Firebase
const app = initializeApp(firebaseConfig);

// Usługi Firebase
const db = getFirestore(app);
const auth = getAuth(app);

// Analytics inicjalizowane tylko w przeglądarce
let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Eksport usług Firebase
export { app, analytics, db, auth };
