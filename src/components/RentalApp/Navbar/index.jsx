import React from "react";
import { connect } from "react-redux";

import { FaBars } from "react-icons/fa";

import CartDropdown from "../Cart-Checkout/CartDropdown/index";

import SignInModal from "../Sign-In-Up/SignInModal/index";
import SignUpModal from "../Sign-In-Up/SignUpModal/index";

import { createStructuredSelector } from "reselect";

import CartIcon from "../Cart-Checkout/CartIcon/index";

import LanguagesDropdown from "../LanguageDropdown/index";
import UserDropdown from "../UserDropdown/index";

import {
  selectCurrentUser,
  selectUserSignInHidden,
} from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import {
  toggleUserSignInHidden,
  signOutStart,
} from "../../../redux/user/user.actions";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <>
      <HeaderContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <HeaderOptions>
          <HeaderOption>
            <LanguagesDropdown />
          </HeaderOption>
          <HeaderOption to="/">{t("back_to_website")}</HeaderOption>

          {/* <HeaderOption to="/rental/account">Account</HeaderOption> */}
          {currentUser ? null : <SignInModal />}
          {currentUser ? null : <SignUpModal />}

          <HeaderOption to="/rental/">{t("about")}</HeaderOption>
          <HeaderOption to="/rental/">{t("contact")}</HeaderOption>

          {currentUser ? (
            <HeaderOption>
              <UserDropdown user={currentUser} />
            </HeaderOption>
          ) : null}
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
