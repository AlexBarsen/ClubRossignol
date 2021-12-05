import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./AcountLinks.scss";

import {
  selectAcountModalHidden,
  selectCurrentUser,
} from "../../../../redux/user/user.selectors";
import {
  signOutStart,
  toggleAcountModalHidden,
} from "../../../../redux/user/user.actions";

import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import DynamicModal from "../../../utils/DynamicModal/DynamicModal";
import PasswordReset from "../PasswordReset/PasswordReset";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const AccountLinks = ({
  currentUser,
  accountModalHidden,
  toggleAccountModal,
  signOut,
}) => {
  const [modalSize, setModalSize] = useState();
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const renderModal = (component, size) => {
    setModalTitle(
      component.type.WrappedComponent.name === "SignIn"
        ? "Sign In"
        : component.type.WrappedComponent.name === "SignUp"
        ? "Sign Up"
        : "Password Reset"
    );
    setWrappedComponent(component);
    setModalSize(size);
    toggleAccountModal();
  };
  return (
    <>
      {currentUser ? (
        <Nav>
          <NavDropdown
            id="nav-dropdown"
            title={currentUser.firstName + " " + currentUser.lastName}
          >
            {currentUser.email === "admin@gmail.com" ? (
              <LinkContainer to="/rental/admin">
                <NavDropdown.Item>Admin Dashboard</NavDropdown.Item>
              </LinkContainer>
            ) : (
              <LinkContainer to="/rental/dashboard">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </LinkContainer>
            )}
            <NavDropdown.Item onClick={() => signOut()}>
              Sign out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<SignIn />, "sm")}
          >
            Sign In
          </Nav.Link>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<SignUp />, "md")}
          >
            Sign Up
          </Nav.Link>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<PasswordReset />, "sm")}
          >
            Forgot password?
          </Nav.Link>
        </>
      )}

      {!accountModalHidden ? (
        <DynamicModal
          show={!accountModalHidden}
          onHide={() => toggleAccountModal()}
          title={modalTitle}
          size={modalSize}
          render={() => wrappedComponent}
        />
      ) : null}
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  accountModalHidden: selectAcountModalHidden,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
  toggleAccountModal: () => dispatch(toggleAcountModalHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountLinks);
