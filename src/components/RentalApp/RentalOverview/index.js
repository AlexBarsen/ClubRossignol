import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsArray } from "../../../redux/rental/rental.selectors";

import { RentalOverviewContainer, Element } from "./RentalOverviewElements";

import RentalCategory from "../RentalCategory/index";

const RentalOverview = ({ rentalsArray }) => {
  return (
    <>
      <RentalOverviewContainer>
        <Element>
          {rentalsArray.map(({ id, categoryName, products }) => (
            <RentalCategory
              key={id}
              products={products}
              categoryName={categoryName}
            />
          ))}
        </Element>
      </RentalOverviewContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  rentalsArray: selectRentalsArray,
});

export default connect(mapStateToProps)(RentalOverview);
