import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsArray } from "../../../../redux/rental/rental.selectors";

import Category from "../Category/Category";

const RentalOverview = ({ rentalsArray }) => {
  return (
    <>
      <div className="mt-4">
        {rentalsArray.map(({ id, categoryName, products }) => (
          <Category key={id} products={products} categoryName={categoryName} />
        ))}
      </div>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  rentalsArray: selectRentalsArray,
});

export default connect(mapStateToProps)(RentalOverview);
