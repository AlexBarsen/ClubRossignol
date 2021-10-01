import React from "react";
import { useTranslation } from "react-i18next";

import {
  OrderItemContainer,
  DetailsContainer,
  DetailSpanIndex,
  DetailsLeft,
  DetailsRight,
  DetailLeft,
  DetailRight,
  DetailSpan,
} from "./OrderItemElements";

const OrderItem = ({ item, index }) => {
  const { t } = useTranslation();

  const {
    days,
    endDate,
    experience,
    firstName,
    height,
    lastName,
    name,
    price,
    sex,
    shoeSize,
    startDate,
    weight,
  } = item;

  return (
    <>
      <OrderItemContainer>
        <DetailsContainer>
          <DetailsLeft>
            <DetailLeft>
              <DetailSpan>{t("equipment_type")}: </DetailSpan>
              {t(name)} <DetailSpanIndex>({index + 1})</DetailSpanIndex>
            </DetailLeft>

            <DetailLeft>
              <DetailSpan>{t("person")}: </DetailSpan>
              {firstName} {lastName}
            </DetailLeft>

            {sex ? (
              <DetailLeft>
                <DetailSpan>{t("sex")}: </DetailSpan> {t(sex)}
              </DetailLeft>
            ) : null}
            {weight ? (
              <DetailLeft>
                <DetailSpan>{t("weight")}: </DetailSpan> {weight} (kg)
              </DetailLeft>
            ) : null}
            {height ? (
              <DetailLeft>
                <DetailSpan>{t("height")}: </DetailSpan> {height} (cm)
              </DetailLeft>
            ) : null}
            {shoeSize ? (
              <DetailLeft>
                <DetailSpan>{t("shoeSize")}: </DetailSpan> {shoeSize}
              </DetailLeft>
            ) : null}
            {experience ? (
              <DetailLeft>
                <DetailSpan>{t("experience")}: </DetailSpan> {t(experience)}
              </DetailLeft>
            ) : null}
          </DetailsLeft>

          <DetailsRight>
            <DetailRight>
              <DetailSpan>{t("from")}: </DetailSpan>
              {startDate}
            </DetailRight>
            <DetailRight>
              <DetailSpan>{t("to")}: </DetailSpan>
              {endDate}
            </DetailRight>
            <DetailRight>
              <DetailSpan>{t("days")}: </DetailSpan>
              {days}
            </DetailRight>
            <DetailRight>
              <DetailSpan>Total: </DetailSpan>
              {days * price} RON
            </DetailRight>
          </DetailsRight>
        </DetailsContainer>
      </OrderItemContainer>
    </>
  );
};

export default OrderItem;
