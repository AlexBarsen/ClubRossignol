import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 {
    0% {
      opacity: 0;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const RentalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 26rem;
  box-shadow: 0.3rem 0.3rem 1rem #656565;

  animation: ${fadeIn} 2s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
  border-bottom: 3px solid black;
`;

export const Icon = styled.img`
  padding: 2rem;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.6rem;
  padding: 1rem;
  background: rgba(255, 213, 64, 1);
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
