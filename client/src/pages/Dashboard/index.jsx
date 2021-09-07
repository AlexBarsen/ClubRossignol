import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { fetchUserOrdersStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { DashboardPageContainer } from "./DashboardElements";

import OrdersContainer from "../../components/RentalApp/UserOrder/Orders/OrdersContainer";

import UserInformationContainer from "../../components/RentalApp/UserInformation/UserIonformationContainer";

const DashboardPage = ({ currentUser, fetchUserOrdersStart }) => {
  useEffect(() => {
    fetchUserOrdersStart(currentUser);
  }, [fetchUserOrdersStart, currentUser]);

  return (
    <>
      <DashboardPageContainer>
        <UserInformationContainer currentUser={currentUser} />
        <OrdersContainer />
      </DashboardPageContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserOrdersStart: (currentUser) =>
    dispatch(fetchUserOrdersStart({ currentUser })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
