import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { Button } from "../../Button/ButtonElement";

import {
  CartDropdownContainer,
  CartItemsContainer,
  Message,
  Footer,
  Total,
} from "./CartDropdownElements";

import CartItem from "../CartItem/index";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
  return (
    <>
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <Message>Nu exista nimic in cos momentan</Message>
          )}
        </CartItemsContainer>

        <Footer>
          <Total>Total: {total}</Total>

          <Button
            buttonType="checkout"
            onClick={() => {
              history.replace("/rental/checkout");
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