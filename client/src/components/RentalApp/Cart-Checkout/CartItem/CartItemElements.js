import styled from "styled-components";

export const CartItemContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const IconContainer = styled.div`
  width: 5rem;

  @media screen and (max-width: 768px) {
    width: 8rem;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 27rem;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 768px) {
    width: 42rem;
  }
`;

export const Detail = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem;

  &:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonContainer = styled.div`
  justify-self: flex-start;
`;
