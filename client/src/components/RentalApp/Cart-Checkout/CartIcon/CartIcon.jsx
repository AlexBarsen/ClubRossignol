import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import icon2 from "./cart-icon.svg";

import {
  CartIconContainer,
  Circle,
  IconContainer,
  Icon,
  ItemCount,
} from "./CartIconElements";

import { selectCartItemsCount } from "../../../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount, handleShow }) => {
  return (
    <>
      <CartIconContainer onClick={handleShow}>
        <IconContainer>
          <Icon src={icon2} />
        </IconContainer>
        <Circle>
          <ItemCount>{itemCount}</ItemCount>
        </Circle>
      </CartIconContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
