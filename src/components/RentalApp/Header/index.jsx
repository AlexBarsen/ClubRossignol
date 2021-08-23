import React from "react";

import { HeaderContainer, HeaderOptions, HeaderOption } from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderOptions>
          <HeaderOption>About</HeaderOption>
          <HeaderOption>Prices</HeaderOption>
          <HeaderOption>Login</HeaderOption>
          <HeaderOption>Register</HeaderOption>
          <HeaderOption>Contact</HeaderOption>
        </HeaderOptions>
      </HeaderContainer>
    </>
  );
};

export default Header;
