import styled from "styled-components";

export const AdminOrderItemContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid black;
  align-items: center;
  /* background: #fff; */
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  font-size: 1.6rem;
`;
