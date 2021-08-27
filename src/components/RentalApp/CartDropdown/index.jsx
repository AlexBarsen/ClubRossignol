import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { Button } from "../Button/ButtonElement";

import {
  Table,
  Body,
  Row,
  Heading,
  CartDropdownContainer,
  Message,
  Footer,
  Total,
} from "./CartDropdownElements";

import CartItem from "../CartItem/index";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
  return (
    <>
      <CartDropdownContainer>
        <Table>
          <Body>
            <Row>
              <Heading>Product</Heading>
              <Heading>Name</Heading>
              <Heading>Person</Heading>
              <Heading>Price</Heading>
              <Heading></Heading>
            </Row>

            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <Message>Nu exista nimic in cos momentan</Message>
            )}
          </Body>
        </Table>

        <Footer>
          <Total>Total: {total}</Total>

          <Button
            onClick={() => {
              history.push("rental/checkout");
              dispatch(toggleCartHidden());
            }}
          >
            Go to Checkout
          </Button>
        </Footer>
      </CartDropdownContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// * withRouter() connects the Component to the Router and gives acces to the history, location, match object properties
export default withRouter(connect(mapStateToProps)(CartDropdown));
