import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import {
  Button,
  ButtonContainer,
  CompanyName,
  ContainerButton,
  ContainerTechnologies,
  CustomButton,
  ProjectDetails,
  ProjectImage,
  ProjectItem,
  ProjectLink,
  ProjectList,
  TechBadge,
} from "./styles";
import logoAgendaDf from "../../assets/image/agendaDf.png";
import logoNaHora from "../../assets/image/nahora.png";
import logoBbankingConveniencia from "../../assets/image/bbankingConveniencia.png";
import logoBbankingFranquia from "../../assets/image/BbankingFranquia.png";
import logoBbankingPagueTudo from "../../assets/image/BbankingPagueTudo.png";
import logoBbanking from "../../assets/image/logoBbanking.png";
import logoBbankingDash from "../../assets/image/logoBbankingDash.png";
import logoBrightlync from "../../assets/image/logoBrightlync.png";
import logoEnergyarray from "../../assets/image/logoEnergyarray.png";
import logoTwella from "../../assets/image/logoT.png";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  imageUrl: string;
  url: string;
  createdBy: "self" | "company";
  companyName?: string;
}

type Filter = "all" | "self" | "company";

const imageMap: Record<string, string> = {
  logoAgendaDf,
  logoNaHora,
  logoBbankingConveniencia,
  logoBbankingFranquia,
  logoBbankingPagueTudo,
  logoBbanking,
  logoBbankingDash,
  logoBrightlync,
  logoTwella,
  logoEnergyarray,
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState<number>(5); // Número de projetos visíveis inicialmente em mobile
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768); // Detecta se está em mobile

  const { t } = useTranslation();

  const projectMe: Project[] = t("projectsMe", { returnObjects: true });

  // Atualiza a quantidade de projetos visíveis e se está em mobile com base na largura da janela
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setVisibleCount(projectMe.length); // Mostra todos os projetos em desktop
      } else {
        setVisibleCount(5); // Reseta o contador para 5 em mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama inicialmente para definir o estado correto

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [projectMe.length]);

  const filteredProjects = projectMe.filter((project) => {
    switch (filter) {
      case "all":
        return true;
      case "self":
        return project.createdBy === "self";
      case "company":
        return project.createdBy === "company";
      default:
        return true;
    }
  });

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Aumenta o número de projetos visíveis em mobile
  };

  return (
    <>
      <Title titleEn={t("projects.title")} titlePt={t("projects.title")} />

      <ButtonContainer>
        <Button
          active={filter === "all"}
          onClick={() => {
            setFilter("all");
            setVisibleCount(isMobile ? 5 : projectMe.length);
          }}
        >
          {t("projects.buttons.all")}
        </Button>
        <Button
          active={filter === "self"}
          onClick={() => {
            setFilter("self");
            setVisibleCount(isMobile ? 5 : projectMe.length);
          }}
        >
          {t("projects.buttons.self")}
        </Button>
        <Button
          active={filter === "company"}
          onClick={() => {
            setFilter("company");
            setVisibleCount(isMobile ? 5 : projectMe.length);
          }}
        >
          {t("projects.buttons.company")}
        </Button>
      </ButtonContainer>

      <ProjectList>
        {filteredProjects.slice(0, visibleCount).map((project: Project) => (
          <ProjectItem key={project.id}>
            <ProjectImage
              src={
                imageMap[project.imageUrl] ||
                `https://via.placeholder.com/400x200.png?text=${t(
                  "projects.noImage"
                )}`
              }
              alt={project.name}
            />
            <ProjectDetails>
              <h1>{project.name}</h1>
              {project.companyName && (
                <CompanyName>
                  <strong>{t("projects.company")}:</strong>{" "}
                  {project.companyName}
                </CompanyName>
              )}
              <strong>{t("projects.technologies")}:</strong>
              <ContainerTechnologies>
                {project.technologies.split(", ").map((tech, index) => (
                  <TechBadge key={index}>{tech}</TechBadge>
                ))}
              </ContainerTechnologies>
              <p>
                <strong>{t("projects.description")}:</strong>{" "}
                {project.description || t("projects.noDescription")}
              </p>
              {project.url && (
                <ProjectLink
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.createdBy === "self"
                    ? t("projects.viewCode")
                    : t("projects.accessProject")}
                </ProjectLink>
              )}
            </ProjectDetails>
          </ProjectItem>
        ))}

        {isMobile && visibleCount < filteredProjects.length && (
          <ContainerButton>
            <CustomButton onClick={handleShowMore}>
              {t("projects.buttons.SeeMoreProjects")}
            </CustomButton>
          </ContainerButton>
        )}
      </ProjectList>
    </>
  );
};

export default Projects;
