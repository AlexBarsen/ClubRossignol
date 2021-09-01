import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import {
  RentalPageContainer,
  RentalContent,
  RentalCategoriesContainer,
} from "./RentaPageElements";

import Navbar from "../../components/RentalApp/Navbar/index";

import { Wrapper } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

import RentalOverviewContainer from "../../components/RentalApp/Rental/RentalOverview/RentalOverviewContainer";

import CategoryPageContainer from "../Category/CategoryPageContainer";

import { createStructuredSelector } from "reselect";
import {
  selectRentalsCategories,
  selectIsCategoriesLoaded,
} from "../../redux/rental/rental.selectors";

import RentalCategories from "../../components/RentalApp/Rental/RentalCategories/index";

import Footer from "../../components/RentalApp/Footer/index";

import Sidebar from "../../components/RentalApp/Sidebar/index";

import CheckoutPage from "../Checkout/index";
import DashboardPage from "../Dashboard";

const RentalPage = ({
  fetchRentalsStart,
  match,
  rentalCategories,
  selectIsCategoriesLoaded,
}) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <RentalPageContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Wrapper>
        <RentalCategoriesContainer>
          {rentalCategories.map((category) => (
            <RentalCategories key={category.title} category={category} />
          ))}
        </RentalCategoriesContainer>

        <RentalContent>
          <Route
            exact
            path={`${match.path}`}
            component={RentalOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/category/:categoryName`}
            component={CategoryPageContainer}
          />
          {/* <Route exact path={`${match.path}/sign`} component={SignPage} /> */}
          <Route
            exact
            path={`${match.path}/checkout`}
            component={CheckoutPage}
          />
          <Route
            exact
            path={`${match.path}/dashboard`}
            component={DashboardPage}
          />{" "}
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
  isRentalsLoaded: selectIsCategoriesLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
