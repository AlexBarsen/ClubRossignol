import React from "react";
import "./Section.scss";

import { Carousel, Container } from "react-bootstrap";

const Section = ({ section }) => {
  const { id, imgStart, headline, text, images } = section;

  return (
    <Container
      className={
        imgStart
          ? "d-flex align-items-center gap-5 section-container my-0"
          : "d-flex flex-row-reverse align-items-center gap-5 section-container my-0"
      }
      id={id}
    >
      <div>
        <div className="h3 text-center" style={{ fontWeight: "bold" }}>
          {headline}
        </div>
        <div className="mt-5 h6 text-center" style={{ lineHeight: "2.4" }}>
          {text}
        </div>
      </div>

      <div>
        <Carousel
          className="shadow"
          interval={null}
          fade={true}
          style={{ width: "35rem", height: "30rem", borderRadius: ".75rem" }}
        >
          {images.map((image, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                alt={"Slide " + index}
                style={{
                  objectFit: "cover",
                  width: "35rem",
                  height: "30rem",
                  borderRadius: ".75rem",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Section;
