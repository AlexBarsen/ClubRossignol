import React from "react";

import { Category, Title } from "./RentalCategoriesElements";

const RentalCategories = ({ category }) => {
  const { title } = category;
  return (
    <>
      <Category>
        <Title to={`/rental/category/${title.toLowerCase()}`}>{title}</Title>
      </Category>
    </>
  );
};

export default RentalCategories;
