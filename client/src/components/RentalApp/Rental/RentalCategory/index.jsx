import React from "react";

import {
  RentalCategoryContainer,
  CategoryTitle,
  CategoryItems,
} from "./RentalCategoryElements";

import RentalCard from "../RentalCard/RentalCard";

const RentalCategory = ({ categoryName, products }) => {
  return (
    <>
      <RentalCategoryContainer>
        <CategoryTitle>{categoryName}</CategoryTitle>
        <CategoryItems type={categoryName}>
          {products.map((item) => (
            <RentalCard key={item.productID} item={item} />
          ))}
        </CategoryItems>
      </RentalCategoryContainer>
    </>
  );
};

export default RentalCategory;
