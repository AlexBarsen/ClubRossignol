import styled from "styled-components";

export const RentalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 26rem;
  box-shadow: 0.3rem 0.3rem 1rem #656565;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;

  border-bottom: 3px solid black;
`;

export const Icon = styled.img`
  padding: 2rem;
  height: 18rem;
  width: 18rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.6rem;
  padding: 1rem;
  background: #ffd540;
`;

export const ProductName = styled.h1`
  font-size: 1.8rem;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-weight: bold;
`;
