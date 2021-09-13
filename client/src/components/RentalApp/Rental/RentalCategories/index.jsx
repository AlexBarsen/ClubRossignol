import React from "react";

import { FaArrowDown } from "react-icons/fa";
import {
  RentalCategoriesContainer,
  Wrapper,
  Category,
  CategoryTitle,
} from "./RentalCategoriesElements";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRentalsCategories } from "../../../../redux/rental/rental.selectors";

const RentalCategories = ({ categories }) => {
  return (
    <>
      <RentalCategoriesContainer>
        <Wrapper>
          {categories.map((category) => (
            <Category
              key={category.title}
              to={`/rental/category/${category.title.toLowerCase()}`}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <FaArrowDown size={20} />
            </Category>
          ))}
        </Wrapper>
      </RentalCategoriesContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectRentalsCategories,
});

export default connect(mapStateToProps)(RentalCategories);
