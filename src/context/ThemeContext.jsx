import React, { useState, createContext } from "react";
export const themeContext = createContext();

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
