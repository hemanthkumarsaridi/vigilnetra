import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("vigil-dark-mode");
    return saved ? JSON.parse(saved) : true;
  });
  const [colorTheme, setColorTheme] = useState(() => {
    return localStorage.getItem("vigil-color-theme") || "cyber";
  });

  useEffect(() => {
    localStorage.setItem("vigil-dark-mode", JSON.stringify(isDark));
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("vigil-color-theme", colorTheme);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}