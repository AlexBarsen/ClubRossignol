import styled from "styled-components";
import Scroll from "react-scroll";

export const RentalOverviewContainer = styled.div`
  width: 100%;
`;

export const Element = styled(Scroll.Element)`
  max-height: 81vh;
  overflow: scroll;
  margin: 1.5rem;
  overflow-x: hidden;

  @media screen and (max-width: 1200px) {
    max-height: 82.7vh;
  }

  @media screen and (max-width: 1100px) {
    max-height: 84.8vh;
  }

  @media screen and (max-width: 900px) {
    max-height: 86vh;
  }

  @media screen and (max-width: 768px) {
    max-height: 82vh;
  }

  @media screen and (min-height: 1000px) {
    max-height: 90vh;
  }
`;
