import './locales/i18n';

import React from 'react';

import { LanguageProvider } from './contexts/LanguageContext';
import { CustomThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyle';

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
