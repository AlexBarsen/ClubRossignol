import React from "react";
import { useTranslation } from "react-i18next";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import AccountDropdown from "../AccountDropdown/AccountDropdown";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar style={{ backgroundColor: "lightblue" }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-flex justify-content-end"
        >
          <Nav className="d-flex align-items-center">
            <LangaugeDropdown />
            <Nav.Link>{t("back_to_website")}</Nav.Link>
            <CategoryDropdown />
            <AccountDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>

      <OffCanvasCart key={1} placement="end" />
    </Navbar>
  );
};

export default Navigation;
