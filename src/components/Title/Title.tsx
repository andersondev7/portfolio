import React from "react";
import styled from "styled-components";

interface SectionProps {
  titleEn?: string;
  titlePt?: string;
}

const TitleContainer = styled.div`
  position: relative;
  margin: 30px 0;
  text-align: center;
  overflow: hidden;
`;

const TitleBackground = styled.h1`
  font-size: 6rem;
  letter-spacing: 0.1em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.1;
  color: #ffffff;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  ${TitleContainer}:hover & {
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 375px) {
    font-size: 2.8rem;
  }
`;

const TitleForeground = styled.h2`
  font-size: 2.5rem;
  z-index: 2;
  color: #a10606;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  margin: inherit;

  ${TitleContainer}:hover & {
    transform: translateY(-10px);
    color: #bdc3c7;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

const Title: React.FC<SectionProps> = ({ titleEn, titlePt }) => (
  <TitleContainer>
    <TitleBackground>{titleEn}</TitleBackground>
    <TitleForeground>{titlePt}</TitleForeground>
  </TitleContainer>
);

export default Title;
