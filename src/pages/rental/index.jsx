import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import { RentalPageContainer } from "./RentaPageElements";

// import RentalOverview from "../../components/oldProj/RentalOverview/index";

import Header from "../../components/RentalApp/Header/index";

import { Wrapper } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

import RentalOverviewContainer from "../../components/RentalApp/RentalOverview/RentalOverviewContainer";

import CategoryPage from "../Category/index";

const RentalPage = ({ fetchRentalsStart, match }) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <RentalPageContainer>
      <Header />
      <Wrapper>
        <Route
          exact
          path={`${match.path}`}
          component={RentalOverviewContainer}
        />
        <Route path={`${match.path}/:categoryName`} component={CategoryPage} />
      </Wrapper>
    </RentalPageContainer>
  );
};

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
});

export default connect(null, mapDispatchToProps)(RentalPage);
