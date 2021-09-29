import React from "react";
import { useTranslation } from "react-i18next";

import {
  RestaurantCategoryContainer,
  IconContainer,
  Icon,
  CategoryTitle,
} from "./RestaurantCategoryElements";

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
