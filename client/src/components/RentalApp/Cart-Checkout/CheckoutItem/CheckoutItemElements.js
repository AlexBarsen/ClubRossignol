import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85rem;
  background: rgba(255, 213, 64, 1);
  border-radius: 0.5rem;

  border: 2px solid black;
  margin-bottom: 2rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: auto;
    align-items: flex-start;
  }
`;

export const IconContainer = styled.div`
  height: 7rem;
  width: 7rem;
  /* margin-right: 2rem; */

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    padding: 0.5rem;
  }
`;

export const Icon = styled.img`
  height: 100%;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;

  @media screen and (max-width: 768px) {
    /* width: 80%; */
    display: grid;
    grid-template-columns: 20rem 20rem 3rem;
    gap: 1.5rem;

    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export const WrapperNames = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
    /* flex-direction: row; */
    justify-content: flex-start;
  }
`;

export const WrapperDetails = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: auto;
    /* flex-direction: column; */
    justify-content: flex-start;
  }
`;

export const WrapperDates = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: auto;
    /* flex-direction: row; */
    justify-content: flex-start;
  }
`;

export const WrapperPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: auto;
    /* flex-direction: row; */
    justify-content: flex-start;
  }
`;

export const WrapperActions = styled.div`
  width: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
    justify-content: space-evenly;
    grid-area: 1 / 3 / 3 / 4;
    align-items: center;
  }
`;

export const DetailNumber = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Detail = styled.div`
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  cursor: pointer;
`;
