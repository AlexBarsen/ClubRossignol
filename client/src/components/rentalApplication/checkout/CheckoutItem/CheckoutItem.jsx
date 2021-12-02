import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import EditForm from "../../rental/EditForm/EditForm";
import DynamicModal from "../../../utils/DynamicModal/DynamicModal";
import { Image, Button, Card } from "react-bootstrap/";
import CheckoutItemsDetails from "../CheckoutItemDetails/CheckoutItemDetails";

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const [Cardheight, setCardHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setCardHeight(ref.current.clientHeight);
  }, []);

  const { name, firstName, lastName, days, price, images } = cartItem;

  const renderModal = () => {
    setModalTitle(name);
    setWrappedComponent(<EditForm cartItem={cartItem} />);
    setModalShow(true);
  };

  return (
    <div
      className="d-flex align-items-center mt-5 shadow"
      style={{ border: "1px solid black" }}
    >
      <div style={{ height: Cardheight }}>
        <Image
          style={{ height: "100%", width: "10rem", objectFit: "contain" }}
          className="p-3"
          src={images[0]}
        />
      </div>
      <Card
        className="w-100"
        ref={ref}
        style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
      >
        <Card.Header as="h4" className="d-flex justify-content-between">
          <div>{t(name)}</div>
          <div>{days * price} RON</div>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            {firstName} {lastName}
          </Card.Title>

          <div className="d-flex mt-3">
            <CheckoutItemsDetails cartItem={cartItem} />

            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <Button onClick={() => renderModal()}>Edit</Button>
              </div>

              <div className="mt-3">
                <Button onClick={() => clearItemFromCart(cartItem)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
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
