import styled from "styled-components";

export const RestaurantCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CategoryTitle = styled.div`
  font-size: 1.6rem;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
`;

export const Icon = styled.img`
  height: 4rem;
`;

export const RestaurantCategoryPreview = styled.div``;
