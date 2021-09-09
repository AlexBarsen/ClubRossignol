import React from "react";

import { connect } from "react-redux";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import { Button } from "../../Button/ButtonElement";

import {
  CartItemContainer,
  IconContainer,
  Wrapper,
  Icon,
  Detail,
  ButtonContainer,
} from "./CartItemElements";

const CartItem = ({ item, clearItemFromCart }) => {
  const { icon, price, name, firstName, lastName, days } = item;

  return (
    <>
      <CartItemContainer>
        <IconContainer>
          <Icon src={icon} />
        </IconContainer>

        <Wrapper>
          <Detail>{name}</Detail>

          <Detail>
            {firstName} {lastName}
          </Detail>

          <Detail>
            {days} x {price}RON = {days * price}RON
          </Detail>
        </Wrapper>

        <ButtonContainer>
          <Button buttonType="close" onClick={() => clearItemFromCart(item)}>
            ❌
          </Button>
        </ButtonContainer>
      </CartItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
