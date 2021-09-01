import React, { useState } from "react";

import { FaUserCircle } from "react-icons/fa";

import { connect } from "react-redux";

import { signOutStart } from "../../../redux/user/user.actions";

import {
  User,
  UserDropdownContainer,
  OptionsList,
  OptionLink,
  Option,
} from "./UserDropdownElements";

const UserDropdown = ({ user, signOut }) => {
  const { firstName, lastName } = user;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <UserDropdownContainer>
        <User onClick={() => setIsOpen(!isOpen)}>
          <FaUserCircle size={20} style={{ marginRight: ".5rem" }} />
          {firstName} {lastName}
        </User>

        {isOpen ? (
          <OptionsList>
            <OptionLink to="/rental/dashboard">Dashboard</OptionLink>
            <Option onClick={() => signOut()}>Sign out</Option>
          </OptionsList>
        ) : null}
      </UserDropdownContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(UserDropdown);
