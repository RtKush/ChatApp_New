// src/store/useThemeStore.js

import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",

  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },

  toggleTheme: () => {
    const current = get().theme;
    const newTheme = current === "coffee" || current === "dark" ? "light" : "coffee";
    localStorage.setItem("chat-theme", newTheme);
    set({ theme: newTheme });
  },
}));
