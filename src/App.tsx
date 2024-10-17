import "./locales/i18n";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageContext";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/pt" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/" element={<Navigate to="/pt" />} /> */}
          </Routes>
        </Router>
      </LanguageProvider>
    </CustomThemeProvider>
  );
};

export default App;
