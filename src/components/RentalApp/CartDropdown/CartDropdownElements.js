import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  /* display: block; */
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: absolute;
  height: 35rem;
  width: 75rem;
  background: red;
  right: 10px;
  top: 80px;
  z-index: 2;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

export const Message = styled.p``;

export const Footer = styled.div``;

export const Total = styled.div`
  font-size: 2rem;
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-left: 2rem;
`;
