import styled from "styled-components";

export const RentalItemContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: ${({ specificCategory }) => (specificCategory ? "33rem" : "22rem")};
  width: ${({ specificCategory }) => (specificCategory ? "40em" : "22rem")};
  background-color: rgba(#fff, 0.8);
  border: 0.3rem solid black;
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.5rem 0 #656565;
  margin: 2rem 1.25rem 0 1.25rem;
`;

export const Title = styled.h1`
  padding: 0 0.5rem;
  text-align: center;
  font-size: ${({ specificCategory }) =>
    specificCategory ? "2rem" : "1.6rem"};
`;

export const Icon = styled.img`
  width: 45%;
`;

export const Footer = styled.div`
  font-size: ${({ specificCategory }) =>
    specificCategory ? "2rem" : "1.4rem"};
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div``;
