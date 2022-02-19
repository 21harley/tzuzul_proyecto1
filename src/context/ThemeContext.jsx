import React, { useState,useEffect, createContext } from "react";
export const themeContext = createContext();

export default function ThemeContext({ children }) {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [theme]);

  const toggleThemeChange = () => {
    if (theme === false) {
      localStorage.setItem("theme", "dark");
      setTheme(true);
    } else {
      localStorage.setItem("theme", "light");
      setTheme(false);
    }
  };
  return (
    <themeContext.Provider value={{ theme, setTheme ,toggleThemeChange }}>
      {children}
    </themeContext.Provider>
  );
}
