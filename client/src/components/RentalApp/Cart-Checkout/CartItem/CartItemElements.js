import styled from "styled-components";

export const CartItemContainer = styled.div`
  background: #fff;
  border-radius: 1rem;

  display: flex;
  align-items: center;

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
  padding: 1rem;
  width: 27rem;

  @media screen and (max-width: 768px) {
    width: 42rem;
  }
`;

export const Detail = styled.div`
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonContainer = styled.div`
  justify-self: flex-start;
`;
