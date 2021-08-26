import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: absolute;
  height: 45rem;
  width: 75rem;
  background: orangered;
  right: 10px;
  top: 80px;
`;

export const Table = styled.table`
  padding: 3rem;
  width: 100%;
  /* height: inherit; */
  /* border: 3px solid black; */
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  overflow: scroll;
`;

export const Body = styled.tbody`
  display: block;
  height: 35rem;
  overflow-y: scroll;
  overflow-x: hidden;
  background: lightgray;
`;

export const Row = styled.tr`
  position: sticky;
  top: 0;
  background: gray;
`;

export const Heading = styled.th`
  font-size: 2.6rem;
`;

export const Message = styled.p``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  font-size: 2rem;
`;
