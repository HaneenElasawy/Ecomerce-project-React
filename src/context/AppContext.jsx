import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        darkMode,
        setDarkMode,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );

};
export { AppContext, AppProvider };