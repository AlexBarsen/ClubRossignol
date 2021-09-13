import styled from "styled-components";

export const RentalModalInfoContainer = styled.div``;

export const Message = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Dates = styled.div`
  margin-top: 2rem;
`;

export const DateContent = styled.div`
  display: flex;
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;
