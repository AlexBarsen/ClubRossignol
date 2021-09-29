import styled from "styled-components";

export const FeaturesContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Features = styled.div`
  background: #dedede;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
