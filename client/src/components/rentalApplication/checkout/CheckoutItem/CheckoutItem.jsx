import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";

import EditForm from "../../rental/EditForm/EditForm";
import DynamicModal from "../../../utils/DynamicModal/DynamicModal";
import { Image } from "react-bootstrap/";
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

  const { name, firstName, lastName, price, images } = cartItem;

  const renderModal = () => {
    setModalTitle(name);
    setWrappedComponent(<EditForm cartItem={cartItem} />);
    setModalShow(true);
  };

  return (
    <div
      className="d-flex align-items-center mt-5 border shadow"
      style={{ width: "fit-content" }}
    >
      <div style={{ height: Cardheight }}>
        <Image
          style={{ height: "100%", width: "12rem", objectFit: "contain" }}
          className="p-3"
          src={images[0]}
        />
      </div>
      <Card
        className="shadow"
        style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
      >
        <CardContent>
          <div className="d-flex mt-3 flex-column" ref={ref}>
            <CheckoutItemsDetails cartItem={cartItem} />

            <div className="d-flex justify-content-around align-items-center">
              <div>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  className="custom-button custom-button--red w-100"
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
