import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItemsContainer,
  Message,
  Footer,
  Total,
} from "./CartDropdownElements";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../../../redux/cart/cart.actions";

import { Button } from "../../Button/ButtonElement";
import CartItem from "../CartItem/index";

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
  return (
    <>
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
          {cartItems.length ? null : (
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
