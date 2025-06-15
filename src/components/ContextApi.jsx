// AppContextProvider.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

// Context setup
import { toast } from 'react-toastify';
export const AppContext = createContext();
export const GlobalContext = () => useContext(AppContext);

// Get initial dark mode based on system preference
const getInitialDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme,toast }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
