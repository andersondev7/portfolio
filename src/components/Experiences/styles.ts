import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const TimelineContainer = styled.div`
  position: relative;
  margin: 20px 0;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #a10606;
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    text-align: left;
  }

  &:nth-child(even) {
    left: 50%;
    text-align: right;
  }

  /* &:before {
    content: "";
    position: absolute;
    left: -7.5px;
    top: 20px;
    width: 15px;
    height: 15px;
    background-color: #4caf50;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  } */

  &:nth-child(even):before {
    left: auto;
    right: -7.5px;
  }
`;

export const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #a10606;
`;

export const Position = styled.h4`
  margin: 0;
  font-weight: normal;
  font-size: 1.2rem;
  color: #fff;
`;

export const Period = styled.p`
  font-style: italic;
  color: #a10606;
`;

export const Location = styled.p`
  font-style: italic;
  color: #777;
`;

export const Description = styled.p`
  color: #fff;
`;

export const Technologies = styled.p`
  color: #a10606;
  font-size: 0.9rem;
  font-weight: 800;
`;
