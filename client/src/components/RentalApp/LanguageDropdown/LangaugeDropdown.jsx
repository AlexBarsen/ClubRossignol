import React from "react";
import i18next from "i18next";
import NavDropdown from "react-bootstrap/NavDropdown";

const LangaugeDropdown = () => {
  return (
    <NavDropdown title="Select Language" id="basic-nav-dropdown">
      <NavDropdown.Item
        className=""
        onClick={() => i18next.changeLanguage("ro")}
      >
        Romanian <span className="">🇷🇴</span>
      </NavDropdown.Item>
      <NavDropdown.Item
        className=""
        onClick={() => i18next.changeLanguage("en")}
      >
        English <span className="">🇬🇧</span>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LangaugeDropdown;
