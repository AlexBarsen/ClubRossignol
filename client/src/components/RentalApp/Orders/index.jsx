import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserOrders } from "../../../redux/user/user.selectors";

import {
  OrdersContainer,
  Wrapper,
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
        <h1>Order History:</h1>
        {userOrders.map((order) => (
          <OrderContainer>
            <OrderID>Order ID: {order.orderID}</OrderID>
            {/* <OrderID>Ordered at: {order.orderedAt}</OrderID> */}
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
            <Wrapper>
              <OrderID>Number of items: {order.orderedItems.length}</OrderID>

              <OrderID>Total: {order.total}RON</OrderID>

              <OrderID>
                Status: {order.status ? "fulfilled" : "not fulfilled"}
              </OrderID>
            </Wrapper>
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
