import React from "react";
import { useTranslation } from "react-i18next";

import { Card, Image, Button } from "react-bootstrap";

const InfoCard = ({ section, imgStart }) => {
  const { t } = useTranslation();

  const {
    id,
    topLine,
    headline,
    paragraph1,
    paragraph2,
    buttonLabel,
    image,
    route = null,
    modal = false,
    link = null,
  } = section;

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        id={id}
        style={{
          width: "70rem",
          border: "1px solid black",
        }}
        className="shadow"
      >
        <Card.Header
          className="ps-3"
          style={{ borderBottom: "2px solid #0000007e" }}
          as="h4"
        >
          <strong>{t(topLine)}</strong>
        </Card.Header>
        <div className={imgStart ? "d-flex" : "d-flex flex-row-reverse"}>
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title as="h4">{t(headline)}</Card.Title>
            <Card.Text>{t(paragraph1)}</Card.Text>
            <Card.Text>{t(paragraph2)}</Card.Text>
            <div>
              <Button className="custom-button--warning" variant="warning">
                {t(buttonLabel)}
              </Button>
            </div>
          </Card.Body>
          <Image
            src={image}
            style={{ width: "20rem", border: "1px solid black" }}
            className="m-4 shadow"
          />
        </div>
      </Card>
    </div>
  );
};

export default InfoCard;
