import { keyframes, styled } from "styled-components";

export const scroll = keyframes`
   0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); 
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const SkillItem = styled.div`
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

export const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

export const SkillName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
