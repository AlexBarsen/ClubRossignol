import styled from "styled-components";

export const RentalModalInfoContainer = styled.div``;

export const Message = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 3rem;
  }
`;

export const DateContent = styled.div`
  display: flex;
  font-size: 1.6rem;
  padding: 0.2rem;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 3rem;
  }
`;

export const Dates = styled.div`
  padding: 0.2rem;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;
