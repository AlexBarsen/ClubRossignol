import React from "react";
import { useTranslation } from "react-i18next";

import { Card, ListGroup, Container, Col, Row } from "react-bootstrap";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
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

const CheckoutItemDetails = ({ cartItem }) => {
  const { t } = useTranslation();
  const {
    type,
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

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-between px-4 py-2 h4 border-bottom">
          <div>
            <strong>
              {firstName} {lastName}
            </strong>
            <div className="mt-3">{t(name)}</div>
          </div>

          <div>{price * days} RON</div>
        </div>
        <div className="d-flex justify-content-around ">
          <List>
            <ListItem>
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
            <ListItem>
              <ListItemIcon>
                <HeightIcon />
              </ListItemIcon>
              <ListItemText primary={`${height} cm`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MonitorWeightIcon />
              </ListItemIcon>
              <ListItemText primary={`${weight} kg`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StraightenIcon />
              </ListItemIcon>
              <ListItemText primary={`${shoeSize} eur`} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AcUnitIcon />
              </ListItemIcon>
              <ListItemText primary={t(experience)} />
            </ListItem>
          </List>

          <List>
            <ListItem>
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
              <ListItemText primary={days} />
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
      {/* {type !== "bike" ? (
        <Container className="p-0">
          <Row>
            <Col>
              <Card.Header className="d-flex justify-content-center">
                Personal Details
              </Card.Header>
            </Col>
          </Row>
          <Row>
            <Col>
              {shoeSize ? (
                <ListGroup.Item>
                  <strong>{t("shoeSize")}:</strong> {shoeSize}
                </ListGroup.Item>
              ) : null}

              {height ? (
                <ListGroup.Item>
                  <strong>{t("height")}:</strong> {height} cm
                </ListGroup.Item>
              ) : null}

              {weight ? (
                <ListGroup.Item>
                  <strong>{t("weight")}:</strong> {weight} kg
                </ListGroup.Item>
              ) : null}
            </Col>

            <Col>
              {sex ? (
                <ListGroup.Item>
                  <strong>Sex:</strong> {t(sex)}
                </ListGroup.Item>
              ) : null}

              {experience ? (
                <ListGroup.Item>
                  <strong>{t("experience")}:</strong> {t(experience)}
                </ListGroup.Item>
              ) : null}
            </Col>
          </Row>
        </Container>
      ) : null}

      <Container>
        <Row>
          <Col>
            <Card.Header className="d-flex justify-content-center">
              Reservation Details
            </Card.Header>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup.Item>
              <strong>{t("from")}:</strong> {startDate}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>{t("to")}:</strong> {endDate}
            </ListGroup.Item>
          </Col>

          <Col>
            <ListGroup.Item>
              <strong>{t("number_of_days")}:</strong> {days}
            </ListGroup.Item>
            {type !== "bike" ? (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {price} / day
              </ListGroup.Item>
            ) : (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {price} / day
              </ListGroup.Item>
            )}
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default CheckoutItemDetails;
