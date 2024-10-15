import "./locales/i18n";

import React from "react";
import LanguageSelector from "./components/LanguageSelector";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <GlobalStyle />
        <Home />
      </LanguageProvider>
    </CustomThemeProvider>
  );
};

export default App;
