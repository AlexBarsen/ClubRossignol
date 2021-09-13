import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/RentalApp/Cart-Checkout/CheckoutItem/index";

import StripeCheckoutButton from "../../components/RentalApp/Cart-Checkout/StripeButton/index";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  Title,
  CheckoutPageContainer,
  Table,
  Body,
  Row,
  Heading,
  Message,
  Total,
  TotalPrice,
  TotalItems,
  TotalSpan,
} from "./CheckoutElements";

import { useTranslation } from "react-i18next";

const CheckoutPage = ({ cartItems, total }) => {
  const { t } = useTranslation();
  return (
    <>
      <CheckoutPageContainer>
        <Title>{t("cart_items")}:</Title>
        <Table>
          <Body>
            <Row>
              <Heading>{t("product")}</Heading>
              <Heading>{t("product_name")}</Heading>
              <Heading>{t("person")}</Heading>
              <Heading>{t("details")}</Heading>
              <Heading>{t("period")}</Heading>
              <Heading>{t("price")}</Heading>
              <Heading>{t("actions")}</Heading>
            </Row>

            {cartItems.length
              ? cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
              : null}
          </Body>
        </Table>
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
