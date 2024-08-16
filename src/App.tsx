import "./locales/i18n";

import React from "react";
import LanguageSelector from "./components/LanguageSelector";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <GlobalStyle />
        <Header />
        <LanguageSelector />
        <main>
          <section id="about">
            <h2>Sobre Mim</h2>
            <p>Seu conteúdo sobre mim aqui.</p>
          </section>
          <section id="projects">
            <h2>Projetos</h2>
            <p>Seus projetos aqui.</p>
          </section>
          <section id="skills">
            <h2>Habilidades</h2>
            <p>Suas habilidades aqui.</p>
          </section>
          <section id="contact">
            <h2>Contato</h2>
            <p>Formulário de contato aqui.</p>
          </section>
        </main>
      </LanguageProvider>
    </CustomThemeProvider>
  );
};

export default App;
