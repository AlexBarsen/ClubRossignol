import styled from "styled-components";

export const CategoryProductsContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;

  margin-bottom: 2rem;
`;
