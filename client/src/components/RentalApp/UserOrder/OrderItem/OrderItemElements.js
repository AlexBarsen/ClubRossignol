import styled from "styled-components";

export const OrderItemContainer = styled.div`
  margin-top: 2rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0px 0px 2px 0px;
`;

export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  @media screen and (max-width: 768px) {
    width: 38rem;
  }
`;

export const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 25rem;

  @media screen and (max-width: 768px) {
    width: 23rem;
  }
`;

export const DetailLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.6rem;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 2px 2px 0px 2px;
  flex: 1;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DetailRight = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.6rem;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 2px 2px 0px 0px;
  flex: 1;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DetailSpanIndex = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const DetailSpan = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const TotalDetails = styled.div`
  display: flex;
  justify-content: flex-end;
`;
