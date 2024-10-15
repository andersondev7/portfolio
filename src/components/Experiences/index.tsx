import Title from "../Title/Title";
import {
  CompanyName,
  Container,
  Description,
  Location,
  Period,
  Position,
  Technologies,
  TimelineContainer,
  TimelineItem,
} from "./styles";

const Experiences = () => {
  const experiences = [
    {
      position: "Estagiário de TI",
      company: "Secretaria de Justiça do Distrito Federal",
      period: "mar de 2020 - mar de 2022 · 2 anos 1 mês",
      location: "Brasília, Distrito Federal, Brasil · Presencial",
      description: [
        "Efetuei ajustes e melhorias significativas no site do NaHora, utilizando HTML, CSS, WordPress e Bootstrap.",
        "Participei ativamente de revisões de código e reuniões de projeto, contribuindo para a adoção de melhores práticas e metodologias ágeis como Kanban e Scrum.",
        "Conduzi testes rigorosos em ambiente de homologação no sistema do AgendaDF.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "Bootstrap",
        "Kanban",
        "Scrum",
      ],
    },
    {
      position: "Desenvolvedor Front End",
      company: "Bbanking",
      period: "jan de 2021 - set de 2022 · 1 ano 9 meses",
      location: "Brasília, Distrito Federal, Brasil · Híbrida",
      description: [
        "Desenvolvimento de dashboards interativos utilizando ReactJS e TypeScript, proporcionando uma análise de dados eficiente e visualmente atraente.",
        "Criação de Landing Pages altamente funcionais e responsivas com HTML, CSS e JavaScript, melhorando a conversão e a experiência do usuário.",
        "Integração com bancos de dados relacionais e não-relacionais, incluindo Postgres, MySQL e MongoDB.",
        "Colaboração eficaz com equipes de back-end utilizando NodeJS.",
        "Gerenciamento de versionamento de código com Git e GitHub.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SCSS",
        "NodeJS",
        "Express",
        "Postgres",
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "GitFlow",
        "Styled Components",
        "Tailwind CSS",
      ],
    },
    {
      position: "Desenvolvedor Front End",
      company: "TeamSoft Tecnologia e Sistemas",
      period: "set de 2022 - jun de 2023 · 10 meses",
      location: "Rio de Janeiro, Brasil · Remota",
      description: [
        "Implementei novas funcionalidades e interfaces de usuário usando React e TypeScript, melhorando assim a experiência geral do usuário.",
        "Participei ativamente de revisões de código e reuniões de projeto, contribuindo para a adoção de melhores práticas e metodologias ágeis como Scrum.",
        "Implementação de sistemas para empresas como Domino's Pizza e Globo.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Styled Components",
        "Git",
        "GitHub",
        "GitFlow",
        "CSS/SCSS",
        "Scrum",
      ],
    },
    {
      position: "Desenvolvedor Front End",
      company: "Motion Applications",
      period: "out de 2022 - jul de 2024 · 1 ano 10 meses",
      location: "Estoril, Lisboa, Portugal · Remota",
      description: [
        "Desenvolvimento de Software: Projetar, desenvolver e manter aplicações webs utilizando tecnologias como React, TypeScript, JavaScript, APIs RESTFUL e outras tecnologias relevantes.",
        "Colaboração em Equipe: Trabalhar de perto com equipes de design e back-end para entregar soluções completas e eficientes, garantindo uma experiência de usuário excelente.",
        "Boas Práticas de Programação: Implementar e seguir boas práticas de programação, incluindo SOLID, Clean Code, e metodologias ágeis como Scrum e Kanban.",
        "Gerenciamento de Estado e Hooks: Utilizar Context API para gerenciamento de estado, além de implementar hooks como useState, useEffect, e customHooks.",
        "Responsividade e Design: Desenvolver interfaces responsivas e acessíveis para proporcionar uma experiência de usuário consistente em diferentes dispositivos.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "APIs RESTFUL",
        "HTML5",
        "CSS3",
        "Clean Code",
        "Context API",
        "Git",
        "Scrum",
        "Kanban",
      ],
    },
  ];

  return (
    <Container>
      <Title titleEn="EXPERIÊNCIAS" titlePt="EXPERIÊNCIAS" />

      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <CompanyName>{exp.company}</CompanyName>
            <Position>{exp.position}</Position>
            <Period>{exp.period}</Period>
            <Location>{exp.location}</Location>
            {exp.description.map((desc, idx) => (
              <Description key={idx}>● {desc}</Description>
            ))}
            <Technologies>
              <strong>Tecnologias:</strong> {exp.technologies.join(", ")}
            </Technologies>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Container>
  );
};

export default Experiences;
