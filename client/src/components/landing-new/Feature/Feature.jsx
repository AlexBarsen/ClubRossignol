import React from "react";

const Feature = ({ feature }) => {
  const { title, Icon, text } = feature;

  return (
    <div>
      <div
        style={{ fontSize: "50px" }}
        className="d-flex align-items-center gap-3 justify-content-center"
      >
        <Icon fontSize="inherit" />

        <div className="h2 m-0">{title}</div>
      </div>
      {/* <div className="mt-3 text-center" style={{ lineHeight: "2" }}>
        {text}
      </div> */}
    </div>
  );
};

export default Feature;
