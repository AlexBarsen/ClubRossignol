import React from "react";
import "./UserCard.css";
import { useTranslation } from "react-i18next";

import { Card } from "react-bootstrap";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DraftsIcon from "@mui/icons-material/Drafts";

const UserCard = ({ currentUser }) => {
  const { t } = useTranslation();

  const { firstName, lastName, email, phone, dateOfBirth, emailVerified } =
    currentUser;

  return (
    <Card className="shadow border-secondary">
      <Card.Body className="flex-grow-0">
        <Card.Title className="d-flex justify-content-center m-0">
          {t("account_details")}
        </Card.Title>
      </Card.Body>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`${firstName} ${lastName}`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={email} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                emailVerified
                  ? `${t("email_verified_true")}`
                  : `${t("email_verified_false")}`
              }
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText primary={phone} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary={dateOfBirth} />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserCard;
