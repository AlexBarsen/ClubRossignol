import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsArray } from "../../../../redux/rental/rental.selectors";

import RentalCategory from "../RentalCategory/RentalCategory";

import RentalFAQ from "../RentalFAQ/RentalFAQ";

import RentalSteps from "../../RentalSteps/RentalSteps";
import {
  WinterPricesTable,
  BikePricesTable,
} from "../../PricesTable/PricesTable";
import { Container } from "react-bootstrap";

const RentalOverview = ({ rentalsArray }) => {
  return (
    <>
      <RentalSteps />

      <h2 className="text-center mt-5">Lista preturi</h2>
      <div className="d-flex justify-content-around mt-4">
        <div>
          <WinterPricesTable />
        </div>

        <div>
          <BikePricesTable />
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-5 h3 text-center">
          <strong>Frequently asked questions</strong>
        </div>

        <ol>
          <RentalFAQ />
        </ol>
      </div>

      {/* <div>Toate Echipamentele:</div>
      <div className="pt-4">
        {rentalsArray.map(({ id, categoryName, products }) => (
          <RentalCategory
            key={id}
            products={products}
            categoryName={categoryName}
          />
        ))}
      </div> */}
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  rentalsArray: selectRentalsArray,
});

export default connect(mapStateToProps)(RentalOverview);
