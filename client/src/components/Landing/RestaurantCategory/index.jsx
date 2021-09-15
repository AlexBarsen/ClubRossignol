import React from "react";

import {
  RestaurantCategoryContainer,
  IconContainer,
  Icon,
  CategoryTitle,
} from "./RestaurantCategoryElements";

const RestaurantCategory = ({ categoryName, icon, products, filterMenu }) => {
  return (
    <RestaurantCategoryContainer onClick={() => filterMenu(products)}>
      <IconContainer>
        <Icon src={icon} />
      </IconContainer>
      <CategoryTitle>{categoryName.toUpperCase()}</CategoryTitle>
    </RestaurantCategoryContainer>
  );
};

export default RestaurantCategory;
