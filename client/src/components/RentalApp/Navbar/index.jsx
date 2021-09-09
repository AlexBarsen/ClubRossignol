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
  HeaderOptionLink,
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
          <FaBars size={30} />
        </MobileIcon>

        <HeaderOptions>
          <HeaderOption>
            <LanguagesDropdown />
          </HeaderOption>
          <HeaderOptionLink to="/">{t("back_to_website")}</HeaderOptionLink>

          {/* <HeaderOption to="/rental/account">Account</HeaderOption> */}

          {currentUser ? null : (
            <>
              <SignInModal />

              <SignUpModal />
            </>
          )}

          <HeaderOptionLink to="/rental/">{t("about")}</HeaderOptionLink>
          <HeaderOptionLink to="/rental/">{t("contact")}</HeaderOptionLink>

          {currentUser ? (
            <HeaderOption>
              <UserDropdown user={currentUser} />
            </HeaderOption>
          ) : null}

          {/* {currentUser && currentUser.role === "admin" ? (
            <HeaderOptionLink to="/rental/admin">
              Admin Dashbooard
            </HeaderOptionLink>
          ) : null} */}
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