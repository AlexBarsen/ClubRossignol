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
  }`;

export const RentalCategoryContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const CategoryTitle = styled.h1`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const CategoryItems = styled.div`
  display: grid;
  grid-gap: 3rem;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
