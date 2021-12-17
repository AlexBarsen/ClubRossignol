import React from "react";
import { Image } from "react-bootstrap";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FHero%2Fview-big.jpg?alt=media&token=4a4b4845-a17a-4157-ac42-c7be97a7fb90"
        className="hero-image"
      />

      <div className="hero-logo--container">
        <Image
          className="hero-logo--image"
          src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo.svg?alt=media&token=05b2ed2b-1069-4890-abde-e9b36389ad8a"
        />
      </div>
    </div>
  );
};

export default Hero;
