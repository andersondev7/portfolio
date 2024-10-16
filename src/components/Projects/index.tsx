import React, { useState } from "react";

import Title from "../Title/Title";
import {
  Button,
  ButtonContainer,
  CompanyName,
  ContainerTechnologies,
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
import logoTwella from "../../assets/image/logoEnergyarray.png";

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

const projectsData: Project[] = [
  {
    id: 1,
    name: "Teste Dev Junior - Legaplan",
    description:
      "Um projeto desenvolvido para criar, listar e deletar tarefas, fazendo armazenamento utilizando arquivo JSON.",
    technologies: "NextJS, TypeScript, SASS",
    imageUrl: "",
    url: "https://github.com/andersona16/dev-junior-legaplan",
    createdBy: "self",
  },
  {
    id: 2,
    name: "Junior Challenge",
    description:
      "Projeto para Criação de um CRUD (Create, Read, Update, Delete) para gerenciar os anéis e desenvolver um frontend para visualizar e manipular essas informações.",
    technologies: "Frontend: React e TypeScript, Backend: com Node + Express",
    imageUrl: "",
    url: "https://github.com/andersona16/Junior-Challenge/tree/junior-challenge-anderson-araujo",
    createdBy: "self",
  },
  {
    id: 3,
    name: "Frontend Cardápio Digital",
    description:
      "Uma aplicação de cardápio digital para restaurantes onde é possível listar, criar, deletar e atualizar produtos.",
    technologies: "React + Typescript",
    imageUrl: "",
    url: "https://github.com/andersona16/frontend-cardapio-digital",
    createdBy: "self",
  },
  {
    id: 4,
    name: "Backend Cardápio Digital",
    description:
      "Backend construído para suportar a aplicação de cardápio digital para criação de produtos e também tem opções para adicionar, listar, deletar e atualizar o produto.",
    technologies: "Java + Spring Boot",
    imageUrl: "",
    url: "https://github.com/andersona16/backend-cardapio-digital",
    createdBy: "self",
  },

  {
    id: 5,
    name: "AgendaDF",
    description:
      "Conduzi testes rigorosos em ambiente de homologação no sistema do AgendaDF, assegurando a qualidade e a funcionalidade do sistema antes do lançamento, garantindo a satisfação dos usuários finais.",
    technologies: "Testes, Homologação",
    imageUrl: logoAgendaDf,
    url: "https://agenda.df.gov.br/",
    createdBy: "company",
    companyName: "Secretaria de Justiça do Distrito Federal",
  },
  {
    id: 6,
    name: "Site do NaHora",
    description:
      "Efetuei ajustes e melhorias significativas no site do NaHora, utilizando HTML, CSS, WordPress e Bootstrap, resultando em uma interface mais intuitiva e responsiva.",
    technologies: "HTML, CSS, WordPress, Bootstrap",
    imageUrl: logoNaHora,
    url: "https://www.nahora.df.gov.br/",
    createdBy: "company",
    companyName: "Secretaria de Justiça do Distrito Federal",
  },
  {
    id: 7,
    name: "Landing Pages Bbanking - Conveniência",
    description: "Landing page feita em HTML, SCSS e JavaScript.",
    technologies: "HTML, SCSS, JavaScript",
    imageUrl: logoBbankingConveniencia,
    url: "https://conveniencia.bbanking.com.br/",
    createdBy: "company",
    companyName: "Bbanking",
  },
  {
    id: 7.1,
    name: "Landing Page Franquia Bbanking - Franquia",
    description: "Landing page feita em HTML, SCSS e JavaScript.",
    technologies: "HTML, SCSS, JavaScript",
    imageUrl: logoBbankingFranquia,
    url: "https://franquia.bbanking.com.br/",
    createdBy: "company",
    companyName: "Bbanking",
  },
  {
    id: 7.2,
    name: "Landing Page Pagamento Bbanking - PagueTudo",
    description: "Landing page feita em HTML, SCSS e JavaScript.",
    technologies: "HTML, SCSS, JavaScript",
    imageUrl: logoBbankingPagueTudo,
    url: "https://paguetudo.bbanking.com.br/",
    createdBy: "company",
    companyName: "Bbanking",
  },
  {
    id: 7.3,
    name: "Landing Page Bbanking - Bbanking",
    description: "Landing page feita em HTML, SCSS e JavaScript.",
    technologies: "HTML, SCSS, JavaScript",
    imageUrl: logoBbanking,
    url: "https://bbanking.com.br/",
    createdBy: "company",
    companyName: "Bbanking",
  },
  {
    id: 8,
    name: "Bwallet Dashboard",
    description: "Dashboard feita em React + TypeScript.",
    technologies: "React, TypeScript",
    imageUrl: logoBbankingDash,
    url: "https://bwallet.com.br/",
    createdBy: "company",
    companyName: "Bbanking",
  },
  {
    id: 9,
    name: "Sistema de Gerenciamento de Gás",
    description:
      "Sistema de gerenciamento de gás feito utilizando React + TypeScript + GraphQL.",
    technologies: "React, TypeScript, GraphQL",
    imageUrl: logoBrightlync,
    url: "https://brightlync.vercel.app/auth/login",
    createdBy: "company",
    companyName: "Motion Applications",
  },
  {
    id: 10,
    name: "Sistema de Gerenciamento de Energia e Gás",
    description:
      "Sistema de gerenciamento de energia e gás feito em React + TypeScript e backend em Java.",
    technologies: "React, TypeScript, Java",
    imageUrl: logoEnergyarray,
    url: "https://energyarray.vercel.app/auth/login",
    createdBy: "company",
    companyName: "Motion Applications",
  },
  {
    id: 11,
    name: "Extensão Twella",
    description: "Extensão Twella feita para Chrome e Safari.",
    technologies: "JavaScript, HTML, CSS, Manifest File, API Chrome",
    imageUrl: logoTwella,
    url: "https://chromewebstore.google.com/detail/twella/lblidfjkplakdhnmbghmeomhbkakbcko",
    createdBy: "company",
    companyName: "Motion Applications",
  },
  {
    id: 12,
    name: "Zona Business",
    description: "Zona Business feita em React + TypeScript.",
    technologies: "React, TypeScript",
    imageUrl: "",
    url: "https://zona-business-panel.vercel.app/",
    createdBy: "company",
    companyName: "Motion Applications",
  },
  {
    id: 13,
    name: "Zona Admin",
    description: "Zona Admin feita em React + TypeScript.",
    technologies: "React, TypeScript",
    imageUrl: "",
    url: "https://zona-admin-panel.vercel.app/",
    createdBy: "company",
    companyName: "Motion Applications",
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = projectsData.filter((project) => {
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

  return (
    <>
      <Title titleEn="PROJECTS" titlePt="Projetos" />
      <ButtonContainer>
        <Button active={filter === "all"} onClick={() => setFilter("all")}>
          Todos os Projetos
        </Button>
        <Button active={filter === "self"} onClick={() => setFilter("self")}>
          Projetos Feitos por Mim
        </Button>
        <Button
          active={filter === "company"}
          onClick={() => setFilter("company")}
        >
          Projetos que Participei nas Empresas
        </Button>
      </ButtonContainer>

      <ProjectList>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectItem key={project.id}>
              {project.imageUrl ? (
                <ProjectImage src={project.imageUrl} />
              ) : (
                <ProjectImage
                  src="https://via.placeholder.com/400x200.png?text=Sem+Imagem"
                  alt="Imagem não disponível"
                />
              )}
              <ProjectDetails>
                <h1>{project.name}</h1>
                {project.companyName && (
                  <CompanyName>
                    <strong>Empresa:</strong> {project.companyName}
                  </CompanyName>
                )}
                <strong>Tecnologias utilizadas </strong>
                <ContainerTechnologies>
                  {project.technologies.split(", ").map((tech, index) => (
                    <TechBadge key={index}>{tech}</TechBadge>
                  ))}
                </ContainerTechnologies>
                <p>
                  <strong>Descrição:</strong> {""}
                  {project.description || "Sem descrição disponível"}
                </p>
                {project.url && (
                  <ProjectLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.createdBy === "self"
                      ? "Ver código no GitHub"
                      : "Acessar Projeto"}
                  </ProjectLink>
                )}
              </ProjectDetails>
            </ProjectItem>
          ))
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
      </ProjectList>
    </>
  );
};

export default Projects;
