import styled from "styled-components";

export const RentalPageContainer = styled.div`
  /* border-radius: 2rem; */
  background: #0074e1;
  /* max-width: 2000px; */

  /* margin: auto; */
`;

export const RentalCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #1b9ce5;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const RentalContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

export const RentalCategories1 = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    height: 70px;
    display: flex;
    width: 100%;
    background: red;
    justify-content: center;
  }
`;
