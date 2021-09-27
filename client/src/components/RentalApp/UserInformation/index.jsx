import React from "react";

import { useTranslation } from "react-i18next";

import {
  UserInformationContainer,
  UserDetails,
  Detail,
  DetailSpan,
} from "./UserInformationElements";

const UserInformation = ({ currentUser }) => {
  const { firstName, lastName, email, phone, dateOfBirth, verifiedEmail } =
    currentUser;

  const { t } = useTranslation();
  return (
    <>
      <UserInformationContainer>
        <UserDetails>
          <Detail>
            <DetailSpan>{t("name")}: </DetailSpan>
            {firstName}
          </Detail>
          <Detail>
            <DetailSpan> {t("surname")}: </DetailSpan>
            {lastName}
          </Detail>
          <Detail>
            <Detail>
              <DetailSpan> {t("date_of_birth")}: </DetailSpan>
              {dateOfBirth}
            </Detail>
            <DetailSpan> {t("email")}: </DetailSpan>
            {email}
          </Detail>
          <Detail>
            <DetailSpan> {t("email_verified")}: </DetailSpan>
            {verifiedEmail ? "true" : "false"}
          </Detail>
          <Detail>
            <DetailSpan> {t("phone")}: </DetailSpan>
            {phone}
          </Detail>
        </UserDetails>
      </UserInformationContainer>
    </>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

export default UserInformation;
