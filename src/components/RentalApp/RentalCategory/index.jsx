import React from "react";

import {
  RentalCategoryContainer,
  CategoryTitle,
  CategoryItems,
} from "./RentalCategoryElements";

import RentalItem from "../RentalItem/index";

const RentalCategory = ({ categoryName, products }) => {
  return (
    <>
      <RentalCategoryContainer>
        <CategoryTitle>{categoryName}</CategoryTitle>
        <CategoryItems>
          {products.map((item) => (
            <RentalItem
              specificCategory={false}
              key={item.productID}
              item={item}
            />
          ))}
        </CategoryItems>
      </RentalCategoryContainer>
    </>
  );
};

export default RentalCategory;
