import React from "react";

import {
  AdminOrderItemContainer,
  Detail,
  DetailsContainer,
} from "./AdminOrderItemElements";

const AdminOrderItem = ({ item }) => {
  const {
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
  return (
    <>
      <AdminOrderItemContainer>
        <Detail>Product: {name}</Detail>
        <Detail>
          Person: {firstName} {lastName}
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
        <Detail>Price: {days * price}</Detail>
      </AdminOrderItemContainer>
    </>
  );
};

export default AdminOrderItem;
