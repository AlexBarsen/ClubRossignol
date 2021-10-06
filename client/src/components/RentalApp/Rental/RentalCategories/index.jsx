import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  RentalCategoriesContainer,
  Wrapper,
  Category,
  CategoryTitle,
  ArrowDown,
} from "./RentalCategoriesElements";

import { selectRentalsCategories } from "../../../../redux/rental/rental.selectors";
// import { FaArrowDown } from "react-icons/fa";s

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
              <ArrowDown />
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
