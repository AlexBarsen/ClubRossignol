import React from "react";
import i18next from "i18next";
import NavDropdown from "react-bootstrap/NavDropdown";

const LangaugeDropdown = () => {
  return (
    <NavDropdown
      color="black"
      title={<span className="text-navy--dark">Select Langauge</span>}
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item onClick={() => i18next.changeLanguage("ro")}>
        Romanian <span className="">🇷🇴</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => i18next.changeLanguage("en")}>
        English <span className="">🇬🇧</span>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LangaugeDropdown;
