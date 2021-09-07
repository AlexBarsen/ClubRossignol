import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectOrders } from "../../../../redux/order/order.selectors";
import AdminTable from "../AdminTable/index";

import { AdminTableContainer } from "./AdminOrdersElements";

const AdminOrders = ({ orders }) => {
  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
  };

  const transformedOrders = orders.map((order) => {
    const orderedAt = transformDate(order.orderedAt.toDate());
    return {
      ...order,
      orderedAt: orderedAt,
      numberOfItems: order.orderedItems.length,
    };
  });

  return (
    <>
      <AdminTableContainer>
        <AdminTable data={transformedOrders} />
      </AdminTableContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

export default connect(mapStateToProps)(AdminOrders);
