import React, { useState } from "react";
import "./EquipmentCard.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

import { Card, Carousel } from "react-bootstrap";
import DynamicModal from "../../../utils/DynamicModal/DynamicModal";
import RentalForm from "../RentalForm/RentalForm";

const EquipmentCard = ({ item }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderModal = () => {
    setWrappedComponent(
      <RentalForm item={item} closeModal={() => setModalShow(false)} />
    );
    setModalTitle(t(item.name));
    setModalShow(true);
  };

  const { name, price, images } = item;

  return (
    <>
      <Card className="equipmentCard card-shadow">
        {images.length > 1 ? (
          <Carousel
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            className="equipment-card equipment-card-carousel"
          >
            {images.map((image, idx) => (
              <Carousel.Item
                key={image + idx}
                className="equipmentCard equipmentCard-carousel  equipmentCard-carousel--item"
              >
                <img
                  className="d-block w-100  equipmentCard  equipmentCard-carousel  equipmentCard-carousel--image p-3"
                  src={image}
                  alt="Second slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="card-image">
            <Card.Img
              variant="top"
              src={images[0]}
              className="p-3 border border-0  equipmentCard  equipmentCard-image  equipmentCard-image--img p-3"
            />
          </div>
        )}

        <Card.Body className="p-0 card-body">
          <Card.Header className="equipmentCard-body--header">
            {t(name)}
          </Card.Header>

          <div className="d-flex justify-content-between px-3 py-2 align-items-center  equipmentCard-body--footer">
            <div className="m-0 border border-0">
              {price} {t("ron_day")}
            </div>

            <div className="d-flex align-items-center">
              <Button
                startIcon={<AddCircleIcon />}
                variant="contained"
                className="custom-button--blue"
                onClick={() => renderModal()}
              >
                {t("choose")}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {modalShow ? (
        <DynamicModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={modalTitle}
          size="lg"
          render={() => wrappedComponent}
        />
      ) : null}
    </>
  );
};

export default EquipmentCard;
