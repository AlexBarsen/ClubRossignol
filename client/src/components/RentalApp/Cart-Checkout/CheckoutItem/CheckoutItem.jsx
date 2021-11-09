import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ButtonsContainer,
  ButtonContainer,
} from "./CheckoutItemElements";

import RentalEditForm from "../../Rental/RentalEditForm/RentalEditForm";
import DynamicModal from "../../DynamicModal/DynamicModal";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(
    <RentalEditForm cartItem={cartItem} />
  );

  const {
    productType,
    name,
    firstName,
    lastName,
    sex = null,
    height = null,
    weight = null,
    shoeSize = null,
    icon,
    price,
    experience = null,
    days,
    startDate,
    endDate,
    timePeriod = null,
  } = cartItem;

  return (
    <CheckoutItemContainer>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={icon} className="p-5" />
        <Card.Title className="d-flex justify-content-center">
          {t(name)}
        </Card.Title>

        <div className="d-flex">
          <div>
            <Card.Header>Personal details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {t("name")}: {firstName}
              </ListGroup.Item>
              <ListGroup.Item>
                {t("surname")}: {lastName}
              </ListGroup.Item>
              {sex ? <ListGroup.Item>Sex: {t(sex)}</ListGroup.Item> : null}
              {height ? (
                <ListGroup.Item>
                  {t("height")}: {height} cm
                </ListGroup.Item>
              ) : null}
              {weight ? (
                <ListGroup.Item>
                  {t("weight")}: {weight} kg
                </ListGroup.Item>
              ) : null}
              {shoeSize ? (
                <ListGroup.Item>
                  {t("shoeSize")}: {shoeSize}
                </ListGroup.Item>
              ) : null}
              {experience ? (
                <ListGroup.Item>
                  {t("experience")}: {t(experience)}
                </ListGroup.Item>
              ) : null}
            </ListGroup>
          </div>

          <div>
            <Card.Header>Reservation Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {t("from")}: {startDate}
              </ListGroup.Item>
              <ListGroup.Item>
                {t("to")} : {endDate}
              </ListGroup.Item>
              <ListGroup.Item>
                {t("number_of_days")}: {days}
              </ListGroup.Item>
              {productType !== "bike" ? (
                <ListGroup.Item>
                  {t("price")}: {days} x {price} = {days * price} RON
                </ListGroup.Item>
              ) : (
                <ListGroup.Item>
                  {t("price")}: {days}(
                  {timePeriod === "per_day" ? t("days") : t(timePeriod)}) x
                  {price} = {days * price} RON
                </ListGroup.Item>
              )}
            </ListGroup>
          </div>
        </div>

        <ButtonsContainer>
          <ButtonContainer>
            <Button onClick={() => setModalShow(true)}>Edit</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => clearItemFromCart(cartItem)}>Delete</Button>
          </ButtonContainer>
        </ButtonsContainer>
      </Card>

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle={modalTitle}
        renderComponent={() => wrappedComponent}
      />
    </CheckoutItemContainer>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
