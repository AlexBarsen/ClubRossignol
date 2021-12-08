import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./UserDashboard.scss";

import { createStructuredSelector } from "reselect";

import { fetchUserOrdersStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import OrdersContainer from "../../components/rentalApplication/dashboards/user/Orders/OrdersContainer";

import UserInformationContainer from "../../components/rentalApplication/dashboards/user/UserInformation/UserIonformationContainer";

const UserDashboardPage = ({ currentUser, fetchUserOrdersStart }) => {
  useEffect(() => {
    fetchUserOrdersStart(currentUser);
  }, [fetchUserOrdersStart, currentUser]);

  return (
    <>
      <div className="d-flex justify-content-evenly mt-5 user-dasbhoard">
        <div>
          <UserInformationContainer currentUser={currentUser} />
        </div>

        <OrdersContainer />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardPage);
