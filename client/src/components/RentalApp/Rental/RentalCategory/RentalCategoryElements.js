import styled from "styled-components";

export const CategoryItems = styled.div`
  display: grid;
  grid-gap: 5rem;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);

  justify-items: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 900px) {
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
