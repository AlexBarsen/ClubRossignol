import React from "react";
import "./Section.scss";

import { Container, Image } from "react-bootstrap";

const Section = ({ section }) => {
  const { id, imgStart, headline, text, images } = section;

  return (
    <Container
      className={
        imgStart
          ? "d-flex align-items-center gap-5 section-container"
          : "d-flex flex-row-reverse align-items-center gap-5 section-container"
      }
      id={id}
    >
      <div>
        <div className="h3 text-center">{headline}</div>
        <div className="mt-5 h6" style={{ lineHeight: "2" }}>
          {text}
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item grid-item--1">
          <Image src={images[0]} className="grid-image" />
        </div>
        <div className="grid-item grid-item--2">
          <Image src={images[1]} className="grid-image" />
        </div>
        <div className="grid-item grid-item--3">
          <Image src={images[2]} className="grid-image" />
        </div>
        <div className="grid-item grid-item--4">
          <Image src={images[3]} className="grid-image" />
        </div>
      </div>
    </Container>
  );
};

export default Section;
