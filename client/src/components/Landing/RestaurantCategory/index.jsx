import React from "react";

import {
  RestaurantCategoryContainer,
  IconContainer,
  Icon,
  CategoryTitle,
} from "./RestaurantCategoryElements";

import { useTranslation } from "react-i18next";

const RestaurantCategory = ({ categoryName, icon, products, filterMenu }) => {
  const { t } = useTranslation();
  return (
    <RestaurantCategoryContainer
      onClick={() => filterMenu(categoryName, products)}
    >
      <IconContainer>
        <Icon src={icon} />
      </IconContainer>
      <CategoryTitle>{t(categoryName)}</CategoryTitle>
    </RestaurantCategoryContainer>
  );
};

export default RestaurantCategory;
