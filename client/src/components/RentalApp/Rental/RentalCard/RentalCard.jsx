import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import DynamicModal from "../../DynamicModal/DynamicModal";

import RentalModal from "../RentalForm/RentalForm";

const RentalCard = ({ item }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  const [wrappedComponent, setWrappedComponent] = useState(
    <RentalModal item={item} />
  );

  const { name, price, icon } = item;

  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={icon}
          className="p-5 border border-bottom "
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center m-0">
            <span className="h2 mb-0">{t(name)}</span>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <div className="d-flex justify-content-around">
            <ListGroupItem className="h3 m-0 border border-0 p-3">
              {price} {t("ron_day")}
            </ListGroupItem>
            <div className="d-flex align-items-center">
              <Button
                variant="primary"
                className="m-0"
                onClick={() => setModalShow(true)}
              >
                <span className="h3">Alege</span>
              </Button>
            </div>
          </div>
        </ListGroup>
      </Card>

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle={modalTitle}
        renderComponent={() => wrappedComponent}
      />
    </>
  );
};

export default RentalCard;
