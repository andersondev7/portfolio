import { useTranslation } from "react-i18next";
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

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experiences = () => {
  const { t } = useTranslation();

  const experiences: Experience[] = t("experiences", {
    returnObjects: true,
  }) as Experience[];

  return (
    <Container>
      <Title titleEn={t("header.work")} titlePt={t("header.work")} />

      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <CompanyName>{t(exp.company)}</CompanyName>
            <Position>{t(exp.position)}</Position>
            <Period>{t(exp.period)}</Period>
            <Location>{t(exp.location)}</Location>
            {exp.description.map((desc, idx) => (
              <Description key={idx}>● {t(desc)}</Description>
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
