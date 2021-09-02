import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import {
  UserInformationContainer,
  UserDetails,
  Detail,
} from "./UserInformationElements";

const UserInformation = ({ currentUser }) => {
  const { firstName, lastName, email, phone } = currentUser;

  return (
    <>
      <UserInformationContainer>
        <UserDetails>
          <Detail>Name: {firstName}</Detail>
          <Detail>Surname: {lastName}</Detail>
          <Detail>E-Mail: {email}</Detail>
          <Detail>Phone: {phone}</Detail>
        </UserDetails>
      </UserInformationContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInformation);
