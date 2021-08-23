import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import {
  RentalPageContainer,
  RentalContent,
  RentalCategories,
} from "./RentaPageElements";

import Header from "../../components/RentalApp/Header/index";

import { Wrapper } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

import RentalOverviewContainer from "../../components/RentalApp/RentalOverview/RentalOverviewContainer";

import CategoryPage from "../Category/index";
import { createStructuredSelector } from "reselect";
import { selectRentalsCategories } from "../../redux/rental/rental.selectors";
import RentalCategory from "../../components/RentalApp/Sidebar/index";

import Footer from "../../components/RentalApp/Footer/index";

const RentalPage = ({ fetchRentalsStart, match, rentalCategories }) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <RentalPageContainer>
      <Header />
      <Wrapper>
        <RentalCategories>
          {rentalCategories.map((category) => (
            <RentalCategory key={category} category={category} />
          ))}
        </RentalCategories>
        <RentalContent>
          <Route
            exact
            path={`${match.path}`}
            component={RentalOverviewContainer}
          />
          <Route
            path={`${match.path}/:categoryName`}
            component={CategoryPage}
          />
        </RentalContent>
      </Wrapper>
      <Footer />
    </RentalPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  rentalCategories: selectRentalsCategories,
});

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
