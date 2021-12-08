import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import EditForm from "../../rental/EditForm/EditForm";
import DynamicModal from "../../../utils/DynamicModal/DynamicModal";
import { Image } from "react-bootstrap/";
import CheckoutItemsDetails from "../CheckoutItemDetails/CheckoutItemDetails";

import "./CheckoutItem.scss";

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

  const { name, type, images } = cartItem;

  const renderModal = () => {
    setModalTitle(name);
    setWrappedComponent(<EditForm cartItem={cartItem} />);
    setModalShow(true);
  };

  return (
    <div className="d-flex align-items-center mt-5 shadow checkout-item">
      <div style={{ height: Cardheight }}>
        <Image className="p-3 checkout-item--image" src={images[0]} />
      </div>
      <Card className="checkout-item--card w-100">
        <CardContent ref={ref}>
          <div className="d-flex flex-column">
            <CheckoutItemsDetails cartItem={cartItem} />

            <div className="d-flex justify-content-around align-items-center mt-3">
              <div>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  className="custom-button custom-button--red"
                  onClick={() => renderModal()}
                >
                  Edit
                </Button>
              </div>

              <div>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  className="custom-button custom-button--red"
                  onClick={() => clearItemFromCart(cartItem)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
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
