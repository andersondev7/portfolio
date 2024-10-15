import React from "react";
import { Link } from "react-scroll";

import { Aside, ContainerImage, Nav } from "./styles";
import { FaShareAlt } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Aside>
      <ContainerImage>
        <Link to="/" smooth={true}>
          A
        </Link>
      </ContainerImage>

      <Nav>
        <Link to="about" smooth={true}>
          About
        </Link>
        <Link to="projects" smooth={true}>
          Projects
        </Link>
        <Link to="work" smooth={true}>
          Work
        </Link>
        <Link to="skills" smooth={true}>
          Skills
        </Link>
        <Link to="contact" smooth={true}>
          Contact
        </Link>
      </Nav>

      <div>
        <FaShareAlt size={24} color="red" />
      </div>
    </Aside>
  );
};

export default Header;
