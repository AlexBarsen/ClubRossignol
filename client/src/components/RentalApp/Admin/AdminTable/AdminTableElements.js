import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  font-size: 2rem;
  border: 1px solid black;
  border-collapse: collapse;
`;

export const Head = styled.thead``;

export const Heading = styled.th`
  border: 1px solid black;
`;

export const Row = styled.tr`
  text-align: center;
`;

export const Data = styled.td`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;

export const Body = styled.tbody``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 0.2fr;
  align-items: center;
  /* justify-items: center; */
`;

export const AdminOrderedItems = styled.div``;

export const SelectContainer = styled.div`
  padding: 1rem;
  width: 20rem;
`;
