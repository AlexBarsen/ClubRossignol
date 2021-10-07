import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  font-size: 3.5rem;

  @media screen and (max-width: 1000px) {
    font-size: 4.5rem;
  }
`;

export const CategoryProductsContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;

  @media screen and (max-width: 900px) {
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
