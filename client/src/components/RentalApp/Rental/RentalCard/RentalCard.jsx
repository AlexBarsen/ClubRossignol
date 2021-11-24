import React, { useState } from "react";
import "./RentalCard.scss";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

import {
  incrementOrderNumber,
  getOrderCounter,
} from "../../../../firebase/firebase.utils";

import DynamicModal from "../../DynamicModal/DynamicModal";
import RentalForm from "../RentalForm/RentalForm";

const RentalCard = ({ item }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  const [wrappedComponent, setWrappedComponent] = useState(null);

  const renderModal = () => {
    setWrappedComponent(<RentalForm item={item} />);
    setModalTitle(t(item.name));
    setModalShow(true);
  };

  const { name, price, icon } = item;

  return (
    <>
      <Card
        style={{ width: "20rem", border: "1px solid #d3d3d3" }}
        className="shadow"
      >
        <div className="card-image--container">
          <Card.Img
            variant="top"
            src={icon}
            className="p-3 border border-0 card-image--img"
          />
        </div>
        <Card.Body className="flex-grow-0 p-0">
          <Card.Header className="d-flex justify-content-center m-0 p-2 border-top border-bottom-0">
            <span className="mb-0">{t(name)}</span>
          </Card.Header>
        </Card.Body>
        <ListGroup className="list-group-flush p-2">
          <div className="d-flex justify-content-around">
            <ListGroupItem className="m-0 border border-0">
              {price} {t("ron_day")}
            </ListGroupItem>
            <div className="d-flex align-items-center">
              <Button
                variant="primary"
                className="m-0"
                onClick={() => renderModal()}
              >
                Alege
              </Button>
            </div>
          </div>
        </ListGroup>
      </Card>

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalTitle}
        size="lg"
        render={() => wrappedComponent}
      />
    </>
  );
};

export default RentalCard;
