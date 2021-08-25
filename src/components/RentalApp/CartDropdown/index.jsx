import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { Button } from "../Button/ButtonElement";

import {
  Titles,
  CartDropdownContainer,
  Items,
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
        <Titles>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </Titles>
        <Items>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <Message>Nu exista nimic in cos momentan</Message>
          )}
        </Items>
        <Footer>
          <Button
            onClick={() => {
              history.push("/checkout");
              dispatch(toggleCartHidden());
            }}
          >
            Go to Checkout
          </Button>
          <Total>Total: {total}</Total>
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
