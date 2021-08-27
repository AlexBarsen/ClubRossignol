import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 {
    0% {
      opacity: 0;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const CategoryPageContainer = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
`;

export const Title = styled.div`
  font-size: 3rem;
`;

export const CategoryProductsContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
