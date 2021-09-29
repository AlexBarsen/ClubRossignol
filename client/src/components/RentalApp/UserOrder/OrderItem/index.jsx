import React from "react";
import { useTranslation } from "react-i18next";

import {
  OrderItemsContainer,
  OrderItemContainer,
  Title,
  DetailsContainer,
  Details,
  Detail,
  DetailSpan,
  TotalDetails,
} from "./OrderItemElements";

const OrderItem = ({ item }) => {
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
      <OrderItemsContainer>
        <OrderItemContainer>
          <Title>
            <DetailSpan>{t(name)} </DetailSpan>

            <Detail>
              {firstName} {lastName}
            </Detail>
          </Title>

          <DetailsContainer>
            <Details>
              {sex ? (
                <Detail>
                  <DetailSpan>{t("sex")}: </DetailSpan> {t(sex)}
                </Detail>
              ) : null}
              {weight ? (
                <Detail>
                  <DetailSpan>{t("weight")}: </DetailSpan> {weight} (kg)
                </Detail>
              ) : null}
              {height ? (
                <Detail>
                  <DetailSpan>{t("height")}: </DetailSpan> {height} (cm)
                </Detail>
              ) : null}
              {shoeSize ? (
                <Detail>
                  <DetailSpan>{t("shoeSize")}: </DetailSpan> {shoeSize}
                </Detail>
              ) : null}
              {experience ? (
                <Detail>
                  <DetailSpan>{t("experience")}: </DetailSpan> {t(experience)}
                </Detail>
              ) : null}
            </Details>

            <Details>
              <Detail>
                <DetailSpan>{t("from")}: </DetailSpan>
                {startDate}
              </Detail>
              <Detail>
                <DetailSpan>{t("to")}: </DetailSpan>
                {endDate}
              </Detail>
              <Detail>
                <DetailSpan>{t("days")}: </DetailSpan>
                {days}
              </Detail>
            </Details>
          </DetailsContainer>

          <TotalDetails>
            <Detail>
              {days} days x {price} RON ={" "}
              <DetailSpan> {days * price} RON</DetailSpan>
            </Detail>
          </TotalDetails>
        </OrderItemContainer>
      </OrderItemsContainer>
    </>
  );
};

export default OrderItem;
