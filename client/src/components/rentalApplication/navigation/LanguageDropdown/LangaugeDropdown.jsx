import React from "react";
import i18next from "i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

const LangaugeDropdown = () => {
  const { t } = useTranslation();

  return (
    <NavDropdown
      title={t("language")}
      id="nav-dropdown--2"
      className="font-weight-normal"
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
