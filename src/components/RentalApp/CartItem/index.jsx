import React from "react";

import { connect } from "react-redux";

import { clearItemFromCart } from "../../../redux/cart/cart.actions";

import { Button } from "../Button/ButtonElement";

import {
  CartItemContainer,
  IconContainer,
  Icon,
  ItemDetails,
  Person,
  ItemName,
  Price,
} from "./CartItemElements";

const CartItem = ({ item, clearItemFromCart }) => {
  const { icon, price, name, firstName, lastName, days } = item;

  return (
    <>
      <CartItemContainer>
        <IconContainer>
          <Icon src={icon} />
        </IconContainer>
        <ItemDetails>
          <Person>
            {firstName} {lastName}
          </Person>
          <ItemName>{name}</ItemName>
          <Price>
            {price} RON x {days} zile = {price * days} RON
          </Price>
        </ItemDetails>
        <Button onClick={() => clearItemFromCart(item)}>sterge</Button>
      </CartItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
