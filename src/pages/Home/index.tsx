import React from "react";

import ContactMe from "../../components/ContactMe/inedx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./styles";
import Projects from "../../components/Projects";
import Experiences from "../../components/Experiences";
import AboutMe from "../../components/AboutMe";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div id="about">
          <AboutMe />
        </div>

        <div id="work">
          <Experiences />
        </div>

        <div id="projects">
          <Projects />
        </div>

        {/* <div id="skills">
          <Skills />
        </div> */}

        <div id="contact">
          <ContactMe />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
