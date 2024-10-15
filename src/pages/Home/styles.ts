import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
