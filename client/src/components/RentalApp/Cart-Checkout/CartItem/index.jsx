import React from "react";

import { connect } from "react-redux";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import { Button } from "../../Button/ButtonElement";

import {
  Data,
  Row,
  IconContainer,
  Icon,
  Person,
  ItemName,
  Price,
} from "./CartItemElements";

const CartItem = ({ item, clearItemFromCart }) => {
  const { icon, price, name, firstName, lastName, days } = item;

  return (
    <>
      <Row>
        <Data>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>

        <Data>
          <ItemName>{name}</ItemName>
        </Data>

        <Data>
          <Person>
            {firstName} {lastName}
          </Person>
        </Data>

        <Data>
          <Price>
            {price} RON x {days} zile = {price * days} RON
          </Price>
        </Data>

        <Data>
          {" "}
          <Button onClick={() => clearItemFromCart(item)}>sterge</Button>
          <Button onClick={() => clearItemFromCart(item)}>Edit</Button>
        </Data>
      </Row>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
