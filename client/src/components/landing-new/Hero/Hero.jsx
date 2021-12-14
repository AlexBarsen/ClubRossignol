import React from "react";
import { Image } from "react-bootstrap";
import AboutUs from "../AboutUs/AboutUs";

const Hero = () => {
  return (
    <div style={{ height: "650px", position: "relative" }}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/Images%2FHero%2Fview-big.jpg?alt=media&token=4a4b4845-a17a-4157-ac42-c7be97a7fb90"
        className="h-100 w-100"
        style={{ objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          // background: "#000",
          // opacity: "0.5",
          borderRadius: "1rem",
        }}
      >
        <AboutUs />
      </div>
    </div>
  );
};

export default Hero;
