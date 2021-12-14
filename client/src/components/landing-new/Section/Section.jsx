import React from "react";
import "./Section.scss";
import { Carousel, Container } from "react-bootstrap";
import Button from "@mui/material/Button";

const Section = ({ section }) => {
  const { id, imgStart, headline, text, images, buttonText, link } = section;

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
        <p className="h3 text-center font-weight-bold">{headline}</p>
        <p className="mt-5 h6 " style={{ lineHeight: "2.4" }}>
          {text}
        </p>

        <div
          className={
            imgStart
              ? "d-flex justify-content-start"
              : "d-flex justify-content-end"
          }
        >
          <Button href={link} variant="contained">
            {buttonText}
          </Button>
        </div>
      </div>

      <div>
        <Carousel
          className="shadow carousel carousel-container"
          interval={null}
          fade={true}
        >
          {images.map((image, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100 carousel carousel-image"
                src={image}
                alt={"Slide " + index}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Section;
