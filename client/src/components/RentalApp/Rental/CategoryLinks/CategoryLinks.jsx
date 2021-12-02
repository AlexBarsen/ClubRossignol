import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryLinks = () => {
  return (
    <NavDropdown
      title="Rent equipment"
      id="nav-dropdown--2"
      className="me-3"
      style={{ fontWeight: "bolder" }}
    >
      <NavDropdown.Item className="tab-item tab-item--border-right">
        <LinkContainer to="/rental/rentals">
          <Nav.Link className="tab-link">All categories</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Item className="tab-item tab-item--border-right">
        <LinkContainer to="/rental/category/ski">
          <Nav.Link className="tab-link">Ski</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Item className="tab-item tab-item--border-right">
        <LinkContainer to="/rental/category/snowboard">
          <Nav.Link className="tab-link">Snowboard</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
      <NavDropdown.Item className="tab-item ">
        <LinkContainer to="/rental/category/bike">
          <Nav.Link className="tab-link">Bike</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default CategoryLinks;
