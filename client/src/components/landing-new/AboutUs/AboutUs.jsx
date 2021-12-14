import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Feature from "../Feature/Feature";
import "./AboutUs.scss";

import { FEATURES_DATA as features } from "./Features";

const AboutUs = () => {
  return (
    <div className="py-5">
      <Container className="d-flex flex-column justify-content-between align-items-center mt-5 gap-5">
        <div className="d-flex justify-content-center" id="logo">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo.svg?alt=media&token=05b2ed2b-1069-4890-abde-e9b36389ad8a"
            style={{ width: "45rem" }}
          />
        </div>
      </Container>

      {/* <Container className="mt-5 d-flex gap-5 justify-content-center">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </Container> */}
    </div>
  );
};

export default AboutUs;
