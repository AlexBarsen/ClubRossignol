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
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 600px) {
    height: 45rem;
    width: 45rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;

  @media screen and (max-width: 600px) {
    font-size: 2.8rem;
  }
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

  @media screen and (max-width: 600px) {
    font-size: 2.6rem;
  }
`;

export const Price = styled.div``;
