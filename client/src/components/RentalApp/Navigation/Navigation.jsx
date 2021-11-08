import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import DynamicModal from "../DynamicModal/DynamicModal";
import SignIn from "../Sign-In-Up/SignIn/SignIn";
import SignUp from "../Sign-In-Up/SignUp/SignUp";
import PasswordReset from "../Sign-In-Up/PasswordReset/PasswordReset";

import { FaBars } from "react-icons/fa";

import CartDropdown from "../Cart-Checkout/CartDropdown/index";

import { createStructuredSelector } from "reselect";

import CartIcon from "../Cart-Checkout/CartIcon/index";

import LanguagesDropdown from "../../LanguageDropdown/index";
import UserDropdown from "../UserDropdown/index";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import {
  toggleAcountModalHidden,
  signOutStart,
} from "../../../redux/user/user.actions";

const Navigation = ({ currentUser, cartHidden, toggle }) => {
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
    <>
      {/* <HeaderContainer>
        <MobileIcon onClick={toggle}>
          <FaBars size={30} />
        </MobileIcon>

        <HeaderOptions>
          <HeaderOption>
            <LanguagesDropdown />
          </HeaderOption>
          <HeaderOptionLink to="/">{t("back_to_website")}</HeaderOptionLink>

          {currentUser ? null : (
            <>
              <AccountModal />
            </>
          )}

          {currentUser ? (
            <HeaderOption>
              <UserDropdown user={currentUser} />
            </HeaderOption>
          ) : null}

          <CartIcon />
        </HeaderOptions>

        {cartHidden ? <CartDropdown /> : null}
      </HeaderContainer> */}
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="d-flex justify-content-center"
          >
            <Nav>
              <Nav.Link className="h2 me-3" href="#home">
                Select Language
              </Nav.Link>
              <Nav.Link className="h2 me-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="h2 me-3" href="#back-website">
                {t("back_to_website")}
              </Nav.Link>

              <NavDropdown
                className="h2 me-3"
                title="Account"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className="h3"
                  href="#action/3.1"
                  onClick={() => showModal(<SignIn />)}
                >
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="h3"
                  href="#action/3.2"
                  onClick={() => showModal(<SignUp />)}
                >
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="h3"
                  href="#action/3.3"
                  onClick={() => showModal(<PasswordReset />)}
                >
                  Forgot password?
                </NavDropdown.Item>
              </NavDropdown>

              <CartIcon />
              {cartHidden ? <CartDropdown /> : null}
            </Nav>
            {/* <Navbar.Text className="h3">
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
        <DynamicModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          modalTitle={modalTitle}
          renderComponent={() => wrappedComponent}
        />
      </Navbar>
    </>
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
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
