import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/RentalApp/CheckoutItem/index";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  Table,
  Body,
  Row,
  Heading,
  Message,
} from "./CheckoutElements";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <>
      <CheckoutPageContainer>
        <Table>
          <Body>
            <Row>
              <Heading>Product</Heading>
              <Heading>Name</Heading>
              <Heading>Person</Heading>
              <Heading>Details</Heading>
              <Heading>Price</Heading>
              <Heading>Actions</Heading>
            </Row>

            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <Message>Nu exista nimic in cos momentan</Message>
            )}
          </Body>
        </Table>
      </CheckoutPageContainer>
    </>
  );
};

// * connect Component to Redux state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
