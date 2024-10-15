import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: black;

  width: 100%;

  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;

  > a {
    color: white;
    display: block;
    padding: 10px 20px;
    text-decoration: none;

    &:hover {
      color: #a10606;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: #a10606;
  border-radius: 50%;

  > a {
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
`;
