import React from "react";
import styled, { keyframes } from "styled-components";
import Title from "../Title/Title";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "SCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    name: "Styled Components",
    icon: "https://avatars.githubusercontent.com/u/20658825?s=48&v=4",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); 
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillItem = styled.div`
  min-width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #16161d;
  border-radius: 8px;
  text-align: center;
  font-size: 1em;
  margin: 0 5px;
  border: 2px solid transparent;
  box-shadow: none;
  transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;

  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const SkillName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

const SkillsCarousel: React.FC = () => {
  return (
    <>
      <Title titleEn="HABILIDADES" titlePt="Habilidades" />

      <CarouselContainer>
        <CarouselWrapper>
          {[...skills, ...skills].map((skill, index) => (
            <SkillItem key={index}>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
    </>
  );
};

export default SkillsCarousel;
