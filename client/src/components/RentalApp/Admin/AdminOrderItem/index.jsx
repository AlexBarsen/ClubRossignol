import React from "react";
import { useTranslation } from "react-i18next";

// import {
//   AdminOrderItemContainer,
//   Wrapper,
//   Detail,
//   PriceDetail,
//   DetailsContainer,
// } from "./AdminOrderItemElements";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import Table from "react-bootstrap/Table";

import Checkbox from "../Checkbox/index";

const AdminOrderItem = ({ item, status }) => {
  const { t } = useTranslation();

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
    timePeriod,
  } = item;

  const currentStatus =
    status === "received" || status === "primită" ? false : true;

  return (
    <tbody>
      <tr>
        <td>
          <ListGroup.Item variant="secondary">{t(name)}</ListGroup.Item>
          <ListGroup.Item variant="secondary">
            {timePeriod
              ? timePeriod !== "days"
                ? `${days} x (${timePeriod})`
                : `${days} days`
              : `${days} days`}
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">
            Total: {price * days} RON
          </ListGroup.Item>
        </td>
        <td>
          <ListGroup.Item variant="secondary">
            {firstName} {lastName}
          </ListGroup.Item>
        </td>

        <td>
          {sex ? (
            <ListGroup.Item variant="secondary">{t(sex)}</ListGroup.Item>
          ) : null}
          {shoeSize ? (
            <ListGroup.Item variant="secondary">{shoeSize} EUR</ListGroup.Item>
          ) : null}
          {weight ? (
            <ListGroup.Item variant="secondary">{weight} KG</ListGroup.Item>
          ) : null}
          {height ? (
            <ListGroup.Item variant="secondary">{height} CM</ListGroup.Item>
          ) : null}
          {experience ? (
            <ListGroup.Item variant="secondary">{t(experience)}</ListGroup.Item>
          ) : null}
        </td>

        <td>
          <ListGroup.Item variant="secondary">
            <strong>{t("from")}:</strong> {startDate}
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">
            <strong>{t("to")}:</strong> {endDate}
          </ListGroup.Item>
        </td>
      </tr>
    </tbody>
  );
};

export default AdminOrderItem;
