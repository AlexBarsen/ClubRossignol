import styled from "styled-components";

export const RentalPageContainer = styled.div`
  margin: auto;
  border-radius: 2rem;
  background: #0074e1;

  width: 97.5vw;
  height: 820px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 87%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RentalCategories = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  background: #1b9ce5;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const RentalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;
