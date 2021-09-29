import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTranslation } from "react-i18next";

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
} from "./CheckoutElements";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/RentalApp/Cart-Checkout/CheckoutItem/index";
import StripeCheckoutButton from "../../components/RentalApp/Cart-Checkout/StripeButton/index";

const CheckoutPage = ({ cartItems, total }) => {
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

          {cartItems.length ? null : (
            <Message>Nu exista nimic in cos momentan</Message>
          )}

          {total ? (
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

          <StripeCheckoutButton price={total} cartItems={cartItems} />
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
