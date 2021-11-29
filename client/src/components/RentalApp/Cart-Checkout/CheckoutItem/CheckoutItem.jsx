import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import RentalEditForm from "../../Rental/RentalEditForm/RentalEditForm";
import DynamicModal from "../../DynamicModal/DynamicModal";
import { Button, Card, ListGroup, Container } from "react-bootstrap/";

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const {
    productType,
    name,
    firstName,
    lastName,
    sex = null,
    height = null,
    weight = null,
    shoeSize = null,
    images,
    price,
    experience = null,
    days,
    startDate,
    endDate,
    timePeriod = null,
  } = cartItem;

  const renderModal = () => {
    setModalTitle(name);
    setWrappedComponent(<RentalEditForm cartItem={cartItem} />);
    setModalShow(true);
  };

  return (
    <div>
      <Card style={{ width: "28rem" }} className="h-100">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <Card.Img
            variant="top"
            src={images[0]}
            className="py-2"
            style={{ height: "6rem", width: "6rem" }}
          />
          <Card.Title className="d-flex justify-content-center mx-3">
            {t(name)}
          </Card.Title>
        </div>

        <Container className="d-flex justify-content-around">
          <div style={{ width: "48%" }}>
            <Card.Header className="border">Personal details</Card.Header>

            <ListGroup.Item>
              <strong>Person:</strong> {firstName} {lastName}
            </ListGroup.Item>

            {sex ? (
              <ListGroup.Item>
                <strong>Sex:</strong> {t(sex)}
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

            {shoeSize ? (
              <ListGroup.Item>
                <strong>{t("shoeSize")}:</strong> {shoeSize}
              </ListGroup.Item>
            ) : null}

            {experience ? (
              <ListGroup.Item>
                <strong>{t("experience")}:</strong> {t(experience)}
              </ListGroup.Item>
            ) : null}
          </div>

          <div style={{ width: "48%" }}>
            <Card.Header className="border">Reservation Details</Card.Header>

            <ListGroup.Item>
              <strong>{t("from")}:</strong> {startDate}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>{t("to")}:</strong> {endDate}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>{t("number_of_days")}:</strong> {days}
            </ListGroup.Item>

            {productType !== "bike" ? (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {days} x {price} = {days * price}{" "}
                RON
              </ListGroup.Item>
            ) : (
              <ListGroup.Item>
                <strong>{t("price")}:</strong> {days}(
                {timePeriod === "per_day" ? t("days") : t(timePeriod)}) x{price}{" "}
                = {days * price} RON
              </ListGroup.Item>
            )}
          </div>
        </Container>

        <div className="d-flex justify-content-around flex-grow-1 align-items-center p-3">
          <div>
            <Button onClick={() => renderModal()}>Edit</Button>
          </div>

          <div>
            <Button onClick={() => clearItemFromCart(cartItem)}>Delete</Button>
          </div>
        </div>
      </Card>

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalTitle}
        size="lg"
        render={() => wrappedComponent}
      />
    </div>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
