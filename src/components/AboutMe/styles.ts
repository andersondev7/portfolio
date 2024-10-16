import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  gap: 10px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 40%;
  height: auto;

  padding: 0px 20px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0px 20px;

  color: #fff;

  width: 100%;
`;

export const AboutText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    font-size: 18px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #16161d;
  padding: 20px;
  width: 140px;
  border-radius: 8px;
  text-align: center;

  > span {
    color: #fff;
    font-size: 14px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 10px;
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > a {
    display: flex;
    align-items: center;
    gap: 10px;

    text-decoration: none;

    color: #fff;

    > div {
      > h1 {
        font-size: 14px;
      }
      > p {
        font-size: 12px;
      }
    }
  }
`;

export const DownloadButton = styled.button`
  background-color: #a10606;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  max-width: max-content;

  &:hover {
    background-color: #b21313;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
