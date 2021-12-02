import React from "react";
import { useTranslation } from "react-i18next";

import { Card, ListGroup, Container, Col, Row } from "react-bootstrap";

const CheckoutItemDetails = ({ cartItem }) => {
  const { t } = useTranslation();
  const {
    type,
    sex = null,
    height = null,
    weight = null,
    shoeSize = null,
    experience = null,
    days,
    price,
    startDate,
    endDate,
    // timePeriod = null,
  } = cartItem;

  return (
    <>
      {type !== "bike" ? (
        <Container className="p-0">
          <Row>
            <Col>
              <Card.Header className="d-flex justify-content-center">
                Personal Details
              </Card.Header>
            </Col>
          </Row>
          <Row>
            <Col>
              {shoeSize ? (
                <ListGroup.Item>
                  <strong>{t("shoeSize")}:</strong> {shoeSize}
                </ListGroup.Item>
              ) : null}

              {height ? (
                <ListGroup.Item>
                  <strong>{t("height")}:</strong> {height} cm
                </ListGroup.Item>
              ) : null}

              {weight ? (
                <ListGroup.Item>
                  <strong>{t("weight")}:</strong> {weight} kg
                </ListGroup.Item>
              ) : null}
            </Col>

            <Col>
              {sex ? (
                <ListGroup.Item>
                  <strong>Sex:</strong> {t(sex)}
                </ListGroup.Item>
              ) : null}

              {experience ? (
                <ListGroup.Item>
                  <strong>{t("experience")}:</strong> {t(experience)}
                </ListGroup.Item>
              ) : null}
            </Col>
          </Row>
        </Container>
      ) : null}

      <Container>
        <Row>
          <Col>
            <Card.Header className="d-flex justify-content-center">
              Reservation Details
            </Card.Header>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup.Item>
              <strong>{t("from")}:</strong> {startDate}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>{t("to")}:</strong> {endDate}
            </ListGroup.Item>
          </Col>

          <Col>
            <ListGroup.Item>
              <strong>{t("number_of_days")}:</strong> {days}
            </ListGroup.Item>
            {type !== "bike" ? (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {price} / day
              </ListGroup.Item>
            ) : (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {price} / day
              </ListGroup.Item>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckoutItemDetails;
