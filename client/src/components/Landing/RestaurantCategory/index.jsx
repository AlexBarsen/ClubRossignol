import React from "react";

import {
  RestaurantCategoryContainer,
  CategoryTitle,
} from "./RestaurantCategoryElements";

const RestaurantCategory = ({
  categoryName,
  categoryIcon,
  products,
  filterMenu,
}) => {
  return (
    <RestaurantCategoryContainer>
      <CategoryTitle onClick={() => filterMenu(products)}>
        {categoryName.toUpperCase()}
      </CategoryTitle>
    </RestaurantCategoryContainer>
  );
};

export default RestaurantCategory;
