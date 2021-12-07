import React from "react";
import { useTranslation } from "react-i18next";
import "./CheckoutItemDetails.scss";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import WcIcon from "@mui/icons-material/Wc";
import HeightIcon from "@mui/icons-material/Height";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import StraightenIcon from "@mui/icons-material/Straighten";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import { Image } from "react-bootstrap";

const CheckoutItemDetails = ({ cartItem }) => {
  const { t } = useTranslation();
  const {
    type,
    images,
    name,
    firstName,
    lastName,
    sex = null,
    height = null,
    weight = null,
    shoeSize = null,
    experience = null,
    days,
    price,
    startDate,
    endDate,
    // timePeriod = null,
  } = cartItem;

  console.log("type", type);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-3 h4 border-bottom">
        <div className="d-flex align-items-center gap-4">
          <div style={{ height: "6rem" }} className="detail-image">
            <Image className="h-100 p-2" src={images[0]} />
          </div>
          <div>
            <strong>
              {firstName} {lastName}
            </strong>
            <div className="h6 mt-2">{t(name)}</div>
          </div>
        </div>

        <div>
          <strong>{price * days} RON</strong>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around shadow mt-2">
          <List className="p-0" style={{ borderRight: "1px solid #d3d3d3" }}>
            <ListItem style={{ background: "#dedede" }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Personal Details" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <WcIcon />
              </ListItemIcon>
              <ListItemText primary={t(sex)} />
            </ListItem>

            {height ? (
              <ListItem>
                <ListItemIcon>
                  <HeightIcon />
                </ListItemIcon>
                <ListItemText primary={`${height} cm`} />
              </ListItem>
            ) : null}

            {weight ? (
              <ListItem>
                <ListItemIcon>
                  <MonitorWeightIcon />
                </ListItemIcon>
                <ListItemText primary={`${weight} kg`} />
              </ListItem>
            ) : null}

            {shoeSize ? (
              <ListItem>
                <ListItemIcon>
                  <StraightenIcon />
                </ListItemIcon>
                <ListItemText primary={`${shoeSize} eur`} />
              </ListItem>
            ) : null}

            {experience ? (
              <ListItem>
                <ListItemIcon>
                  <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary={t(experience)} />
              </ListItem>
            ) : null}
          </List>

          <List className="p-0">
            <ListItem style={{ background: "#dedede" }}>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Reservation Details" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PlayCircleFilledIcon />
              </ListItemIcon>
              <ListItemText primary={startDate} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StopCircleIcon />
              </ListItemIcon>
              <ListItemText primary={endDate} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${days > 1 ? days + " days" : days + " day"}`}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary={`${price} RON / day`} />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItemDetails;
