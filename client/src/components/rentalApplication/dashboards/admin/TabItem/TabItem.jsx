import React from "react";
import { useTranslation } from "react-i18next";

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

const TabItem = ({ item }) => {
  const { t } = useTranslation();

  const {
    days,
    endDate,
    firstName,
    lastName,
    type,
    price,
    sex,
    weight,
    height,
    experience,
    shoeSize,
    startDate,
    timePeriod,
  } = item;

  return (
    <div>
      <div className="d-flex justify-content-around border border-secondary mt-2 w-100">
        {type !== "bike" ? (
          <List className="p-0 border-end border-secondary w-50">
            <ListItem
              className="border-bottom border-secondary list-item--heading"
              style={{ background: "#dedede" }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                className="d-flex align-items-center"
                primary="Personal Details"
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={`${firstName} ${lastName}`} />
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
        ) : null}

        <List className={type !== "bike" ? "p-0 w-50" : "p-0 w-100"}>
          <ListItem
            className="border-bottom border-secondary list-item--heading"
            style={{ background: "#dedede" }}
          >
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Reservation Details" />
          </ListItem>

          {type === "bike" ? (
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={`${firstName} ${lastName}`} />
            </ListItem>
          ) : null}

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
              primary={`${
                timePeriod === "4h"
                  ? "4h"
                  : timePeriod === "2h"
                  ? "2h"
                  : days > 1
                  ? days + " days"
                  : days + " day"
              }`}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${price} RON / ${
                timePeriod === "4h" ? "4h" : timePeriod === "2h" ? "2h" : "day"
              }`}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default TabItem;
