import React from "react";
import i18next from "i18next";
import { Image } from "react-bootstrap";
import "./Languages.scss";

const Languages = ({ landing }) => {
  return (
    <div
      className={
        landing ? "d-flex landing-languages" : "d-flex ms-4 rental-languages"
      }
    >
      <div
        onClick={() => i18next.changeLanguage("ro")}
        style={{ width: "2rem", cursor: "pointer" }}
      >
        <Image
          className="w-100"
          src="https://cdn.countryflags.com/thumbs/romania/flag-button-round-250.png"
          alt="ro"
        />
      </div>
      <div
        className="ms-3"
        onClick={() => i18next.changeLanguage("en")}
        style={{ width: "2rem", cursor: "pointer" }}
      >
        <Image
          className="w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png"
          alt="ro"
        />
      </div>
    </div>
  );
};

export default Languages;
