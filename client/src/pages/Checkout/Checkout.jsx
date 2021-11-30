import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {
  Title,
  CheckoutPageContainer,
  CheckoutPageContent,
  CheckoutItemsContainer,
} from "./CheckoutElements";

import CheckoutForm from "../../components/RentalApp/Stripe/CheckoutForm";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import Button from "react-bootstrap/Button";

import CheckoutItem from "../../components/RentalApp/Cart-Checkout/CheckoutItem/CheckoutItem";

import DynamicModal from "../../components/RentalApp/DynamicModal/DynamicModal";

const stripePromise = loadStripe(
  "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr"
);

const CheckoutPage = ({ cartItems, total }) => {
  const { t } = useTranslation();
  const [clientSecret, setClientSecret] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const renderModal = () => {
    setWrappedComponent(
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );
    setModalTitle("Payment");
    setModalShow(true);
  };

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <CheckoutPageContainer>
        <CheckoutPageContent>
          <Title>{t("cart_items")}:</Title>
          <CheckoutItemsContainer>
            {cartItems.map((cartItem, index) => (
              <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
                number={index + 1}
              />
            ))}
          </CheckoutItemsContainer>

          {modalShow ? (
            <DynamicModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title={modalTitle}
              render={() => wrappedComponent}
            />
          ) : null}

          <Button onClick={() => renderModal()}>Pay</Button>
        </CheckoutPageContent>
      </CheckoutPageContainer>
    </>
  );
};

// * connect Component to Redux state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
