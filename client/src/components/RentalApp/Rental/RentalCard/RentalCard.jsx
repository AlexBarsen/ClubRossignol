import React, { useState } from "react";
import "./RentalCard.scss";
import { useTranslation } from "react-i18next";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Carousel,
} from "react-bootstrap";
import DynamicModal from "../../DynamicModal/DynamicModal";
import RentalForm from "../RentalForm/RentalForm";

const RentalCard = ({ item }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderModal = () => {
    setWrappedComponent(<RentalForm item={item} />);
    setModalTitle(t(item.name));
    setModalShow(true);
  };

  console.log(item);

  const { name, price, images } = item;

  return (
    <>
      <Card
        style={{ width: "20rem", border: "1px solid #d3d3d3" }}
        className="shadow"
      >
        <div className="card-image--container">
          {/* <Card.Img
            variant="top"
            src={icon}
            className="p-3 border border-0 card-image--img"
          /> */}

          {images.length > 1 ? (
            <Carousel
              variant="dark"
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              indicators={false}
              style={{ height: "15rem" }}
            >
              {" "}
              {images.map((image, idx) => (
                <Carousel.Item
                  key={image + idx}
                  className="card-image--img"
                  style={{ height: "15rem", width: "20rem" }}
                >
                  <img
                    style={{
                      height: "15rem",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Card.Img
              variant="top"
              src={images[0]}
              className="p-3 border border-0 card-image--img"
            />
          )}
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
