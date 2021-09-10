import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

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

import EditModal from "../../Rental/RentalEditModal/index";

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
    startDate,
    endDate,
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
              <DataSpan>From:</DataSpan> {startDate}
            </DataText>
            <DataText>
              <DataSpan>To:</DataSpan> {endDate}
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
            <ButtonContainer>
              <FaTrashAlt
                size={25}
                onClick={() => clearItemFromCart(cartItem)}
              />
            </ButtonContainer>

            <ButtonContainer>
              <EditModal cartItem={cartItem} />
            </ButtonContainer>
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
