import styled from "styled-components";
import Scroll from "react-scroll";

export const RentalOverviewContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Element = styled(Scroll.Element)`
  height: 98%;
  overflow: scroll;
  margin: 1.5rem;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    /* display: flex; */
    overflow-y: visible;
  }
`;

export const ElementContainer = styled.div`
  /* display: flex;
  flex-flow: wrap;
  height: 100%; */
`;
