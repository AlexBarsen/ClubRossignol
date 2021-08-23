import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRentalsCategories } from "../../../redux/rental/rental.selectors";
import RentalCategory from "../Category/index";

import { RentalCategoriesContainer } from "./RentalCategoriesElements";

const RentalCategories = ({ rentalsCategories }) => {
  return (
    <>
      <RentalCategoriesContainer>
        {rentalsCategories.map((category) => (
          <RentalCategory key={category} category={category}></RentalCategory>
        ))}
      </RentalCategoriesContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  rentalsCategories: selectRentalsCategories,
});

export default connect(mapStateToProps)(RentalCategories);
