import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("echochat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("echochat-theme", theme);
    set({ theme });
  },
}));