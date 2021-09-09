import React, { useState } from "react";

import { FaUserCircle } from "react-icons/fa";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { signOutStart } from "../../../redux/user/user.actions";

import {
  User,
  UserDropdownContainer,
  OptionsList,
  Option,
} from "./UserDropdownElements";

const UserDropdown = ({ user, signOut, history }) => {
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
            <Option
              onClick={
                user.role === "admin"
                  ? () => {
                      history.replace("/rental/admin");
                      setIsOpen(!isOpen);
                    }
                  : () => {
                      history.replace("/rental/dashboard");
                      setIsOpen(!isOpen);
                    }
              }
            >
              Dashboard
            </Option>
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

export default withRouter(connect(null, mapDispatchToProps)(UserDropdown));
