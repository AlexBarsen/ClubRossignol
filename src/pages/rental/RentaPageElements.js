import styled from "styled-components";

export const RentalPageContainer = styled.div`
  max-width: 180rem;
  margin: auto;
`;

export const RentalCategoriesContainer = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
  background: lightgray;

  @media screen and (max-width: 768px) {
    height: 7rem;
  }

  @media screen and (max-width: 600px) {
    height: 9rem;
  }
`;

export const Wrapper = styled.div`
  background: #eae9e9;
`;

export const RentalContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
