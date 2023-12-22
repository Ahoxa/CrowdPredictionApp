"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
