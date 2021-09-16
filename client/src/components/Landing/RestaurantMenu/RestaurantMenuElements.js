import styled from "styled-components";
import Scroll from "react-scroll";

export const RestaurantMenuContainer = styled.div``;

export const RestaurantCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Element = styled(Scroll.Element)`
  margin-top: 2rem;
  overflow: auto;
  position: relative;
  height: 350px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.4rem;

  margin-bottom: 1.5rem; ;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40rem);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Message = styled.div`
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
`;
