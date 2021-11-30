import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import StripeButton from "../../components/RentalApp/Cart-Checkout/StripeButton/index";

import {
  Title,
  CheckoutPageContainer,
  CheckoutPageContent,
  CheckoutItemsContainer,
  Message,
  Total,
  TotalPrice,
  TotalSpan,
  TotalItems,
  CardDetails,
  CardDetail,
  CardDetailSpan,
} from "./CheckoutElements";

import CheckoutForm from "../../components/RentalApp/Stripe/CheckoutForm";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/RentalApp/Cart-Checkout/CheckoutItem/CheckoutItem";
// import StripeCheckoutButton from "../../components/RentalApp/Cart-Checkout/StripeButton/index";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const stripePromise = loadStripe(
  "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr"
);

const CheckoutPage = ({ cartItems, total, currentUser }) => {
  const { t } = useTranslation();

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

          {/* {cartItems.length ? null : <Message>{t("cart_message")}</Message>} */}

          {/* {total ? (
            <Total>
              <TotalPrice>
                <TotalSpan>Total:</TotalSpan> {total} RON
              </TotalPrice>
              <TotalItems>
                There are <TotalSpan>{cartItems.length}</TotalSpan> products in
                your cart
              </TotalItems>
            </Total>
          ) : null}

          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <StripeCheckoutButton />
            </Elements>
          )} */}

          {/* {currentUser ? (
            cartItems.length ? (
              <>
                <StripeCheckoutButton price={total} cartItems={cartItems} />
                <CardDetails>
                  <CardDetail>
                    <CardDetailSpan>Test Card:</CardDetailSpan> 4242 4242 4242
                    4242
                  </CardDetail>
                  <CardDetail>
                    <CardDetailSpan>Exp. Date:</CardDetailSpan> 01/22
                  </CardDetail>
                  <CardDetail>
                    <CardDetailSpan>CVC:</CardDetailSpan> 123
                  </CardDetail>
                </CardDetails>
              </>
            ) : (
              <Message>{t("cart_message")}</Message>
            )
          ) : cartItems.length ? (
            <Message>{t("please_log_in")}</Message>
          ) : (
            <Message>{t("cart_message")}</Message>
          )} */}
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </CheckoutPageContent>
      </CheckoutPageContainer>
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
