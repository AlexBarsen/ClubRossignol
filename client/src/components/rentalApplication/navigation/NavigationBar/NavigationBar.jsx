import React from "react";
import "./NavigationBar.scss";

import { useTranslation } from "react-i18next";

import { Navbar, Nav, Container } from "react-bootstrap";
import OffCanvasCart from "../../cart/OffCanvasCart/OffCanvasCart";
import LangaugeDropdown from "../LanguageDropdown/LangaugeDropdown";
import AccountLinks from "../AccountLinks/AccountLinks";
import Logo from "../../../../logos/logo-text-small.png";
import { Link } from "react-router-dom";
import CategoryLinks from "../CategoryLinks/CategoryLinks";

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar sticky="top" className="m-auto navigation" expand="md">
      <Container className="navigation-container">
        <Link style={{ height: "4.5rem" }} to="/rental">
          <img style={{ height: "4.5rem" }} src={Logo} alt="logo" />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-flex align-items-center navigation-nav">
            <Nav.Link as={Link} className="me-3 " to="/">
              {t("back_to_website")}
            </Nav.Link>

            <AccountLinks />

            <CategoryLinks />

            <LangaugeDropdown />

            <div className="ms-2">
              <OffCanvasCart key={1} placement="end" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
