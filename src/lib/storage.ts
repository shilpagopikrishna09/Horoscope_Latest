// Local storage utilities for saving user preferences

export const STORAGE_KEYS = {
  SELECTED_SIGN: "horoscope_selected_sign",
  THEME: "horoscope_theme",
  USER_NAME: "horoscope_user_name",
} as const;

export const storage = {
  // Get value from localStorage
  get: (key: string): string | null => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn("Failed to read from localStorage:", error);
      return null;
    }
  },

  // Set value in localStorage
  set: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn("Failed to write to localStorage:", error);
    }
  },

  // Remove value from localStorage
  remove: (key: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("Failed to remove from localStorage:", error);
    }
  },

  // Clear all app-related data
  clear: (): void => {
    if (typeof window === "undefined") return;
    try {
      Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.warn("Failed to clear localStorage:", error);
    }
  },
};

// Zodiac sign storage helpers
export const zodiacStorage = {
  getSelectedSign: (): string | null => {
    return storage.get(STORAGE_KEYS.SELECTED_SIGN);
  },

  setSelectedSign: (signId: string): void => {
    storage.set(STORAGE_KEYS.SELECTED_SIGN, signId);
  },

  clearSelectedSign: (): void => {
    storage.remove(STORAGE_KEYS.SELECTED_SIGN);
  },
};

// Theme storage helpers
export const themeStorage = {
  getTheme: (): "light" | "dark" | null => {
    const theme = storage.get(STORAGE_KEYS.THEME);
    return theme === "light" || theme === "dark" ? theme : null;
  },

  setTheme: (theme: "light" | "dark"): void => {
    storage.set(STORAGE_KEYS.THEME, theme);
  },
};

// User preferences
export const userStorage = {
  getName: (): string | null => {
    return storage.get(STORAGE_KEYS.USER_NAME);
  },

  setName: (name: string): void => {
    storage.set(STORAGE_KEYS.USER_NAME, name);
  },

  clearName: (): void => {
    storage.remove(STORAGE_KEYS.USER_NAME);
  },
};
