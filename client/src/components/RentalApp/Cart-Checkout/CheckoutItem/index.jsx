import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  WrapperNumberIcon,
  DetailNumber,
  DetailNumberMobile,
  DetailSpan,
  DetailTitle,
  IconContainer,
  Icon,
  Container,
  Detail,
  WrapperNames,
  WrapperDetails,
  WrapperDates,
  WrapperPrice,
  WrapperActions,
  ButtonContainer,
} from "./CheckoutItemElements";

import { FaTrashAlt } from "react-icons/fa";

import EditModal from "../../Rental/RentalEditModal/index";

const CheckoutItem = ({ cartItem, number, clearItemFromCart }) => {
  const { t } = useTranslation();

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
    timePeriod,
  } = cartItem;

  return (
    <>
      <CheckoutItemContainer>
        <WrapperNumberIcon>
          <DetailNumber>
            <DetailSpan>{number}.</DetailSpan>
          </DetailNumber>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </WrapperNumberIcon>

        <Container>
          <WrapperNames>
            <DetailSpan>
              <DetailTitle>
                <DetailNumberMobile>{number}.</DetailNumberMobile>
                {t(name)}
              </DetailTitle>
            </DetailSpan>

            <Detail>
              <DetailSpan>{t("name")}: </DetailSpan>
              {firstName} {lastName}
            </Detail>
          </WrapperNames>

          <WrapperDetails>
            {sex ? (
              <Detail>
                <DetailSpan>{t("sex")}:</DetailSpan> {t(sex)}
              </Detail>
            ) : null}
            {weight ? (
              <Detail>
                <DetailSpan>{t("weight")}:</DetailSpan> {weight} (kg)
              </Detail>
            ) : null}
            {height ? (
              <Detail>
                <DetailSpan>{t("height")}:</DetailSpan> {height} (cm)
              </Detail>
            ) : null}
            {shoeSize ? (
              <Detail>
                <DetailSpan>{t("shoeSize")}:</DetailSpan> {shoeSize}
              </Detail>
            ) : null}
            {experience ? (
              <Detail>
                <DetailSpan>{t("experience")} :</DetailSpan> {t(experience)}
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
              <DetailSpan>{t("days")}:</DetailSpan> {days}{" "}
              {timePeriod
                ? timePeriod !== "per_day"
                  ? `(${t(timePeriod)})`
                  : null
                : null}
            </Detail>
          </WrapperDates>

          <WrapperPrice>
            <Detail>
              <DetailSpan>{price}</DetailSpan> RON x{" "}
              <DetailSpan>
                {timePeriod
                  ? timePeriod !== "per_day"
                    ? `(${timePeriod})`
                    : `${days} ${t("days")}`
                  : `${days} ${t("days")}`}
              </DetailSpan>{" "}
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
