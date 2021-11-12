import React from "react";
import { useTranslation } from "react-i18next";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";

import AccountLinks from "../AccountLinks/AccountLinks";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar sticky="top" className="background-primary--1" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">Club Rossignol</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-flex justify-content-end"
        >
          <Nav className="d-flex align-items-center">
            <Nav.Link className="me-3 text-white">
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
