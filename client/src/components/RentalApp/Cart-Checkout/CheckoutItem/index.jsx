import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  IconContainer,
  Icon,
  Body,
  ItemName,
  Wrapper,
  // ListGroup,
  ListGroupItemLeft,
  ListGroupItemRight,
  ListGroupItemCenter,
  ListGroupItemSpan,
  ButtonsContainer,
  ButtonContainer,
} from "./CheckoutItemElements";

import EditModal from "../../Rental/RentalEditModal/index";
import DynamicModal from "../../DynamicModal/DynamicModal";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CheckoutItem = ({ cartItem, number, clearItemFromCart }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(
    <EditModal cartItem={cartItem} />
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
    <>
      <CheckoutItemContainer>
        <Body>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>

          <ItemName>
            <ListGroupItemSpan>
              {t(name)}
              <ListGroupItemSpan />
            </ListGroupItemSpan>
          </ItemName>
        </Body>

        <Wrapper>
          <Card style={{ width: "30rem" }}>
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
                <Button onClick={() => clearItemFromCart(cartItem)}>
                  Delete
                </Button>
              </ButtonContainer>
            </ButtonsContainer>
          </Card>
        </Wrapper>

        <DynamicModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          modalTitle={modalTitle}
          renderComponent={() => wrappedComponent}
        />
      </CheckoutItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
