import styled from "styled-components";

export const OrdersContainer = styled.div``;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  border-bottom: 2px solid black;
  width: fit-content;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
`;
