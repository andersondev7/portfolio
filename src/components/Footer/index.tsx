import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  Container,
  ContainerListInfo,
  ContainerMe,
  ContainerNetworks,
} from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const iconsNetworks = [
    {
      id: 1,
      icon: <FaWhatsapp size={24} />,
      link: "https://wa.me/5561984663902",
    },
    {
      id: 2,
      icon: <MdOutlineEmail size={24} />,
      link: "mailto:andersonaraujoc1@gmail.com",
    },
    {
      id: 3,
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/andersonaraujjo/",
    },
  ];

  const listInfo = [
    { id: 1, label: t("header.about"), link: "about" },
    { id: 3, label: t("header.work"), link: "work" },
    { id: 2, label: t("header.projects"), link: "projects" },
    { id: 4, label: t("header.skills"), link: "skills" },
    { id: 5, label: t("header.contact"), link: "contact" },
  ];

  return (
    <Container>
      <ContainerMe>
        <h1>Anderson Araujo</h1>
        <span>{t("about.experience")}</span>
      </ContainerMe>

      <ContainerListInfo>
        {listInfo.map((info) => (
          <Link to={info.link} smooth={true} key={info.id}>
            {info.label}
          </Link>
        ))}
      </ContainerListInfo>

      <ContainerNetworks>
        {iconsNetworks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </ContainerNetworks>
    </Container>
  );
};

export default Footer;
