import styled from "styled-components";

export const Row = styled.tr`
  @media screen and (max-width: 768px) {
    border: 1px solid black;
    background: lightgray;
    display: block;
    margin-bottom: 5rem;
  }
`;

export const Data = styled.td`
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 1rem 0;
    align-items: center;
    border-bottom: 1px solid black;

    &:last-child {
      border: none;
    }

    &:before {
      content: attr(data-label);
      font-size: 3rem;
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
    font-size: 2.6rem;
  }
`;

export const DataDetails = styled.td`
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    /* flex-direction: column;s */
    border-bottom: 1px solid black;
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
