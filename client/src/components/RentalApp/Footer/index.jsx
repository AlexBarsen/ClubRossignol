import React from "react";

import LogoSvg from "../../../svg/logo.svg";

import { FooterContainer, LogoContainer, Logo } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoContainer>
          <Logo src={LogoSvg} />
        </LogoContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
