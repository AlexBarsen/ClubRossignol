import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserOrders } from "../../../redux/user/user.selectors";

import {
  OrdersContainer,
  UserInformation,
  OrderContainer,
  OrderID,
  Table,
  Body,
  Row,
  Heading,
} from "./OrdersElements";

import Order from "../Order/index";

const Orders = ({ userOrders }) => {
  return (
    <>
      <OrdersContainer>
        {userOrders.map((order) => (
          <OrderContainer>
            <OrderID>Order ID: {order.orderID}</OrderID>
            <Table>
              <Body>
                <Row>
                  <Heading>Product</Heading>
                  <Heading>Name</Heading>
                  <Heading>Person</Heading>
                  <Heading>Details</Heading>
                  <Heading>Period</Heading>
                  <Heading>Price</Heading>
                </Row>

                <Order key={order.orderID} order={order} />
              </Body>
            </Table>
            <OrderID>Number of items: {order.orderedItems.length}</OrderID>
            <OrderID>
              Status: {order.status ? "fulfilled" : "not fulfilled"}
            </OrderID>
            <OrderID>Total: {order.total}RON</OrderID>
          </OrderContainer>
        ))}
      </OrdersContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userOrders: selectUserOrders,
});

export default connect(mapStateToProps)(Orders);
