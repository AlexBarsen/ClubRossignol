import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Features.scss";

const Features = () => {
  return (
    <Container
      className="mt-5 py-3 shadow feature-container"
      style={{ border: "2px solid black" }}
    >
      <Row>
        <Col xs={6} md={3} className="d-flex flex-column align-items-center">
          <div className="feature-image--container">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FFeatures%2Fpizza.png?alt=media&token=581211ec-7459-4592-ad84-c7c9a225cd04"
              className="feature-image--img"
            />
          </div>
          <div className="mt-2 h5">
            <strong>Pizza pe cuport cu lemne</strong>
          </div>
        </Col>
        <Col xs={6} md={3} className="d-flex flex-column align-items-center">
          <div className="feature-image--container">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FFeatures%2Fski.png?alt=media&token=97ab3c1b-abea-4493-970d-c388a28349a4"
              className="feature-image--img"
            />
          </div>
          <div className="mt-2 h5">
            <strong>Centru de inchirieri</strong>
          </div>
        </Col>

        <Col xs={6} md={3} className="d-flex flex-column align-items-center">
          <div className="feature-image--container">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FFeatures%2Fbed.png?alt=media&token=5f580b84-b910-4a04-b20a-7752d9da89cb"
              className="feature-image--img"
            />
          </div>
          <div className="mt-2 h5">
            <strong>Cazare</strong>
          </div>
        </Col>
        <Col xs={6} md={3} className="d-flex flex-column align-items-center">
          <div className="feature-image--container">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FFeatures%2Fpaper-bags.png?alt=media&token=fd907dff-d463-42da-b52c-720e86a37bb3"
              className="feature-image--img"
            />
          </div>
          <div className="mt-3 h5">
            <strong>Magazin</strong>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
