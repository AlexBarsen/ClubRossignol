import styled from "styled-components";

export const RentalItemContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 30rem;
  width: 30rem;
  background-color: rgba(#fff, 0.8);
  border: 0.3rem solid black;
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.5rem 0 #656565;
  /* margin: 2rem 1.5rem 0 1.5rem; */
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 1050px) {
    height: 28.5rem;
    width: 28.5rem;
  }

  @media screen and (max-width: 1000px) {
    height: 35rem;
    width: 35rem;
  }

  @media screen and (max-width: 768px) {
    height: 35rem;
    width: 35rem;
  }

  @media screen and (max-width: 480px) {
    height: 32rem;
    width: 32rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
`;

export const Icon = styled.img`
  width: 45%;
`;

export const Footer = styled.div`
  font-size: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div``;
