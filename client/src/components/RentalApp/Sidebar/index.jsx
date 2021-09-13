import React from "react";

import { connect } from "react-redux";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

import { signOutStart } from "../../../redux/user/user.actions";

const Sidebar = ({ isOpen, toggle, signOut }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Back to Website</SidebarLink>

          <SidebarLink to="/rental/checkout">Checkout</SidebarLink>
          <SidebarLink to="/rental/dashboard">Account</SidebarLink>
          <SidebarLink onClick={() => signOut()} to="/rental/">
            Sign Out
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
