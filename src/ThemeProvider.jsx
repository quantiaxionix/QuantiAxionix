// src/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("quantiaxionix-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      // Check system preference if no saved preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemPrefersDark);
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("quantiaxionix-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    isLight: !isDark,
    toggleTheme,
    colors: {
      // Background colors
      bg: {
        primary: isDark ? "#000000" : "#ffffff",
        secondary: isDark ? "#111111" : "#f8f9fa",
        card: isDark ? "#1a1a1a" : "#ffffff",
        hover: isDark ? "#2a2a2a" : "#f0f0f0",
      },
      // Text colors
      text: {
        primary: isDark ? "#ffffff" : "#000000",
        secondary: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
        muted: isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
      },
      // Accent color (stays consistent)
      accent: "#0097b2",
      accentHover: "#007a94",
      // Border colors
      border: {
        primary: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
        secondary: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        accent: "#0097b2",
      },
      // Shadow colors
      shadow: {
        sm: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)",
        md: isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.15)",
        lg: isDark ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.2)",
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}