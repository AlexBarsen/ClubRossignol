import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectOrders } from "../../redux/order/order.selectors";
import { fetchOrdersStart } from "../../redux/order/order.actions";

import AdminTableContainer from "../../components/RentalApp/Admin/AdminTableContainer/AdminTableContainer";

const AdminPage = ({ fetchOrdersStart }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);
  return <AdminTableContainer />;
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
