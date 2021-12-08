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
      <NavDropdown.Item>
        <LinkContainer to="/rental/rentals">
          <Nav.Link>All categories</Nav.Link>
        </LinkContainer>
      </NavDropdown.Item>
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
