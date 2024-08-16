import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import styled from "styled-components";

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.toggleBorder};
  }
`;

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <SelectorWrapper>
      <Button onClick={() => setLanguage("pt")} disabled={language === "pt"}>
        PT
      </Button>
      <Button onClick={() => setLanguage("en")} disabled={language === "en"}>
        EN
      </Button>
      <Button onClick={() => setLanguage("es")} disabled={language === "es"}>
        ES
      </Button>
    </SelectorWrapper>
  );
};

export default LanguageSelector;
