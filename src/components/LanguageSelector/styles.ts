import styled from "styled-components";

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  border: 1px solid transparent;
  background: transparent;
  font-size: 1rem;
  color: white;
  display: block;
  padding: 10px 0;
  text-decoration: none;
  transition: color 0.3s;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.toggleBorder};
    border: 1px solid transparent;
  }

  &:focus {
    outline: none;
    border: 1px solid transparent;
    background-color: rgba(22, 22, 29, 0.8);
  }
`;
