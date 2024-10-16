import React from "react";
import { FaMedal, FaShoppingBag, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Importando o ícone do LinkedIn
import { MdOutlineEmail } from "react-icons/md";
import {
  AboutText,
  Card,
  Container,
  ContainerCard,
  ContainerContact,
  ProfilePicture,
  TextContainer,
  DownloadButton,
} from "./styles";

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfilePicture
        src="https://media.licdn.com/dms/image/v2/D4D03AQGjIgacYjpcsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687206189001?e=1734566400&v=beta&t=-LK3sm5EVCcy75FPkcK8kb4_GVVpGs5jQdsoN9V_J2Q"
        alt="Me"
      />
      <TextContainer>
        <AboutText>
          <h1>Olá, sou o Anderson</h1>
          <p>
            Sou um desenvolvedor Full Stack apaixonado por criar interfaces
            interativas e responsivas. Com formação em Sistemas de Informação
            pela Anhanguera Educacional, tenho mais de 3 anos de experiência
            trabalhando com tecnologias modernas, como ReactJS, TypeScript,
            JavaScript, NextJS, Redux, NodeJS, Express, MongoDB, Docker.
          </p>
        </AboutText>

        <ContainerCard>
          <Card>
            <FaMedal size={24} color="#a10606" aria-hidden="true" />
            <span>Experiência</span>
            <span>3+ anos</span>
          </Card>
          <Card>
            <FaShoppingBag size={24} color="#a10606" aria-hidden="true" />
            <span>Projetos Finalizados</span>
            <span>10+ projetos</span>
          </Card>
        </ContainerCard>

        <h2>Entre em Contato</h2>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <ContainerContact>
            <a
              href="https://www.linkedin.com/in/andersonaraujjo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                color="rgb(161, 6, 6)"
                aria-label="LinkedIn"
              />
              <div>
                <h1>LinkedIn</h1>
                <p>Anderson Araujo</p>
              </div>
            </a>
          </ContainerContact>
          <ContainerContact>
            <a
              href="https://wa.me/5561984663902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={24}
                color="rgb(161, 6, 6)"
                aria-label="WhatsApp"
              />
              <div>
                <h1>WhatsApp</h1>
                <p>+55 (61) 98466-3902 </p>
              </div>
            </a>
          </ContainerContact>
          <ContainerContact>
            <a href="mailto:andersonaraujoc1@gmail.com">
              <MdOutlineEmail
                size={24}
                color="rgb(161, 6, 6)"
                aria-label="Email"
              />
              <div>
                <h1>Email</h1>
                <p>andersonaraujoc1@gmail.com</p>{" "}
              </div>
            </a>
          </ContainerContact>
        </div>

        <DownloadButton>
          <a
            href="https://drive.google.com/uc?id=1WeqwL8ygdtQhpAXJx0U7xNVFWWy0ekSK"
            download
            style={{ textDecoration: "none", color: "white" }}
          >
            Baixar Currículo
          </a>
        </DownloadButton>
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
