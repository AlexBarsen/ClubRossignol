import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import { useTranslation } from "react-i18next";

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

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
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
      <Row>
        <Data data-label={t("product") + ":"}>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>

        <Data data-label={t("product_name") + ":"}>
          <DataText>{t(name)}</DataText>
        </Data>

        <Data data-label={t("person") + ":"}>
          <DataText>
            {firstName} {lastName}{" "}
          </DataText>
        </Data>

        <DataDetails data-label={t("details") + ":"}>
          <Wrapper>
            {sex ? (
              <DataText>
                <DataSpan>{t("sex")}:</DataSpan> {sex}
              </DataText>
            ) : null}
            {weight ? (
              <DataText>
                <DataSpan>{t("weight")}:</DataSpan> {weight}
              </DataText>
            ) : null}
            {height ? (
              <DataText>
                <DataSpan>{t("height")}:</DataSpan> {height}
              </DataText>
            ) : null}
            {shoeSize ? (
              <DataText>
                <DataSpan>{t("shoeSize")}:</DataSpan> {shoeSize}
              </DataText>
            ) : null}
            {experience ? (
              <DataText>
                <DataSpan>{t("experience")} :</DataSpan> {experience}
              </DataText>
            ) : null}
          </Wrapper>
        </DataDetails>

        <DataDetails data-label={t("period") + ":"}>
          <Wrapper>
            <DataText>
              <DataSpan>{t("from")}:</DataSpan> {startDate}
            </DataText>
            <DataText>
              <DataSpan>{t("to")}:</DataSpan> {endDate}
            </DataText>
            <DataText>
              <DataSpan>{t("days")}:</DataSpan> {days}
            </DataText>
          </Wrapper>
        </DataDetails>

        <Data data-label={t("price") + ":"}>
          <DataText>
            {price} RON x {days} days = <DataSpan>{price * days} RON</DataSpan>
          </DataText>
        </Data>

        <Data data-label={t("actions") + ":"}>
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
