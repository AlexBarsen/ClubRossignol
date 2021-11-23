import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

const CartItem = ({ item, clearItemFromCart }) => {
  const { t } = useTranslation();

  const { icon, price, name, firstName, lastName, days } = item;

  return (
    <Card style={{ width: "auto" }} className="mb-3">
      <div className="d-flex align-items-center">
        <div className="w-75">
          <Card.Body className="p-0">
            <Card.Header>
              <strong>{t(name)}</strong>
            </Card.Header>
          </Card.Body>
          <ListGroup className="list-group-flush border">
            <ListGroupItem>
              <strong>Person:</strong> {firstName} {lastName}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Duration:</strong> {days} days
            </ListGroupItem>
            <ListGroupItem>
              <strong>Total:</strong> {price} * {days} day = {price * days} RON
            </ListGroupItem>
          </ListGroup>
        </div>

        <div className="d-flex flex-column">
          <Card.Img
            className="mb-3"
            src={icon}
            style={{ height: "5.5rem", width: "10rem", objectFit: "contain" }}
          />

          <div className="d-flex justify-content-around">
            <Button onClick={() => clearItemFromCart(item)}>Remove</Button>
          </div>
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
