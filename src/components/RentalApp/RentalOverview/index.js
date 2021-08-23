import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Scroll from "react-scroll";

import { selectRentalsArray } from "../../../redux/rental/rental.selectors";

import { RentalOverviewContainer } from "./RentalOverviewElements";

import RentalCategory from "../RentalCategory/index";

const RentalOverview = ({ rentalsArray }) => {
  const Element = Scroll.Element;

  return (
    <>
      <RentalOverviewContainer>
        <Element
          style={{
            height: "670px",
            overflow: "scroll",
            margin: "1.5rem",
            overflowX: "hidden",
          }}
        >
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
