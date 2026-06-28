import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ load initial value from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // ✅ apply theme + save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.backgroundColor = "#00091a";
      root.style.color = "#e5e7eb";
    } else {
      root.style.backgroundColor = "#e7eaee";
      root.style.color = "#1f2937";
    }

    // save preference
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
