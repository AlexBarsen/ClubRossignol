import React from "react";

import Checkbox from "../../Checkbox";

import {
  AdminOrderItemContainer,
  Wrapper,
  Detail,
  PriceDetail,
  DetailsContainer,
} from "./AdminOrderItemElements";

const AdminOrderItem = ({ item, status }) => {
  const {
    id,
    days,
    endDate,
    firstName,
    lastName,
    name,
    price,
    sex,
    weight,
    height,
    experience,
    shoeSize,
    startDate,
  } = item;

  const currentStatus = status === "received" ? false : true;

  return (
    <>
      <AdminOrderItemContainer>
        <Wrapper>
          <Detail>{name}</Detail>
          <Detail>
            {firstName} {lastName}
          </Detail>
          <DetailsContainer>
            {sex ? <Detail>Sex: {sex}</Detail> : null}
            {shoeSize ? <Detail>Shoe Size: {shoeSize}</Detail> : null}
            {weight ? <Detail>Weight: {weight}</Detail> : null}
            {height ? <Detail>Height: {height}</Detail> : null}
            {experience ? <Detail>Experience: {experience}</Detail> : null}
          </DetailsContainer>
          <DetailsContainer>
            <Detail>From: {startDate}</Detail>
            <Detail>To: {endDate}</Detail>
            <Detail>Days: {days}</Detail>
          </DetailsContainer>

          <Checkbox
            size={25}
            name={id}
            checked={currentStatus}
            label="Pregatita"
          />
        </Wrapper>
        <PriceDetail>
          Price: {days} x {price}RON = {days * price}RON
        </PriceDetail>
      </AdminOrderItemContainer>
    </>
  );
};

export default AdminOrderItem;
