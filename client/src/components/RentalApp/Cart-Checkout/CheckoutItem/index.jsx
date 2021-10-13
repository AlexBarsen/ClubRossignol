import React from "react";
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
  ListGroup,
  ListGroupItemLeft,
  ListGroupItemRight,
  ListGroupItemCenter,
  ListGroupItemSpan,
  ButtonsContainer,
  ButtonContainer,
} from "./CheckoutItemElements";

import EditModal from "../../Rental/RentalEditModal/index";

import { Button } from "../../Button/ButtonElement";

const CheckoutItem = ({ cartItem, number, clearItemFromCart }) => {
  const { t } = useTranslation();

  const {
    productType,
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
    timePeriod,
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
          {productType !== "bike" ? (
            <>
              {" "}
              <ListGroup>
                <ListGroupItemLeft>
                  <ListGroupItemSpan>{t("name")}:</ListGroupItemSpan>{" "}
                  {firstName}
                </ListGroupItemLeft>

                <ListGroupItemLeft>
                  <ListGroupItemSpan>{t("surname")}:</ListGroupItemSpan>{" "}
                  {lastName}
                </ListGroupItemLeft>

                {sex ? (
                  <ListGroupItemLeft>
                    <ListGroupItemSpan>Sex:</ListGroupItemSpan>
                    {t(sex)}
                  </ListGroupItemLeft>
                ) : null}

                {height ? (
                  <ListGroupItemLeft>
                    <ListGroupItemSpan>{t("height")}:</ListGroupItemSpan>
                    {height} cm
                  </ListGroupItemLeft>
                ) : null}

                {weight ? (
                  <ListGroupItemLeft>
                    <ListGroupItemSpan>{t("weight")}:</ListGroupItemSpan>
                    {weight} kg
                  </ListGroupItemLeft>
                ) : null}

                {shoeSize ? (
                  <ListGroupItemLeft>
                    <ListGroupItemSpan>{t("shoeSize")}:</ListGroupItemSpan>
                    {shoeSize}
                  </ListGroupItemLeft>
                ) : null}

                {experience ? (
                  <ListGroupItemLeft>
                    <ListGroupItemSpan>{t("experience")}:</ListGroupItemSpan>
                    {t(experience)}
                  </ListGroupItemLeft>
                ) : null}
              </ListGroup>
              <ListGroup>
                <ListGroupItemRight>
                  <ListGroupItemSpan>{t("from")}:</ListGroupItemSpan>
                  {startDate}
                </ListGroupItemRight>

                <ListGroupItemRight>
                  <ListGroupItemSpan>{t("to")}:</ListGroupItemSpan>
                  {endDate}
                </ListGroupItemRight>

                <ListGroupItemRight>
                  <ListGroupItemSpan>{t("number_of_days")}:</ListGroupItemSpan>
                  {days}
                </ListGroupItemRight>

                <ListGroupItemRight>
                  <ListGroupItemSpan>{t("price")}:</ListGroupItemSpan>
                  {days} x {price} = {days * price} RON
                </ListGroupItemRight>

                <ButtonsContainer>
                  <ButtonContainer>
                    <EditModal cartItem={cartItem} />
                  </ButtonContainer>

                  <ButtonContainer>
                    <Button
                      buttonType="close"
                      onClick={() => clearItemFromCart(cartItem)}
                    >
                      ❌
                    </Button>
                  </ButtonContainer>
                </ButtonsContainer>
              </ListGroup>
            </>
          ) : (
            <>
              <ListGroup>
                <ListGroupItemCenter>
                  <ListGroupItemSpan>{t("name")}:</ListGroupItemSpan>
                  {firstName} {lastName}
                </ListGroupItemCenter>
                <ListGroupItemCenter>
                  <ListGroupItemSpan>{t("from")}:</ListGroupItemSpan>
                  {startDate}
                </ListGroupItemCenter>

                <ListGroupItemCenter>
                  <ListGroupItemSpan>{t("to")}:</ListGroupItemSpan>
                  {endDate}
                </ListGroupItemCenter>

                <ListGroupItemCenter>
                  <ListGroupItemSpan>{t("number_of_days")}:</ListGroupItemSpan>
                  {days}
                </ListGroupItemCenter>

                <ListGroupItemCenter>
                  <ListGroupItemSpan>Period:</ListGroupItemSpan>
                  {t(timePeriod)}
                </ListGroupItemCenter>

                <ListGroupItemCenter>
                  <ListGroupItemSpan>{t("price")}:</ListGroupItemSpan>
                  {days}({timePeriod === "per_day" ? t("days") : t(timePeriod)})
                  x {price} = {days * price} RON
                </ListGroupItemCenter>

                <ButtonsContainer>
                  <ButtonContainer>
                    <EditModal cartItem={cartItem} />
                  </ButtonContainer>

                  <ButtonContainer>
                    <Button
                      buttonType="close"
                      onClick={() => clearItemFromCart(cartItem)}
                    >
                      ❌
                    </Button>
                  </ButtonContainer>
                </ButtonsContainer>
              </ListGroup>{" "}
            </>
          )}
        </Wrapper>
      </CheckoutItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
