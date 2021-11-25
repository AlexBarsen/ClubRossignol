import React from "react";
import { useTranslation } from "react-i18next";

import ListGroup from "react-bootstrap/ListGroup";

const AdminOrderItem = ({ item }) => {
  const { t } = useTranslation();

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
    timePeriod,
  } = item;

  return (
    <tbody>
      <tr>
        <td>
          <ListGroup>
            <ListGroup.Item variant="info">{t(name)}</ListGroup.Item>
            <ListGroup.Item variant="info">
              {timePeriod
                ? timePeriod !== "days"
                  ? `${days} x (${timePeriod})`
                  : `${days} days`
                : `${days} days`}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              Total: {price * days} RON
            </ListGroup.Item>
          </ListGroup>
        </td>
        <td>
          <ListGroup>
            <ListGroup.Item variant="info">
              {firstName} {lastName}
            </ListGroup.Item>
          </ListGroup>
        </td>

        <td>
          <ListGroup>
            {sex ? (
              <ListGroup.Item variant="info">{t(sex)}</ListGroup.Item>
            ) : null}
            {shoeSize ? (
              <ListGroup.Item variant="info">{shoeSize} EUR</ListGroup.Item>
            ) : null}
            {weight ? (
              <ListGroup.Item variant="info">{weight} KG</ListGroup.Item>
            ) : null}
            {height ? (
              <ListGroup.Item variant="info">{height} CM</ListGroup.Item>
            ) : null}
            {experience ? (
              <ListGroup.Item variant="info">{t(experience)}</ListGroup.Item>
            ) : null}
          </ListGroup>
        </td>

        <td>
          <ListGroup>
            <ListGroup.Item variant="info">
              <strong>{t("from")}:</strong> {startDate}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              <strong>{t("to")}:</strong> {endDate}
            </ListGroup.Item>
          </ListGroup>
        </td>
      </tr>
    </tbody>
  );
};

export default AdminOrderItem;
