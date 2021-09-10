import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 4rem;

  border-collapse: collapse;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const Body = styled.tbody`
  @media screen and (max-width: 768px) {
    background: none;
  }
`;

export const Row = styled.tr`
  border: 1px solid black;
  background: lightgreen;
`;

export const Heading = styled.th`
  border: 1px solid black;
  padding: 1rem;
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
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3.4rem;
    margin-bottom: 2rem;
  }
`;

export const TotalPrice = styled.div``;

export const TotalItems = styled.div``;

export const TotalSpan = styled.span`
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
