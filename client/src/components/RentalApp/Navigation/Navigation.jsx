import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar, Nav } from "react-bootstrap";
import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";
import AccountLinks from "../AccountLinks/AccountLinks";
import RentalTabs from "../RentalTabs/RentalTabs";
import Logo from "../../../logos/logo-text-small.png";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar
      bg="light"
      sticky="top"
      className="d-flex flex-column p-0"
      expand="xl"
    >
      <div className="d-flex w-100 justify-content-evenly align-items-center">
        <div style={{ height: "4.5rem" }}>
          <img style={{ height: "4.5rem" }} src={Logo} alt="logo" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-flex justify-content-end"
        >
          <Nav className="d-flex align-items-center">
            <Nav.Link className="me-3 text-navy--dark">
              {t("back_to_website")}
            </Nav.Link>

            <AccountLinks />
            <LangaugeDropdown />
          </Nav>
        </Navbar.Collapse>

        <OffCanvasCart key={1} placement="end" />
      </div>

      <RentalTabs />
    </Navbar>
  );
};

export default Navigation;
