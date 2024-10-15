import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  Container,
  ContainerListInfo,
  ContainerMe,
  ContainerNetworks,
} from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll"; // Importando Link do react-scroll

const Footer = () => {
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
    { id: 1, label: "Sobre", link: "about" },
    { id: 2, label: "Projetos", link: "projects" },
    { id: 3, label: "Trabalhos", link: "work" },
    { id: 4, label: "Habilidades", link: "skills" },
    { id: 5, label: "Contato", link: "contact" },
  ];

  return (
    <Container>
      <ContainerMe>
        <h1>Anderson Araujo</h1>

        <span>Desenvolvedor Full Stack</span>
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
