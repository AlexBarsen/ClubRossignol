import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

export const Body = styled.tbody`
  background: lightgray;

  @media screen and (max-width: 768px) {
    background: none;
  }
`;

export const Row = styled.tr``;

export const Heading = styled.th`
  font-size: 2.6rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Message = styled.h1`
  margin-top: 5rem;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
`;

export const Total = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const TotalPrice = styled.div``;

export const TotalItems = styled.div``;

export const TotalSpan = styled.span`
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
