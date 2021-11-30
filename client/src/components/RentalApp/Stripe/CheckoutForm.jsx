import { useState } from "react";
import {
  PaymentElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
// import styled from "@emotion/styled";
import axios from "axios";

import { Button, Row } from "react-bootstrap";

import BillingDetails from "./BillingDetails";

const CheckoutForm = ({ price }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post(
        "/create-payment-intent",
        {
          amount: 5 * 100,
        }
      );

      console.log(clientSecret.clientSecret);

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(
        clientSecret.clientSecret,
        {
          payment_method: paymentMethodReq.paymentMethod.id,
        }
      );

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      //   onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetails />
      </Row>
      <Row>
        {/* <div> */}
        <CardElement options={cardStyle} onChange={handleCardDetailsChange} />
        {/* </div> */}
      </Row>
      {checkoutError && <div>{checkoutError}</div>}
      <Row>
        {/* TIP always disable your submit button while processing payments */}
        <Button
          type="submit"
          className="mt-5"
          disabled={isProcessing || !stripe}
        >
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </Button>
      </Row>
    </form>
  );
};

export default CheckoutForm;
