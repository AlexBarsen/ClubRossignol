import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Table = styled.table`
  padding: 2rem;
  width: 100%;
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

export const Total = styled.div``;
