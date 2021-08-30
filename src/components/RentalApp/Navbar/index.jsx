import React from "react";
import { connect } from "react-redux";

import { FaBars, FaUserCircle } from "react-icons/fa";

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

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import {
  HeaderContainer,
  Flag,
  User,
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

  const languages = [
    {
      code: "ro",
      name: "Romania",
      country_code: "ro",
    },
    {
      code: "en",
      name: "English",
      country_code: "en",
    },
  ];

  return (
    <>
      <HeaderContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <HeaderOptions>
          <HeaderOption to="/">{t("back_to_website")}</HeaderOption>
          {languages.map(({ code, name, country_code }) => (
            <Flag
              key={country_code}
              onClick={() => i18next.changeLanguage(code)}
            >
              {" "}
              {name}{" "}
            </Flag>
          ))}

          {/* <HeaderOption to="/rental/account">Account</HeaderOption> */}
          {currentUser ? null : <SignInModal />}
          {currentUser ? null : <SignUpModal />}
          {currentUser ? (
            <HeaderOption>
              <FaUserCircle size={20} />
              {currentUser.firstName + " " + currentUser.lastName}{" "}
            </HeaderOption>
          ) : null}
          <HeaderOption to="/rental/">{t("about")}</HeaderOption>
          <HeaderOption to="/rental/">{t("contact")}</HeaderOption>
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
