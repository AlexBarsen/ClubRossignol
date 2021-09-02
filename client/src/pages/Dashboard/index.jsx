import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { fetchOrdersStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { DashboardPageContainer } from "./DashboardElements";

import OrdersContainer from "../../components/RentalApp/Orders/OrdersContainer";

import UserInformation from "../../components/RentalApp/UserInformation/index";

const DashboardPage = ({ currentUser, fetchOrdersStart }) => {
  useEffect(() => {
    fetchOrdersStart(currentUser);
  }, [fetchOrdersStart, currentUser]);

  return (
    <>
      <DashboardPageContainer>
        <UserInformation />
        <OrdersContainer />
      </DashboardPageContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: (currentUser) =>
    dispatch(fetchOrdersStart({ currentUser })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
