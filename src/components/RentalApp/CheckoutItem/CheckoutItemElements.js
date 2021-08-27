import styled from "styled-components";

export const Row = styled.tr``;

export const Data = styled.td`
  text-align: center;
`;

export const IconContainer = styled.div`
  margin: auto;
  height: 10rem;
  width: 10rem;
`;

export const Icon = styled.img`
  width: 100%;
`;

export const DataText = styled.div`
  font-size: 2rem;
`;

export const DataDetails = styled.td`
  text-align: center;
`;

export const DataSpan = styled.span`
  font-weight: bold;
`;

export const Actions = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 18rem;
  }
`;

export const ButtonContainer = styled.div``;
