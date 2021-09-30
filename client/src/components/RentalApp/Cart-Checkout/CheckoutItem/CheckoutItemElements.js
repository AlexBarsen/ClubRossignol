import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0.7rem 1rem 1rem rgba(0, 0, 0, 0.5);
  border: 2px solid black;
`;

export const IconContainer = styled.div`
  width: 10rem;
  margin: auto;
`;

export const Icon = styled.img`
  width: 10rem;
`;

export const Body = styled.div`
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  border-width: 2px 2px 0px 2px;
  padding: 1rem;
`;

export const ItemName = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.125);
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListGroupItemSpan = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

export const ListGroupItemLeft = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  border-width: 2px 2px 0px 2px;
  width: 25rem;
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    width: 30rem;
  }
`;

export const ListGroupItemRight = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  border-width: 2px 2px 0px 0px;
  width: 20rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    width: 25rem;
  }
`;

export const ListGroupItemCenter = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  border-width: 2px 2px 0px 2px;
  width: 30rem;
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    width: 35rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  border-color: rgba(0, 0, 0, 0.125);
  border-style: solid;
  border-width: 2px 2px 0px 0px;
  padding: 1rem 0;
`;

export const ButtonContainer = styled.div``;
