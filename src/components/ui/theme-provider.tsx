"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipos para o contexto do tema
type Theme = "light" | "dark";

// Definindo o contexto de temas
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Valor inicial do contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Componente ThemeProvider que envolve o restante da aplicação
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook para consumir o contexto do tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
