import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../../redux/cart/cart.actions";

import {
  Row,
  Data,
  IconContainer,
  Icon,
  ItemName,
  Person,
  Sex,
  Weight,
  Height,
  ShoeSize,
  Experience,
  Price,
} from "./CheckoutItemElements";

import { Button } from "../Button/ButtonElement";

import EditModal from "../EditModal/index";

const CheckoutItem = ({ cartItem, clearItemFromCart, editItem }) => {
  const {
    name,
    firstName,
    lastName,
    sex,
    height,
    weight,
    shoeSize,
    icon,
    price,
    experience,
    // startDateShort,
    // endDateShort,
    // days,
  } = cartItem;

  return (
    <>
      <Row>
        <Data>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>

        <Data>
          <ItemName>{name}</ItemName>
        </Data>

        <Data>
          <Person>
            {firstName} {lastName}{" "}
          </Person>
        </Data>

        <Data>
          <Sex>{sex}</Sex>
          <Weight>{weight}</Weight>
          <Height>{height}</Height>
          <ShoeSize>{shoeSize}</ShoeSize>
          <Experience>{experience}</Experience>
        </Data>

        <Data>
          <Price>{price}</Price>
        </Data>

        <Data>
          <Button onClick={() => clearItemFromCart(cartItem)}>Sterge</Button>
          <EditModal cartItem={cartItem} />
        </Data>
      </Row>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
