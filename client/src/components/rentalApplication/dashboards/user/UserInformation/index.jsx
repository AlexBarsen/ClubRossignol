import React from "react";
import "./UserCard.css";
import { useTranslation } from "react-i18next";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const UserInformation = ({ currentUser }) => {
  const { t } = useTranslation();

  const { id, firstName, lastName, email, phone, dateOfBirth, emailVerified } =
    currentUser;

  const avatar = createAvatar(style, {
    seed: id,
    dataUri: true,
  });

  return (
    <Card className="user-card">
      <Card.Img
        style={{ width: "10rem" }}
        className="m-auto"
        variant="top"
        src={avatar}
      />
      <Card.Body className="flex-grow-0">
        <Card.Title className="d-flex justify-content-center m-0">
          Account Details
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush flex-grow-0">
        <ListGroupItem>
          {t("name")}: {firstName}
        </ListGroupItem>
        <ListGroupItem>
          {t("surname")}: {lastName}
        </ListGroupItem>
        <ListGroupItem>
          {t("date_of_birth")}:{dateOfBirth}
        </ListGroupItem>
        <ListGroupItem>
          {t("email")}: {email}
        </ListGroupItem>
        <ListGroupItem>
          {t("email_verified")}:{" "}
          {emailVerified
            ? `${t("email_verified_true")}`
            : `${t("email_verified_false")}`}
        </ListGroupItem>
        <ListGroupItem>
          {t("phone")}: {phone}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default UserInformation;
