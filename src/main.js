// src/main.js

// Import globalnych styli
import "./assets/main.css";

// Import konfiguracji Firebase
import "./firebaseConfig.js";

// Import Vue i głównej aplikacji
import { createApp } from "vue";
import App from "./App.vue";

// Import routera
import router from "./router";

// Wyłączenie automatycznego przywracania scrolla
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Utworzenie aplikacji
const app = createApp(App);

// Podłączenie routera
app.use(router);

// Montowanie aplikacji do #app
app.mount("#app");
