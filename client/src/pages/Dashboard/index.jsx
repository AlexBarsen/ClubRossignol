import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchOrdersStart } from "../../redux/user/user.actions";

import { DashboardPageContainer } from "./DashboardElements";

const DashboardPage = ({ fetchOrdersStart }) => {
  const email = "ion@test.com";
  useEffect(() => {
    fetchOrdersStart(email);
  });

  return (
    <>
      <DashboardPageContainer></DashboardPageContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: (email) => dispatch(fetchOrdersStart({ email })),
});

export default connect(null, mapDispatchToProps)(DashboardPage);
