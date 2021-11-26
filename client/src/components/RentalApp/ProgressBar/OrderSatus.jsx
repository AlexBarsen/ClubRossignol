import React from "react";
import "./OrderStatus.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const OrderStatus = ({ status }) => {
  return (
    <ProgressBar
      style={{
        width: "20em",
        height: "2rem",
        border: "1px solid black",
      }}
    >
      <ProgressBar
        label="placed"
        animated
        className="progress--placed"
        now={33}
        key={1}
      />
      <ProgressBar
        label="prepared"
        style={{ borderLeft: "1px solid black" }}
        animated
        className={
          status === "complete"
            ? "progress--prepared"
            : status === "prepared"
            ? "progress--prepared"
            : "progress--grey"
        }
        now={33}
        key={2}
      />
      <ProgressBar
        label="complete"
        style={{ borderLeft: "1px solid black" }}
        animated
        className={
          status === "complete" ? "progress--complete" : "progress--grey"
        }
        now={34}
        key={3}
      />
    </ProgressBar>
  );
};

export default OrderStatus;
