import styled from "styled-components";

export const OrderContainer = styled.div`
  background: #fff;
  margin-bottom: 2rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  width: 60rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ isOpen }) => (isOpen ? "3px solid black" : "none")};
  background: rgba(255, 213, 64, 1);
  padding: 1rem;
`;

export const OrderedItems = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 213, 64, 0.3);
  padding: 1rem;
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const OrderInfo = styled.div`
  font-size: 1.6rem;
  padding: 0.25rem 0;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const OrderInfoSpan = styled.span`
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
`;
