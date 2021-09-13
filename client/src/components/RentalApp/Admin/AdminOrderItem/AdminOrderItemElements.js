import styled from "styled-components";

export const AdminOrderItemContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid black;

  &:last-child {
    border: none;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Detail = styled.div`
  font-size: 1.6rem;
`;

export const PriceDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
`;
