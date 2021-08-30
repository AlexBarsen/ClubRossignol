import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/RentalApp/Cart-Checkout/CheckoutItem/index";

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
  Total,
  TotalPrice,
  TotalItems,
  TotalSpan,
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
              <Heading>Period</Heading>
              <Heading>Price</Heading>
              <Heading>Actions</Heading>
            </Row>

            {cartItems.length
              ? cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
              : null}
          </Body>
        </Table>
        {cartItems.length ? null : (
          <Message>Nu exista nimic in cos momentan</Message>
        )}

        {total ? (
          <Total>
            <TotalPrice>
              <TotalSpan>Total:</TotalSpan> {total} RON
            </TotalPrice>
            <TotalItems>
              There are <TotalSpan>{cartItems.length}</TotalSpan> products in
              your cart
            </TotalItems>
          </Total>
        ) : null}
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
