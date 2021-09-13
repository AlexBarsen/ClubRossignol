import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  border-radius: 0.5rem;
  border: 2px solid black;
  padding: 1.5rem;
  position: absolute;
  height: 41rem;
  width: 45rem;
  background: #fff;
  right: 10px;
  top: 80px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    height: 70rem;
    width: 60rem;
  }
`;

export const CartItemsContainer = styled.div`
  margin-bottom: 3rem;

  overflow-y: scroll;
  height: 30rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    height: 55rem;
  }
`;

export const Message = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3.4rem;
  }
`;
