import styled from "styled-components";

export const RentalPageContainer = styled.div``;

export const RentalCategoriesContainer = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
  background: #fa2742;

  @media screen and (max-width: 768px) {
    height: 7rem;
  }

  @media screen and (max-width: 600px) {
    height: 9rem;
  }
`;

export const Wrapper = styled.div`
  background: #e8eae3;
  /* min-height: 826px; */
`;

export const RentalContent = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 2rem;
`;
