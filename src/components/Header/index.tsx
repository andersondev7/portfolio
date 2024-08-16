import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Nav>
        <Link to="about" smooth={true}>
          {t("header.about")}
        </Link>
        <Link to="projects" smooth={true}>
          {t("header.projects")}
        </Link>
        <Link to="skills" smooth={true}>
          {t("header.skills")}
        </Link>
        <Link to="contact" smooth={true}>
          {t("header.contact")}
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
