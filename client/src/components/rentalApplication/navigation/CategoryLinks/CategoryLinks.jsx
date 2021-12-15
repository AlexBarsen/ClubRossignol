import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

const CategoryLinks = () => {
  const { t } = useTranslation();
  return (
    <NavDropdown
      title={t("rent_equipment")}
      id="nav-dropdown--2"
      className="me-3"
      style={{ fontWeight: "bolder" }}
    >
      <NavDropdown.Item>
        <LinkContainer to="/rental/rentals">
          <Nav.Link>{t("all_categories")}</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <LinkContainer to="/rental/category/ski">
          <Nav.Link>Ski</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <LinkContainer to="/rental/category/snowboard">
          <Nav.Link>Snowboard</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <LinkContainer to="/rental/category/bike">
          <Nav.Link>Bike</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default CategoryLinks;
