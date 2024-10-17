import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(22, 22, 29, 0.8);
  backdrop-filter: blur(4px);
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px 20px;
  max-width: 1240px;
  border-radius: 9999px;

  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  width: max-content;

  @media (max-width: 768px) {
    position: fixed;
    width: 90%;

    background-color: transparent;
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

    &.active {
      background: #a10606;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 10px;
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
