import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: absolute;
  height: 41rem;
  width: 45rem;
  background: lightblue;
  right: 10px;
  top: 80px;
  z-index: 2;

  @media screen and (max-width: 1100px) {
    height: 51rem;
    width: 46rem;
  }

  @media screen and (max-width: 768px) {
    height: 70rem;
    width: 65rem;
  }
`;

export const CartItemsContainer = styled.div`
  margin-bottom: 3rem;
  overflow-y: scroll;
  height: 30rem;
  padding: 1rem;

  @media screen and (max-width: 1100px) {
    height: 40rem;
  }

  @media screen and (max-width: 768px) {
    height: 55rem;
  }
`;

export const Message = styled.div`
  font-size: 2rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
