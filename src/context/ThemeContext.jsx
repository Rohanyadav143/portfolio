import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      return saved === null ? true : JSON.parse(saved);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
