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
  animation: ${fadeIn} 2s ease-in-out;
`;

export const CategoryTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  font-size: 3.5rem;

  @media screen and (max-width: 1000px) {
    font-size: 4.5rem;
  }
`;

export const CategoryItems = styled.div`
  display: grid;
  grid-gap: 5rem;

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
