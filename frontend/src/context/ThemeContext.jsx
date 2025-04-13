// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const colors = {
    background: darkMode ? '#121212' : '#ffffff',
    text: darkMode ? '#ffffff' : '#333333',
    card: darkMode ? '#1e1e1e' : '#ffffff',
    border: darkMode ? '#444444' : '#e0e0e0',
    input: darkMode ? '#2d2d2d' : '#ffffff',
    primary: darkMode ? '#1e88e5' : '#3498db'
  };

  return (
    <ThemeContext.Provider value={{ darkMode, colors, toggleDarkMode: () => setDarkMode(!darkMode) }}>
      {children}
    </ThemeContext.Provider>
  );
};