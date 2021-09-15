import styled from "styled-components";
import Scroll from "react-scroll";

export const RestaurantMenuContainer = styled.div``;

export const RestaurantCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const Element = styled(Scroll.Element)`
  margin-top: 2rem;
  overflow: auto;
  position: relative;
  height: 350px;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50rem);
  gap: 2rem;
  /* flex-direction: column; */
  justify-content: space-evenly;
`;

export const Message = styled.div`
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
`;
