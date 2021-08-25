import React, { useRef } from "react";
import { connect } from "react-redux";

import CartDropdown from "../CartDropdown/index";

import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/index";

import {
  selectCurrentUser,
  selectUserSignInHidden,
} from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import {
  toggleUserSignInHidden,
  signOutStart,
} from "../../../redux/user/user.actions";

import { HeaderContainer, HeaderOptions, HeaderOption } from "./HeaderElements";

const Header = ({
  currentUser,
  userSignInHidden,
  cartHidden,
  toggleUserSignInHidden,
  signOutStart,
}) => {
  const parentRef = useRef();
  console.log(parentRef);
  return (
    <>
      <HeaderContainer>
        <HeaderOptions>
          <HeaderOption to="/rental/">About</HeaderOption>
          <HeaderOption to="/rental/">Prices</HeaderOption>
          <HeaderOption to="/rental/sign">Account</HeaderOption>
          <HeaderOption to="/rental/">Contact</HeaderOption>
        </HeaderOptions>

        <CartIcon />

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
