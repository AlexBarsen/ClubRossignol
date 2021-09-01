import styled from "styled-components";
import Scroll from "react-scroll";

export const RentalOverviewContainer = styled.div`
  /* width: 100%; */
`;

export const Element = styled(Scroll.Element)`
  height: 750px;
  overflow: scroll;
  margin: 1.5rem;
  overflow-x: hidden;
`;
