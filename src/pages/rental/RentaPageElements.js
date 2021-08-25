import styled from "styled-components";

export const RentalPageContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  margin: auto;
  border-radius: 2rem;
  background: #0074e1;
  height: 98%;
  width: 98%;
`;

export const Wrapper = styled.div`
  height: 85%;
  display: flex;

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */

    /* z-index: -5; */
  }
`;

export const RentalCategories = styled.div`
  display: flex;
  flex-direction: column;
  background: #1b9ce5;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
