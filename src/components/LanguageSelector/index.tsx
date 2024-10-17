import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Select, SelectorWrapper } from "./styles";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(language === "pt" ? "/pt" : "/en");
  }, [language, navigate]);

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
  };

  return (
    <SelectorWrapper>
      <Select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="pt">BR</option>
        <option value="en">US</option>
      </Select>
    </SelectorWrapper>
  );
};

export default LanguageSelector;
