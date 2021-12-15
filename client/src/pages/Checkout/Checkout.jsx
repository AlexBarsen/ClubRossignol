import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Button from "@mui/material/Button";
import PaymentsIcon from "@mui/icons-material/Payments";
import CheckoutForm from "../../components/rentalApplication/checkout/CheckoutForm/CheckoutForm";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { Container } from "react-bootstrap";

import CheckoutItem from "../../components/rentalApplication/checkout/CheckoutItem/CheckoutItem";

import DynamicModal from "../../components/utils/DynamicModal/DynamicModal";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const stripePromise = loadStripe(
  "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr"
);

const CheckoutPage = ({ cartItems, currentUser, total }) => {
  const { t } = useTranslation();
  const [clientSecret, setClientSecret] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const renderModal = () => {
    setWrappedComponent(
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm onHide={() => setModalShow(false)} />
      </Elements>
    );
    setModalTitle("Payment");
    setModalShow(true);
  };

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cartItems]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div>
        <Container
          className="d-flex flex-column align-items-center"
          style={{ width: "fit-content" }}
        >
          {cartItems.map((cartItem, index) => (
            <CheckoutItem
              key={cartItem.id}
              cartItem={cartItem}
              number={index + 1}
            />
          ))}

          {currentUser && cartItems.length ? (
            <>
              <div
                className="mt-4"
                style={{ width: "fit-content", marginLeft: "auto" }}
              >
                <Button
                  startIcon={<PaymentsIcon />}
                  variant="contained"
                  className="custom-button--blue"
                  onClick={() => renderModal()}
                >
                  {t("to_payment")}
                </Button>

                <div className="h3 mt-3">
                  <strong>Total:</strong> {total} RON
                </div>
              </div>

              <div className="h4 mt-3" style={{ marginRight: "auto" }}>
                <p>
                  <strong>{t("payment_simulation")}</strong>
                </p>
                <p>
                  <strong>Card Number:</strong> 4242 4242 4242 4242
                </p>
                <p>
                  <strong>Exp. Date:</strong> 01/23
                </p>
                <p>
                  <strong>CVC:</strong> 123
                </p>
              </div>
            </>
          ) : null}

          {cartItems.length ? null : (
            <div className="mt-5">
              <p className="h4">
                <strong>{t("cart_message")}</strong>
              </p>
            </div>
          )}

          {cartItems.length > 0 && currentUser === null ? (
            <div className="mt-5">
              <p className="h4">
                <strong>{t("please_log_in")}</strong>
              </p>
            </div>
          ) : null}
        </Container>

        {modalShow ? (
          <DynamicModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            title={modalTitle}
            render={() => wrappedComponent}
          />
        ) : null}
      </div>
    </>
  );
};

// * connect Component to Redux state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
