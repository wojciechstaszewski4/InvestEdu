// src/domain/user.js

// ----------------------------
// Zwrócenie pierwszego imienia
// ----------------------------

export function getUserFirstName(displayName) {
  if (!displayName || typeof displayName !== "string") return "";
  return displayName.split(" ")[0].trim();
}
