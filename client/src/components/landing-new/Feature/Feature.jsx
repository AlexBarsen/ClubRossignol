import React from "react";
import { Image } from "react-bootstrap";

const Feature = ({ feature }) => {
  const { title, Icon, text, image } = feature;

  return (
    <div>
      <div
        style={{ fontSize: "50px" }}
        className="d-flex align-items-center gap-3 justify-content-center"
      >
        <Icon fontSize="inherit" />

        <div className="h2 m-0">{title}</div>
      </div>
    </div>
  );
};

export default Feature;
