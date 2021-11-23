import React from "react";
import { useTranslation } from "react-i18next";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";
import AccountLinks from "../AccountLinks/AccountLinks";

import Logo from "../../../logos/logo-text-small.png";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar sticky="top" className="background-white" expand="lg">
      <Container>
        <div style={{ height: "3.5rem" }}>
          <img style={{ height: "3.5rem" }} src={Logo} alt="logo" />
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
      </Container>

      <OffCanvasCart key={1} placement="end" />
    </Navbar>
  );
};

export default Navigation;
