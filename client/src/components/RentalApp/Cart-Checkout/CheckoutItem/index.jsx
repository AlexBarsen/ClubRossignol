import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import { useTranslation } from "react-i18next";

import {
  IconContainer,
  Icon,
  Container,
  Detail,
  DetailSpan,
  WrapperNames,
  WrapperDetails,
  WrapperDates,
  WrapperPrice,
  WrapperActions,
  ButtonContainer,
  CheckoutItemContainer,
} from "./CheckoutItemElements";

import { FaTrashAlt } from "react-icons/fa";

import EditModal from "../../Rental/RentalEditModal/index";

const CheckoutItem = ({ cartItem, number, clearItemFromCart }) => {
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

  const { t } = useTranslation();

  return (
    <>
      <CheckoutItemContainer>
        <Detail>
          <DetailSpan>{number}.</DetailSpan>
        </Detail>
        <IconContainer>
          <Icon src={icon} />
        </IconContainer>

        <Container>
          <WrapperNames>
            <DetailSpan>
              <Detail>{t(name)}</Detail>
            </DetailSpan>

            <Detail>
              {firstName} {lastName}
            </Detail>
          </WrapperNames>

          <WrapperDetails>
            {sex ? (
              <Detail>
                <DetailSpan>{t("sex")}:</DetailSpan> {sex}
              </Detail>
            ) : null}
            {weight ? (
              <Detail>
                <DetailSpan>{t("weight")}:</DetailSpan> {weight}
              </Detail>
            ) : null}
            {height ? (
              <Detail>
                <DetailSpan>{t("height")}:</DetailSpan> {height}
              </Detail>
            ) : null}
            {shoeSize ? (
              <Detail>
                <DetailSpan>{t("shoeSize")}:</DetailSpan> {shoeSize}
              </Detail>
            ) : null}
            {experience ? (
              <Detail>
                <DetailSpan>{t("experience")} :</DetailSpan> {experience}
              </Detail>
            ) : null}
          </WrapperDetails>

          <WrapperDates>
            <Detail>
              <DetailSpan>{t("from")}:</DetailSpan> {startDate}
            </Detail>
            <Detail>
              <DetailSpan>{t("to")}:</DetailSpan> {endDate}
            </Detail>
            <Detail>
              <DetailSpan>{t("days")}:</DetailSpan> {days}
            </Detail>
          </WrapperDates>

          <WrapperPrice>
            <Detail>
              <DetailSpan>{price}</DetailSpan> RON x{" "}
              <DetailSpan>{days}</DetailSpan> days
            </Detail>
            <Detail>
              <DetailSpan>Total: </DetailSpan>
              {price * days} RON
            </Detail>
          </WrapperPrice>

          <WrapperActions>
            <ButtonContainer>
              <FaTrashAlt
                size={25}
                onClick={() => clearItemFromCart(cartItem)}
              />
            </ButtonContainer>

            <ButtonContainer>
              <EditModal cartItem={cartItem} />
            </ButtonContainer>
          </WrapperActions>
        </Container>
      </CheckoutItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
