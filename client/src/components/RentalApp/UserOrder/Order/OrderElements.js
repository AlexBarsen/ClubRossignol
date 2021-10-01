import styled from "styled-components";

export const OrderContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  box-shadow: 0.5rem 0.7rem 1rem rgba(0, 0, 0, 0.5);
`;

export const OrderedItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 0px 2px 0px 0px;
  width: 40rem;

  @media screen and (max-width: 768px) {
    width: 38rem;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;

  @media screen and (max-width: 768px) {
    width: 23rem;
  }
`;

export const OrderInfoLeft = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 2px 0px 0px 0px;

  &:first-child {
    border: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const OrderInfoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  height: 35%;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const OrderInfoSpan = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
