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
  animation: ${fadeIn} 2s ease-in-out;
  border: 2px solid black;
  border-radius: 0.5rem;
  height: 29rem;
  width: 25rem;
  display: flex;
  flex-direction: column;

  box-shadow: 0.3rem 0.3rem 1rem #656565;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 600px) {
    height: 47rem;
    width: 32rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
  border-bottom: 3px solid black;

  @media screen and (max-width: 600px) {
    height: 30rem;
  }
`;

export const Icon = styled.img`
  padding: 2rem;
  height: 100%;
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  font-size: 1.6rem;
  background: rgba(255, 213, 64, 1);
  position: relative;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 1.8rem;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Price = styled.div`
  /* margin-top: 2rem; */
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;
