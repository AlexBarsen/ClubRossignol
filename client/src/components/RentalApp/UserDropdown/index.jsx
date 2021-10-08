import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import {
  User,
  UserDropdownContainer,
  OptionsList,
  Option,
} from "./UserDropdownElements";

import { signOutStart } from "../../../redux/user/user.actions";
import { toggleUserDropdownHidden } from "../../../redux/user/user.actions";
import { selectUserDropdownHidden } from "../../../redux/user/user.selectors";
import { FaUserCircle } from "react-icons/fa";

const UserDropdown = ({
  user,
  userDropdownHidden,
  toggleUserDropdownHidden,
  signOut,
  history,
}) => {
  const { firstName, lastName } = user;

  return (
    <>
      <UserDropdownContainer>
        <User onClick={() => toggleUserDropdownHidden()}>
          <FaUserCircle size={20} style={{ marginRight: ".5rem" }} />
          {firstName} {lastName}
        </User>

        {!userDropdownHidden ? (
          <OptionsList>
            <Option
              onClick={
                user.role === "admin"
                  ? () => {
                      history.replace("/rental/admin");
                      toggleUserDropdownHidden();
                    }
                  : () => {
                      history.replace("/rental/dashboard");
                      toggleUserDropdownHidden();
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

const mapStateToProps = createStructuredSelector({
  userDropdownHidden: selectUserDropdownHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
  toggleUserDropdownHidden: () => dispatch(toggleUserDropdownHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
);
