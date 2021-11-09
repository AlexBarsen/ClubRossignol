import React, { useEffect, useState, lazy, Suspense } from "react";
import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";

import { RentalPageContainer, RentalContent, Toast } from "./RentaPageElements";

import Navigation from "../../components/RentalApp/Navigation/Navigation";

import { Wrapper } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

import ProtectedRoute from "../../components/Routes/ProtectedRoute";
import PrivateRoute from "../../components/Routes/PrivateRoute";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { checkUserSession } from "../../redux/user/user.actions";

import Spinner from "../../components/Spinner/index";

import ErrorBoundary from "../../components/ErrorBoundary/index";

const CheckoutPage = lazy(() => import("../Checkout/index"));
const DashboardPage = lazy(() => import("../Dashboard/index"));
const AdminDashboardPage = lazy(() => import("../AdminDashboard/index"));
const RentalOverviewContainer = lazy(() =>
  import(
    "../../components/RentalApp/Rental/RentalOverview/RentalOverviewContainer"
  )
);
const CategoryPageContainer = lazy(() =>
  import("../Category/CategoryPageContainer")
);

const RentalPage = ({
  fetchRentalsStart,
  checkUserSession,
  match,
  currentUser,
}) => {
  useEffect(() => {
    fetchRentalsStart();
    checkUserSession();
  }, [fetchRentalsStart, checkUserSession]);

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
      <Navigation toggle={toggle} />

      <Wrapper>
        <RentalContent>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
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

                <Route
                  exact
                  path={`${match.path}/checkout`}
                  component={CheckoutPage}
                />

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
              </Suspense>
            </ErrorBoundary>
          </Switch>
          <Toast
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="colored"
            pauseOnFocusLoss
            draggable
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
