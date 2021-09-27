import React from "react";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../../../redux/cart/cart.selectors";
import { connect } from "react-redux";

import {
  CartIconContainer,
  IconContainer,
  Icon,
  ItemCount,
} from "./CartIconElements";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <>
      <CartIconContainer onClick={toggleCartHidden}>
        <IconContainer>
          <Icon src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FRental%2Fcart.svg?alt=media&token=31488247-c63c-4788-8c61-5a2a9e321b91" />
        </IconContainer>
        <ItemCount>{itemCount}</ItemCount>
      </CartIconContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
