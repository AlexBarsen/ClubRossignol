import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectOrders } from "../../redux/order/order.selectors";
import { fetchOrdersStart } from "../../redux/order/order.actions";

import { AdminDashboardPageContainer, Title } from "./AdminDashboardElements";

import AdminOrderContainer from "../../components/RentalApp/Admin/AdminOrders/AdminOrderContainer.js";

const AdminDashboardPage = ({ fetchOrdersStart }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);
  return (
    <>
      <AdminDashboardPageContainer>
        <Title>Orders:</Title>
        <AdminOrderContainer />
      </AdminDashboardPageContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardPage);
