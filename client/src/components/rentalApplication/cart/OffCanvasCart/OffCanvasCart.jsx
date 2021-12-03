import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import CartIcon from "../CartIcon/CartIcon";
import { Offcanvas } from "react-bootstrap";
import Button from "@mui/material/Button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../../redux/cart/cart.selectors";

const OffCanvasCart = ({ cartItems, cartTotal, history }) => {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  const goToCheckout = () => {
    handleClose();
    history.push("/rental/checkout");
  };
  return (
    <>
      <CartIcon handleShow={handleShow} />
      <Offcanvas
        style={{ width: "32rem", backgroundColor: "#F9F9F6" }}
        show={showCanvas}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Items in cart for Rental</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="h2 m-0">Total: {cartTotal} RON</div>

            <Button
              className="custom-button custom-button--blue"
              variant="contained"
              onClick={() => goToCheckout()}
            >
              Go To Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(OffCanvasCart));
