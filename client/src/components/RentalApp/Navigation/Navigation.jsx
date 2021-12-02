import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar, Nav } from "react-bootstrap";
import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";
import AccountLinks from "../AccountLinks/AccountLinks";
import RentalTabs from "../RentalTabs/RentalTabs";
import Logo from "../../../logos/logo-text-small.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        bg="light"
        sticky="top"
        className="d-flex flex-column p-0"
        expand="xl"
        style={{ borderBottom: "1px solid black" }}
      >
        <div className="d-flex w-100 justify-content-evenly align-items-center">
          <Link style={{ height: "4.5rem" }} to="/rental">
            <img style={{ height: "4.5rem" }} src={Logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="d-flex justify-content-end"
          >
            <Nav className="d-flex align-items-center">
              <Nav.Link as={Link} className="me-3 text-navy--dark" to="/">
                {t("back_to_website")}
              </Nav.Link>

              <AccountLinks />
              <LangaugeDropdown />
            </Nav>
          </Navbar.Collapse>

          <OffCanvasCart key={1} placement="end" />
        </div>
      </Navbar>
      <RentalTabs />
    </>
  );
};

export default Navigation;
