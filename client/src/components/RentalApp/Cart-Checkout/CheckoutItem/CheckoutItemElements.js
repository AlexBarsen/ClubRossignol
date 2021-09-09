import styled from "styled-components";

export const Row = styled.tr`
  background: lightgray;

  @media screen and (max-width: 768px) {
    display: block;

    &:not(:last-child) {
      border-bottom: 2px solid black;
    }
  }
`;

export const Data = styled.td`
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 1rem 0;
    align-items: center;

    / &:last-child {
      border: none;
    }

    &:before {
      content: attr(data-label);
      font-size: 3.4rem;
      font-weight: bold;
      width: 20rem;
    }
  }
`;

export const IconContainer = styled.div`
  margin: auto;
  height: 10rem;
  width: 10rem;

  @media screen and (max-width: 768px) {
    margin: 0;
    height: 8rem;
    width: 8rem;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;

export const DataText = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const DataDetails = styled.td`
  padding: 1rem 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;

    padding: 1rem 0;

    text-align: left;

    &:before {
      content: attr(data-label);
      font-size: 3rem;
      font-weight: bold;
      width: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
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
    flex-direction: row;
    width: 30%;
    justify-content: space-between;
    height: auto;
  }
`;

export const ButtonContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
