import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;

  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: row;
    position: relative;
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    color: white;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #a10606;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    > a {
      padding: 15px 0;
      font-size: 1.5rem;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #a10606;
  border-radius: 50%;

  margin: 10px 20px;

  > a {
    font-size: 18px;
    color: white;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    > a {
      font-size: 16px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 15;

  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(10px, 10px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: flex;

    padding: 0px 20px;
  }
`;
