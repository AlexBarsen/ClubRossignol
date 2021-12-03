import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import "./CartItem.scss";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import { Card, ListGroupItem } from "react-bootstrap";
import Button from "@mui/material/Button";

const CartItem = ({ item, clearItemFromCart }) => {
  const { t } = useTranslation();

  const { images, price, name, firstName, lastName, days } = item;

  return (
    <Card className="mb-3 d-flex flex-row align-items-center checkoutCard">
      <Card.Body className="p-0 w-75 checkoutCard-body">
        <Card.Header className="checkoutCard-body--header">
          <strong>{t(name)}</strong>
        </Card.Header>

        <div>
          <ListGroupItem>
            <strong>Person:</strong> {firstName} {lastName}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Duration:</strong> {days} days
          </ListGroupItem>
          <ListGroupItem>
            <strong>Total:</strong> {price} * {days} day = {price * days} RON
          </ListGroupItem>
        </div>
      </Card.Body>

      <div className="d-flex flex-column">
        <Card.Img
          className="mb-3"
          src={images[0]}
          style={{ height: "5.5rem", width: "10rem", objectFit: "contain" }}
        />

        <div className="d-flex justify-content-around">
          <Button
            variant="contained"
            className="custom-button custom-button--red"
            onClick={() => clearItemFromCart(item)}
          >
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default React.memo(connect(null, mapDispatchToProps)(CartItem));
