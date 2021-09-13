import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import { RentalPageContainer, RentalContent } from "./RentaPageElements";

import Navbar from "../../components/RentalApp/Navbar/index";

import { Wrapper } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

import RentalOverviewContainer from "../../components/RentalApp/Rental/RentalOverview/RentalOverviewContainer";

import CategoryPageContainer from "../Category/CategoryPageContainer";

import RentalCategories from "../../components/RentalApp/Rental/RentalCategories/index";

import Sidebar from "../../components/RentalApp/Sidebar/index";

import CheckoutPage from "../Checkout/index";
import DashboardPage from "../Dashboard";
import AdminDashboardPage from "../AdminDashboard/index";

import ProtectedRoute from "../../components/Routes/ProtectedRoute";
import PrivateRoute from "../../components/Routes/PrivateRoute";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const RentalPage = ({ fetchRentalsStart, match, currentUser }) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <RentalPageContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Wrapper>
        <RentalCategories />

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
          {/* <Route
            exact
            path={`${match.path}/dashboard`}
            component={DashboardPage}
          />{" "}
          <Route
            exact
            path={`${match.path}/admin`}
            component={AdminDashboardPage}
          /> */}

          <ProtectedRoute
            exact
            path={`${match.path}/dashboard`}
            component={DashboardPage}
            isAuth={currentUser}
          />

          <PrivateRoute
            exact
            path={`${match.path}/admin`}
            component={AdminDashboardPage}
            isAuth={currentUser}
          />
        </RentalContent>
      </Wrapper>
    </RentalPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
  // isRentalsLoaded: selectIsCategoriesLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
