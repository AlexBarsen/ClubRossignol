import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsArray } from "../../../redux/rental/rental.selectors";

import { RentalOverviewContainer } from "./RentalOverviewElements";

import RentalCategory from "../RentalCategory/index";

const RentalOverview = ({ rentalsArray }) => {
  return (
    <>
      <RentalOverviewContainer>
        {rentalsArray.map(({ id, categoryName, products }) => (
          <RentalCategory
            key={id}
            products={products}
            categoryName={categoryName}
          />
        ))}
      </RentalOverviewContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  rentalsArray: selectRentalsArray,
});

export default connect(mapStateToProps)(RentalOverview);
