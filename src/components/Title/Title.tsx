import React from "react";

import { TitleBackground, TitleContainer, TitleForeground } from "./styles";

interface SectionProps {
  titleEn?: string;
  titlePt?: string;
}

const Title: React.FC<SectionProps> = ({ titleEn, titlePt }) => (
  <TitleContainer>
    <TitleBackground>{titleEn}</TitleBackground>
    <TitleForeground>{titlePt}</TitleForeground>
  </TitleContainer>
);

export default Title;
