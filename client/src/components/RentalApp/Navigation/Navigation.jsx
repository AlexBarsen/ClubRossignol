import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import i18next from "i18next";
import { LinkContainer } from "react-router-bootstrap";
import DynamicModal from "../DynamicModal/DynamicModal";
import SignIn from "../Sign-In-Up/SignIn/SignIn";
import SignUp from "../Sign-In-Up/SignUp/SignUp";
import PasswordReset from "../Sign-In-Up/PasswordReset/PasswordReset";

import CartDropdown from "../Cart-Checkout/CartDropdown/index";

import { createStructuredSelector } from "reselect";

import CartIcon from "../Cart-Checkout/CartIcon/index";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import {
  toggleAcountModalHidden,
  signOutStart,
} from "../../../redux/user/user.actions";

const Navigation = ({ currentUser, cartHidden, signOut }) => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const showModal = (component) => {
    setModalTitle(
      component.type.WrappedComponent.name === "SignIn"
        ? "Sign In"
        : component.type.WrappedComponent.name === "SignUp"
        ? "Sign Up"
        : "Password Reset"
    );
    setWrappedComponent(component);

    setModalShow(true);
  };

  return (
    <Navbar style={{ backgroundColor: "lightblue" }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-flex justify-content-end"
        >
          <Nav>
            <NavDropdown
              className="h2 me-3"
              title="Select Language"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="h3"
                onClick={() => i18next.changeLanguage("ro")}
              >
                Romanian <span className="h2">🇷🇴</span>
              </NavDropdown.Item>
              <NavDropdown.Item
                className="h3"
                onClick={() => i18next.changeLanguage("en")}
              >
                English <span className="h2">🇬🇧</span>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="h2 me-3">{t("back_to_website")}</Nav.Link>

            <NavDropdown
              className="h2 me-3"
              title="Rent"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/rental">
                <NavDropdown.Item className="h3">All Rentals</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/rental/category/ski">
                <NavDropdown.Item className="h3">Ski</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/rental/category/snowboard">
                <NavDropdown.Item className="h3">Snowboard</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/rental/category/bike">
                <NavDropdown.Item className="h3">Bike</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown
              className="h2 me-3"
              title="Account"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="h3"
                onClick={() => showModal(<SignIn />)}
              >
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Item
                className="h3"
                onClick={() => showModal(<SignUp />)}
              >
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item
                className="h3"
                onClick={() => showModal(<PasswordReset />)}
              >
                Forgot password?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {currentUser ? (
            <DropdownButton
              size="lg"
              id="dropdown-basic-button"
              title={`Signed in as: ${currentUser.firstName} ${currentUser.lastName}`}
            >
              <LinkContainer to="/rental/dashboard">
                <Dropdown.Item className="h3">Dashboard</Dropdown.Item>
              </LinkContainer>
              <Dropdown.Item className="h3" onClick={() => signOut()}>
                Sign out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Navbar.Text className="h3">
              You currently are not signed in.
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>

      <CartIcon />
      {cartHidden ? <CartDropdown /> : null}

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle={modalTitle}
        renderComponent={() => wrappedComponent}
      />
    </Navbar>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleAcountModalHidden: () => dispatch(toggleAcountModalHidden()),
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
