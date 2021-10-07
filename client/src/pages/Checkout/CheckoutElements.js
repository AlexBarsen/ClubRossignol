import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckoutPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  width: fit-content;
  margin-bottom: 2rem;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const CheckoutItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Message = styled.h1`
  margin-top: 5rem;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Total = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const TotalPrice = styled.div``;

export const TotalItems = styled.div``;

export const TotalSpan = styled.span`
  font-weight: bold;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  margin-top: 2rem;
`;

export const CardDetail = styled.div`
  padding: 0.5rem 0;
`;

export const CardDetailSpan = styled.span`
  font-weight: bold;
`;
