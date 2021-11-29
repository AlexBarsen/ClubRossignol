import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HeroCarousel = () => {
  return (
    <Carousel style={{ height: "35rem" }}>
      <Carousel.Item style={{ height: "35rem" }}>
        <img
          style={{
            height: "35rem",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FHero%2Fhero.jpg?alt=media&token=df34ec17-d7e6-43ae-aa04-b382cebb5944"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "35rem" }}>
        <img
          style={{
            height: "35rem",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FFeatures%2Frossignol-view.jpg?alt=media&token=64880cfd-8398-486e-8cb6-5d8434598dd8"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "35rem" }}>
        <img
          style={{
            height: "35rem",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FFeatures%2Fpub-terrace.jpg?alt=media&token=da0c6f7f-75a4-4eb3-ae1b-ccb9aef882b3"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
