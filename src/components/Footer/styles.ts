import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  padding: 40px 20px;

  background-color: #16161d;

  margin-top: 40px;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

export const ContainerMe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  > h1 {
    color: white;
    font-size: 16px;
    margin: 0;
  }

  > span {
    font-size: 14px;
    color: white;
  }
`;

export const ContainerNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > a {
    color: white;
    font-size: 14px;
  }
`;

export const ContainerListInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  > a {
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;
