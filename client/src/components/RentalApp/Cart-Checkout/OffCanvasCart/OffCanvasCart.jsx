import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../CartItem/CartItem";

import CartIcon from "../CartIcon/CartIcon";
import Offcanvas from "react-bootstrap/Offcanvas";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../../redux/cart/cart.selectors";

const OffCanvasCart = ({ cartItems, cartTotal, ...props }) => {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  return (
    <>
      <CartIcon handleShow={handleShow} />
      <Offcanvas
        style={{ width: "32rem" }}
        show={showCanvas}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Items in cart for Rental</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
          <h1>Total: {cartTotal} RON</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(OffCanvasCart);
