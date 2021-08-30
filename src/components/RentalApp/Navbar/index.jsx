import React from "react";
import { connect } from "react-redux";

import { FaBars } from "react-icons/fa";

import CartDropdown from "../Cart-Checkout/CartDropdown/index";

import SignInModal from "../Sign-In-Up/SignInModal/index";
import SignUpModal from "../Sign-In-Up/SignUpModal/index";

import { createStructuredSelector } from "reselect";

import CartIcon from "../Cart-Checkout/CartIcon/index";

import {
  selectCurrentUser,
  selectUserSignInHidden,
} from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import {
  toggleUserSignInHidden,
  signOutStart,
} from "../../../redux/user/user.actions";

import {
  HeaderContainer,
  HeaderOptions,
  HeaderOption,
  MobileIcon,
} from "./NavbarElements";

const Navbar = ({
  currentUser,
  userSignInHidden,
  cartHidden,
  toggleUserSignInHidden,
  signOutStart,
  toggle,
}) => {
  return (
    <>
      <HeaderContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <HeaderOptions>
          <HeaderOption to="/">Back to Website</HeaderOption>
          <HeaderOption to="/rental/">About</HeaderOption>
          {/* <HeaderOption to="/rental/account">Account</HeaderOption> */}
          <SignInModal />
          <SignUpModal />
          <HeaderOption to="/rental/sign">Register</HeaderOption>
          <HeaderOption to="/rental/">Contact</HeaderOption>
          <CartIcon />
        </HeaderOptions>

        {cartHidden ? <CartDropdown /> : null}
      </HeaderContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
