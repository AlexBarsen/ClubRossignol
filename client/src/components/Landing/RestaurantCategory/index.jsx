import React from "react";

import {
  RestaurantCategoryContainer,
  CategoryTitle,
  IconContainer,
  Icon,
  RestaurantCategoryPreview,
} from "./RestaurantCategoryElements";

import RestaurantItem from "../RestaurantItem/index";

const RestaurantCategory = ({ categoryName, categoryIcon, products }) => (
  <RestaurantCategoryContainer>
    <CategoryTitle>{categoryName.toUpperCase()}</CategoryTitle>
    <IconContainer>
      <Icon src={categoryIcon} />
    </IconContainer>
    <RestaurantCategoryPreview>
      {products.map((product) => (
        <RestaurantItem key={product.productID} item={product} />
      ))}
    </RestaurantCategoryPreview>
  </RestaurantCategoryContainer>
);

export default RestaurantCategory;
