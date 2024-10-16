import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #16161d;
  padding: 20px;
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

export const ContainerForm = styled.div`
  width: 40%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 15px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  label {
    display: flex;
    gap: 20px;

    color: white;
    font-size: 14px;
  }

  input,
  textarea {
    padding: 12px;
    border: 1px solid #444;
    border-radius: 8px;
    background-color: #08080c;
    color: white;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #e10909;
      box-shadow: 0 0 8px rgba(225, 9, 9, 0.5);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    background-color: #e10909;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d00707;
    }

    &:disabled {
      background-color: #555;
      cursor: not-allowed;
    }
  }

  p {
    text-align: center;
    color: #e10909;
    font-weight: bold;
  }
`;
