import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import i18next from "i18next";

import { clearCart } from "../../../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";

import { addCollectionAndDocuments } from "../../../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

// * pass properties into Component
const StripeCheckoutButton = ({ price, currentUser, clearCart, cartItems }) => {
  // * Stripe configuration
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr";

  // * function which returns a Order Object and also clears the cart upon success
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        toast.success(
          i18next.language === "en"
            ? "Payment successful, your order has been placed."
            : "Plată reușită, comanda dumneavoastră a fost plasată cu succes."
        );
        const order = [
          {
            order_ip: token.client_ip,
            userID: currentUser.id,
            userEmail: currentUser.email,
            status: "received",
            orderedItems: cartItems,
            total: priceForStripe / 100,
            orderedAt: new Date(),
          },
        ];

        addCollectionAndDocuments("orders", order);
        clearCart();
      })
      .catch((error) => {
        toast.error(
          i18next.language === "en"
            ? `Something went wrong with your payment. Error: ${error.message}`
            : `A apărut o eroare cu plata dumneavoastră. Error: ${error.message}`
        );
      });
  };

  // * return the StripeCheckout Button with the configuration written above
  return (
    <StripeCheckout
      currency="RON"
      label="Finalizeaza Comanda"
      name="Club Rossignol"
      billingAdress
      shippingAddress
      description={`Totalul dumneavoastra este de ${price} RON`}
      panelLabel="Plateste acum"
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// * dispatch functions to Redux store
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
