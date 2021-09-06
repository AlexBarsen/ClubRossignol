import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectOrders } from "../../../redux/order/order.selectors";
import AdminTable from "./Table";

import { AdminTableContainer } from "./AdminOrdersElements";

const AdminOrders = ({ orders }) => {
  return (
    <>
      <AdminTableContainer>
        <AdminTable data={orders} />
      </AdminTableContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

export default connect(mapStateToProps)(AdminOrders);
