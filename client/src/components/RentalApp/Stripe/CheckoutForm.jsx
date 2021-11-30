import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import "./CheckoutForm.scss";

import { Row, FormControl, InputGroup } from "react-bootstrap";

const CheckoutForm = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

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

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
        payment_method_data: {
          billing_details: billingDetails,
        },
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ width: "30rem" }}>
      <Row>
        <InputGroup className="mb-3">
          <FormControl name="email" type="email" placeholder="Email address" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl name="name" type="text" placeholder="First Name" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl name="address" type="text" placeholder="Address" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl name="city" type="text" placeholder="City" />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl name="zip" type="text" placeholder="Zip" />
        </InputGroup>
      </Row>
      <Row>
        <PaymentElement />
        <div>
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="mt-3"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
        </div>

        {message && <div id="payment-message">{message}</div>}
      </Row>
    </form>
  );
};

export default CheckoutForm;
