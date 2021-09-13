import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85rem;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 70rem;
    justify-content: space-between;
  }

  @media screen and (max-width: 558px) {
    /* display: block; */
  }
`;

export const IconContainer = styled.div`
  height: 7rem;
  width: 10%;

  @media screen and (max-width: 550px) {
    width: 5rem;
  }
`;

export const Icon = styled.img`
  height: 100%;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 5rem;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    width: 60%;
  }
`;

export const WrapperNames = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const WrapperDetails = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: auto;
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const WrapperDates = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: auto;
    grid-area: 2 / 1 / 3 / 2;
  }
`;

export const WrapperPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: auto;
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const WrapperActions = styled.div`
  width: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
    grid-area: 1 / 3 / 3 / 4;
    width: fit-content;
  }
`;

export const Detail = styled.div`
  font-size: 1.6rem;
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;

export const ButtonContainer = styled.div``;
