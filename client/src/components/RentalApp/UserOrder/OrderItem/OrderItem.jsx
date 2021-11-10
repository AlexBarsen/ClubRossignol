import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
    <Container className="d-flex justify-content-around">
      <div>
        <Card.Header>Personal details</Card.Header>
        <ListGroup.Item>
          {t("person")}: {firstName} {lastName}
        </ListGroup.Item>
        {sex ? (
          <ListGroup.Item>
            {t("sex")}: {t(sex)}
          </ListGroup.Item>
        ) : null}
        {weight ? (
          <ListGroup.Item>
            {t("weight")}: {weight} (kg)
          </ListGroup.Item>
        ) : null}
        {height ? (
          <ListGroup.Item>
            {t("height")}: {height} (cm)
          </ListGroup.Item>
        ) : null}
        {shoeSize ? (
          <ListGroup.Item>
            {t("shoeSize")}: {shoeSize}
          </ListGroup.Item>
        ) : null}
        {experience ? (
          <ListGroup.Item>
            {t("experience")}: {t(experience)}
          </ListGroup.Item>
        ) : null}
      </div>

      <div>
        <Card.Header>Personal details</Card.Header>

        <ListGroup.Item>
          {t("from")}: {startDate}
        </ListGroup.Item>

        <ListGroup.Item>
          {t("to")}: {endDate}
        </ListGroup.Item>

        <ListGroup.Item>
          {t("days")}: {days}
        </ListGroup.Item>

        <ListGroup.Item>Total: {days * price} RON</ListGroup.Item>
      </div>
    </Container>

    /*    <DetailsRight>
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
      </OrderItemContainer> */
  );
};

export default OrderItem;
