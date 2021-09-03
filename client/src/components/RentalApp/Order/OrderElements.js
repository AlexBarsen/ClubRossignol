import styled from "styled-components";

export const OrderContainer = styled.div`
  background: #fff;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 60rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ isOpen }) => (isOpen ? "1px solid black" : "none")};
`;

export const OrderedItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div``;

export const OrderInfo = styled.div`
  font-size: 1.6rem;
  padding: 0.25rem 0;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const OrderInfoSpan = styled.span`
  font-weight: bold;
`;

export const OrderInfoStatusSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const OrderInfoStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
