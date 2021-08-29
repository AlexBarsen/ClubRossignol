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
          </Wrapper>
        </DataDetails>

        <DataDetails data-label="Period:">
          <Wrapper>
            <DataText>
              From: <DataSpan>{startDateShort}</DataSpan>
            </DataText>
            <DataText>
              To: <DataSpan>{startDateShort}</DataSpan>
            </DataText>
            <DataText>
              Days: <DataSpan>{days}</DataSpan>
            </DataText>
          </Wrapper>
        </DataDetails>

        <Data data-label="Price:">
          <DataText>
            {price}RON x {days} days = {price * days} RON
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
