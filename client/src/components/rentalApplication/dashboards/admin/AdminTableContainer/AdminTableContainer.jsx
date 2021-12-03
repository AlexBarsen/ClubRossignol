import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsOrdersLoaded,
  selectOrdersError,
} from "../../../../../redux/order/order.selectors";
import { selectOrders } from "../../../../../redux/order/order.selectors";

import AdminTable from "../AdminTable/AdminTable";
import WithSpinner from "../../../../utils/WithSpinner/WithSpinner";
import Container from "react-bootstrap/Container";
import EnhancedTable from "../AdminTable/AdminTable";

const AdminTableContainer = ({ orders }) => {
  const transformedOrders = orders.map((order) => {
    return {
      ...order,

      orderedAt:
        order.orderedAt.toDate().toLocaleDateString() +
        " " +
        order.orderedAt.toDate().toLocaleTimeString(),
      numberOfItems: order.orderedItems.length,
      orderNumber: "#" + order.orderNumber,
    };
  });

  return (
    <>
      <Container className="w-100 my-5">
        <AdminTable data={transformedOrders} />
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
  isLoading: (state) => !selectIsOrdersLoaded(state),
  error: (state) => selectOrdersError(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(AdminTableContainer);
