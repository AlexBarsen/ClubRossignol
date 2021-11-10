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
        <div className="w-75 ms-3">
          <Card.Body className="p-0">
            <Card.Title>{t(name)}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="p-0">
              {firstName} {lastName}
            </ListGroupItem>
            <ListGroupItem className="p-0">Duration: {days} days</ListGroupItem>
            <ListGroupItem className="p-0">Price: {price} / day</ListGroupItem>
            <ListGroupItem className="p-0">
              Total: {price} * {days} = {price * days} RON
            </ListGroupItem>
          </ListGroup>
        </div>

        <div className="d-flex flex-column">
          <Card.Img
            className="mb-3 p-2"
            variant="top"
            src={icon}
            style={{ height: "7rem", width: "12rem" }}
          />

          <div className="d-flex justify-content-around mb-3">
            <Button>Edit</Button>
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
