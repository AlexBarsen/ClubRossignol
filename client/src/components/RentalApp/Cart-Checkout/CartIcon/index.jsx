import React from "react";
import { createStructuredSelector } from "reselect";

import Cart from "../../../../assets/svg/cart.svg";

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
          <Icon src={Cart} />
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
