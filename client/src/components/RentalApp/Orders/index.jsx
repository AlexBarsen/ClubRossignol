import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserOrders } from "../../../redux/user/user.selectors";

import { OrdersContainer, OrderContainer } from "./OrdersElements";

import Order from "../Order/index";

const Orders = ({ userOrders }) => {
  console.log(userOrders);
  return (
    <>
      <OrdersContainer>
        <h1>Order History:</h1>
        <OrderContainer>
          {userOrders.map((order) => (
            <Order key={order.orderID} order={order} />
          ))}
        </OrderContainer>
      </OrdersContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userOrders: selectUserOrders,
});

export default connect(mapStateToProps)(Orders);
