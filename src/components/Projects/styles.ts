import { styled } from "styled-components";

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  list-style: none;
  margin: 0 auto;

  padding: 0px 40px;
`;

export const ProjectItem = styled.li`
  background: #f9f9f9;
  color: #000;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  transition: transform 0.3s;
`;

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  padding: 10px 20px;

  height: 100%;

  > h1 {
    font-size: 16px;
  }
`;

export const ContainerTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#a10606" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#8a0505" : "#f5dcdc")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(161, 6, 6, 0.5);
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px 15px;
  background-color: #a10606;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  text-align: center;

  &:hover {
    background-color: #8a0505;
  }
`;

export const CompanyName = styled.p`
  font-weight: bold;
  color: #a10606;
`;

export const TechBadge = styled.span`
  background-color: #a10606;
  color: #fff;
  border-radius: 12px;
  padding: 5px 10px;
  display: inline-block;
  font-size: 0.9em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
