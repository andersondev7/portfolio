import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import { Aside, Hamburger, Nav } from "./styles";
import LanguageSelector from "../LanguageSelector";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsSticky(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Aside className={isSticky ? "sticky" : ""}>
      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Nav isOpen={isOpen}>
        <Link
          to="about"
          smooth={true}
          spy={true}
          activeClass="active"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t("header.about")}
        </Link>
        <Link
          to="work"
          smooth={true}
          spy={true}
          activeClass="active"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t("header.work")}
        </Link>
        <Link
          to="projects"
          smooth={true}
          spy={true}
          activeClass="active"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t("header.projects")}
        </Link>
        <Link
          to="skills"
          smooth={true}
          spy={true}
          activeClass="active"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t("header.skills")}
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          activeClass="active"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t("header.contact")}
        </Link>
        <LanguageSelector />
      </Nav>
    </Aside>
  );
};

export default Header;
