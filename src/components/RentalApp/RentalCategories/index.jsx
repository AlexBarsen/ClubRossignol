import React from "react";

import { FaArrowDown } from "react-icons/fa";
import { Category, Title, Icon } from "./RentalCategoriesElements";

const RentalCategories = ({ category }) => {
  const { title } = category;

  return (
    <>
      <Category to={`/rental/category/${title.toLowerCase()}`}>
        <Title>{title}</Title>
        <FaArrowDown size={20} />
      </Category>
    </>
  );
};

export default RentalCategories;
