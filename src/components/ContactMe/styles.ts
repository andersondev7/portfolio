import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  background-color: #16161d;

  padding: 20px;
  width: 250px;

  border-radius: 8px;

  > span {
    color: white;

    font-size: 14px;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    text-decoration: none;

    color: #e10909;

    font-size: 14px;
  }
`;

export const ContainerForm = styled.div``;
