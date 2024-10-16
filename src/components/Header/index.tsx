import React, { useState } from "react";
import { Link } from "react-scroll";

import { Aside, ContainerImage, Hamburger, Nav } from "./styles";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Aside>
      <ContainerImage>
        <Link to="/" smooth={true}>
          A
        </Link>
      </ContainerImage>

      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Nav isOpen={isOpen}>
        <Link to="about" smooth={true} onClick={() => setIsOpen(false)}>
          Sobre mim
        </Link>
        <Link to="projects" smooth={true} onClick={() => setIsOpen(false)}>
          Projetos
        </Link>
        <Link to="work" smooth={true} onClick={() => setIsOpen(false)}>
          Experiência
        </Link>
        <Link to="skills" smooth={true} onClick={() => setIsOpen(false)}>
          Habilidades
        </Link>
        <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
          Contato
        </Link>
      </Nav>
    </Aside>
  );
};

export default Header;
