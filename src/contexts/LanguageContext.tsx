import React, { createContext, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  language: string;
  setLanguage: (lng: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "pt");

  const handleSetLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
