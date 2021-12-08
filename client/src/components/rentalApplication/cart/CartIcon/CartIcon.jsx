import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { selectCartItemsCount } from "../../../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount, handleShow }) => {
  return (
    <Badge badgeContent={itemCount} onClick={handleShow} color="primary">
      <ShoppingCartIcon fontSize="large" color="action" />
    </Badge>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
