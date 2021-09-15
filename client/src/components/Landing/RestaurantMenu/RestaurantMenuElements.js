import styled from "styled-components";

export const RestaurantMenuContainer = styled.div``;

export const RestaurantCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  justify-items: center;
  padding: 3rem;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50rem);
  gap: 2rem;
  /* flex-direction: column; */
  justify-content: space-evenly;
`;
