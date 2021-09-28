import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 2rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 213, 64, 1);

  @media screen and (max-width: 768px) {
    width: 45rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WrapperNumberIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DetailNumber = styled.div`
  font-size: 2rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const IconContainer = styled.div`
  height: 7rem;
  width: 7rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  height: 8rem;
  width: 8rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

export const WrapperNames = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
    /* border-bottom: 1px solid black; */
  }
`;

export const DetailTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Detail = styled.div`
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    padding: 0.5rem 0;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;

export const WrapperDetails = styled.div`
  margin-left: 2.5rem;
  width: 27%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: auto;
    justify-content: flex-start;
  }
`;

export const WrapperDates = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
    /* border-bottom: 1px solid black; */
  }
`;

export const WrapperPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
    /* border-bottom: 1px solid black; */
  }
`;

export const WrapperActions = styled.div`
  width: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 15rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const DetailNumberMobile = styled.span`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
