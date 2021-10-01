import React from "react";
import { useTranslation } from "react-i18next";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

import {
  UserInformationContainer,
  AvatarContainer,
  Avatar,
  UserDetailHeading,
  UserDetails,
  Detail,
  DetailSpan,
} from "./UserInformationElements";

const UserInformation = ({ currentUser }) => {
  const { t } = useTranslation();

  const { id, firstName, lastName, email, phone, dateOfBirth, emailVerified } =
    currentUser;

  const avatar = createAvatar(style, {
    seed: id,
    dataUri: true,
  });

  return (
    <>
      <UserInformationContainer>
        <UserDetailHeading>{t("account_details")}</UserDetailHeading>

        <AvatarContainer>
          <Avatar src={avatar} alt="avatar" />
        </AvatarContainer>

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
            <DetailSpan> {t("date_of_birth")}: </DetailSpan>
            {dateOfBirth}
          </Detail>
          <Detail>
            <DetailSpan> {t("email")}: </DetailSpan>
            {email}
          </Detail>
          <Detail>
            <DetailSpan> {t("email_verified")}: </DetailSpan>
            {emailVerified
              ? `${t("email_verified_true")}`
              : `${t("email_verified_false")}`}
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

export default UserInformation;
