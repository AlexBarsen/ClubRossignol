import styled from "styled-components";

export const RentalItemContainer = styled.div`
  border: 5px solid black;
  border-radius: 0.5rem;
  height: 35rem;
  width: 30rem;
  display: flex;
  flex-direction: column;

  box-shadow: 0.3rem 0.3rem 0.5rem #656565;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 600px) {
    height: 60rem;
    width: 50rem;
  }
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 1.8rem;
  margin-top: 1.5rem;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const IconContainer = styled.div`
  /* background-image: linear-gradient(
    to right bottom,
    rgba(255, 213, 64, 1),
    rgba(250, 39, 66, 1)
  ); */

  display: flex;
  justify-content: center;
  height: 23rem;
  border-bottom: 3px solid black;
  /* border-top-left-radius: inherit;
  border-top-right-radius: inherit; */

  @media screen and (max-width: 600px) {
    height: 42rem;
    /* width: 50rem; */
  }
`;

export const Icon = styled.img`
  padding: 3rem;
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  background: rgba(255, 213, 64, 1);
  /* background-image: linear-gradient(
    to right top,
    rgba(255, 213, 64, 1),
    rgba(250, 39, 66, 1)
  ); */
  /* border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit; */
`;

export const Footer = styled.div`
  font-size: 1.6rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 3.4rem;
  }
`;

export const Price = styled.div`
  font-weight: bold;
`;
