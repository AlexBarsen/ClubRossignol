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

  const { t } = useTranslation();
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
                  <DetailSpan>Sex: </DetailSpan> {sex}
                </Detail>
              ) : null}
              {weight ? (
                <Detail>
                  <DetailSpan>Weight: </DetailSpan> {weight}
                </Detail>
              ) : null}
              {height ? (
                <Detail>
                  <DetailSpan>Height: </DetailSpan> {height}
                </Detail>
              ) : null}
              {shoeSize ? (
                <Detail>
                  <DetailSpan>ShoeSize: </DetailSpan> {shoeSize}
                </Detail>
              ) : null}
              {experience ? (
                <Detail>
                  <DetailSpan>Experience: </DetailSpan> {experience}
                </Detail>
              ) : null}
            </Details>

            <Details>
              <Detail>
                <DetailSpan>From: </DetailSpan>
                {startDate}
              </Detail>
              <Detail>
                <DetailSpan>To: </DetailSpan>
                {endDate}
              </Detail>
              <Detail>
                <DetailSpan>Days: </DetailSpan>
                {days}
              </Detail>
            </Details>

            {/* <Details>
            <Detail>
              {days} days x {price} RON
            </Detail>
            <Detail>
              Total:
              <DetailSpan> {days * price} RON</DetailSpan>
            </Detail>
          </Details> */}
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
