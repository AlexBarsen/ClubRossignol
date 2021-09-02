import React from "react";

import {
  Row,
  Data,
  IconContainer,
  Icon,
  DataSpan,
  DataDetails,
  DataText,
} from "./OrderItemElements";

const OrderItem = ({ item }) => {
  const {
    days,
    endDate,
    experience,
    firstName,
    height,
    icon,
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
      <Row>
        <Data>
          <IconContainer>
            <Icon src={icon} />
          </IconContainer>
        </Data>
        <Data>{name}</Data>
        <Data>
          {firstName} {lastName}
        </Data>
        <DataDetails>
          {sex ? (
            <DataText>
              <DataSpan>Sex:</DataSpan> {sex}
            </DataText>
          ) : null}
          {weight ? (
            <DataText>
              <DataSpan>Weight:</DataSpan> {weight}
            </DataText>
          ) : null}
          {height ? (
            <DataText>
              <DataSpan>Height:</DataSpan> {height}
            </DataText>
          ) : null}
          {shoeSize ? (
            <DataText>
              <DataSpan>Shoe size:</DataSpan> {shoeSize}
            </DataText>
          ) : null}
          {experience ? (
            <DataText>
              <DataSpan>Expeirence:</DataSpan> {experience}
            </DataText>
          ) : null}
        </DataDetails>

        <DataDetails>
          <DataText>
            <DataSpan>From:</DataSpan>
            {startDate}
          </DataText>
          <DataText>
            <DataSpan>To:</DataSpan> {endDate}
          </DataText>
          <DataText>
            <DataSpan>Days:</DataSpan>
            {days}
          </DataText>
        </DataDetails>

        <Data>
          {days} days x {price}RON = <DataSpan>{days * price}RON</DataSpan>
        </Data>
      </Row>
    </>
  );
};

export default OrderItem;
