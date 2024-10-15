import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import styled from "styled-components";

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.toggleBorder};
    border-color: ${({ theme }) => theme.toggleBorder};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.text};
  }

  svg {
    margin-right: 5px;
    font-size: 1.2em;
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
