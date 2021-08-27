import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../../redux/cart/cart.actions";

import {
  Row,
  Data,
  IconContainer,
  Icon,
  DataText,
  DataDetails,
  Wrapper,
  DataSpan,
  Actions,
  ButtonContainer,
} from "./CheckoutItemElements";

import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

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
    days,
    // startDateShort,
    // endDateShort,
    // days,
  } = cartItem;

  const style = {
    // Adding media querry..
    "@media (max-width: 768px)": {
      size: "20px",
    },
  };

  return (
    <>
      <Row>
        <Data>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>

        <Data>
          <DataText>{name}</DataText>
        </Data>

        <Data>
          <DataText>
            {firstName} {lastName}{" "}
          </DataText>
        </Data>

        <DataDetails>
          {sex ? (
            <DataText>
              Sex: <DataSpan>{sex}</DataSpan>
            </DataText>
          ) : null}
          {weight ? (
            <DataText>
              Weight: <DataSpan>{weight} kg</DataSpan>{" "}
            </DataText>
          ) : null}
          {height ? (
            <DataText>
              Height: <DataSpan>{height} cm</DataSpan>
            </DataText>
          ) : null}
          {shoeSize ? (
            <DataText>
              Shoe size: <DataSpan>{shoeSize}</DataSpan>
            </DataText>
          ) : null}
          {experience ? (
            <DataText>
              Experience: <DataSpan>{experience}</DataSpan>
            </DataText>
          ) : null}
        </DataDetails>

        <Data>
          <DataText>
            {price}RON x {days} days = {price * days} RON
          </DataText>
        </Data>

        <Data>
          <Actions>
            <ButtonContainer>
              <FaTrashAlt
                size={25}
                style={style}
                onClick={() => clearItemFromCart(cartItem)}
              />
            </ButtonContainer>
            <EditModal cartItem={cartItem} />
          </Actions>
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
