import styled from "styled-components";

export const CategoryItems = styled.div`
  display: grid;
  grid-gap: 2rem;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);

  margin-bottom: 2rem;
`;
