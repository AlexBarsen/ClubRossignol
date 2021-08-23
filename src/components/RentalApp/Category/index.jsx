import React from "react";

import { Category, Title, Icon } from "./RentalCategoryElements";

const RentalCategory = ({ category }) => {
  return (
    <>
      <Category to={`/rental/${category.toLowerCase()}`}>
        <Title>{category}</Title>
        <Icon></Icon>
      </Category>
    </>
  );
};

export default RentalCategory;
