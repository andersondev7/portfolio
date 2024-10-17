import React from "react";
import { FaMedal, FaShoppingBag, FaWhatsapp, FaLinkedin } from "react-icons/fa";
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
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ProfilePicture
        src="https://media.licdn.com/dms/image/v2/D4D03AQGjIgacYjpcsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687206189001?e=1734566400&v=beta&t=-LK3sm5EVCcy75FPkcK8kb4_GVVpGs5jQdsoN9V_J2Q"
        alt="Me"
      />
      <TextContainer>
        <AboutText>
          <h1>{t("about.title")}</h1>
          <p>{t("about.description")}</p>
        </AboutText>

        <ContainerCard>
          <Card>
            <FaMedal size={24} color="#a10606" aria-hidden="true" />
            <span>{t("experience")}</span>
            <span>{t("years")}</span>
          </Card>
          <Card>
            <FaShoppingBag size={24} color="#a10606" aria-hidden="true" />
            <span>{t("projects")}</span>
            <span>{t("projectsCount")}</span>
          </Card>
        </ContainerCard>

        <h2>{t("about.contact")}</h2>
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
                <h1>{t("about.linkedin.label")}</h1>
                <p>{t("about.linkedin.name")}</p>
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
                <h1>{t("about.whatsapp.label")}</h1>
                <p>{t("about.whatsapp.number")}</p>
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
                <h1>{t("about.email.label")}</h1>
                <p>{t("about.email.address")}</p>
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
            {t("about.download")}
          </a>
        </DownloadButton>
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
