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
} from "./CheckoutItemElements";

import { FaTrashAlt } from "react-icons/fa";

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
    startDateShort,
    endDateShort,
  } = cartItem;

  return (
    <>
      <Row>
        <Data data-label="Product:">
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>

        <Data data-label="Name:">
          <DataText>{name}</DataText>
        </Data>

        <Data data-label="Person:">
          <DataText>
            {firstName} {lastName}{" "}
          </DataText>
        </Data>

        <DataDetails data-label="Details:">
          <Wrapper>
            {sex ? (
              <DataText>
                <DataSpan>Sex:</DataSpan> {sex}
              </DataText>
            ) : null}
            {weight ? (
              <DataText>
                <DataSpan>Weight:</DataSpan> {weight}
              </DataText>
            ) : null}
            {height ? (
              <DataText>
                <DataSpan>Height:</DataSpan> {height}
              </DataText>
            ) : null}
            {shoeSize ? (
              <DataText>
                <DataSpan>Shoe size:</DataSpan> {shoeSize}
              </DataText>
            ) : null}
            {experience ? (
              <DataText>
                <DataSpan>Expeirence:</DataSpan> {experience}
              </DataText>
            ) : null}
          </Wrapper>
        </DataDetails>

        <DataDetails data-label="Period:">
          <Wrapper>
            <DataText>
              <DataSpan>From:</DataSpan> {startDateShort}
            </DataText>
            <DataText>
              <DataSpan>To:</DataSpan> {endDateShort}
            </DataText>
            <DataText>
              <DataSpan>Days:</DataSpan> {days}
            </DataText>
          </Wrapper>
        </DataDetails>

        <Data data-label="Price:">
          <DataText>
            {price} RON x {days} days = <DataSpan>{price * days} RON</DataSpan>
          </DataText>
        </Data>

        <Data data-label="Actions:">
          <Actions>
            <FaTrashAlt size={25} onClick={() => clearItemFromCart(cartItem)} />

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
