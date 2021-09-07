import styled from "styled-components";

export const OrderItemsContainer = styled.div`
  &:first-child {
    margin-top: 1rem;
  }
`;

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const DetailsContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Details = styled.div``;

export const Detail = styled.div`
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;

export const TotalDetails = styled.div`
  display: flex;
  justify-content: flex-end;
`;
