import styled, { keyframes } from "styled-components";
import Scroll from "react-scroll";

const fadeIn = keyframes`
 {
    0% {
      opacity: 0;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const CategoryPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const Title = styled.div`
  font-size: 3rem;
`;

export const CategoryProductsContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ type }) =>
    type === "Bike" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Element = styled(Scroll.Element)`
  height: fit-content;
  overflow: scroll;
  margin: 1.5rem;
  overflow-x: hidden;
`;
