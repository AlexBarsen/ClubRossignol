import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { createStructuredSelector } from "reselect";
import { selectOrders } from "../../../../redux/order/order.selectors";
import AdminTable from "../AdminTable/index";
import { Container } from "react-bootstrap";

const AdminOrders = ({ orders }) => {
  const { t } = useTranslation();

  const transformedOrders = orders.map((order) => {
    return {
      ...order,
      status: t(order.status),
      orderedAt:
        order.orderedAt.toDate().toLocaleDateString() +
        " " +
        order.orderedAt.toDate().toLocaleTimeString(),
      numberOfItems: order.orderedItems.length,
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
});

export default connect(mapStateToProps)(AdminOrders);
