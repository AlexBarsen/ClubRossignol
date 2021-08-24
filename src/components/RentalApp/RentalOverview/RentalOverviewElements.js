import styled from "styled-components";
import Scroll from "react-scroll";

export const RentalOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Element = styled(Scroll.Element)`
  height: 680px;
  overflow: scroll;
  margin: 1.5rem;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    overflow-y: visible;
  }

  @media screen and (max-width: 768px) {
    height: 500px;
    overflow-y: visible;
  }

  @media screen and (max-width: 600px) {
    height: 525px;
    overflow-y: visible;
  }

  @media screen and (max-width: 480px) {
    height: 550px;
    overflow-y: visible;
  }
`;
