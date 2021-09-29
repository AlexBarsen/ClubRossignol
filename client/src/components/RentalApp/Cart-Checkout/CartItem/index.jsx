import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  CartItemContainer,
  IconContainer,
  Wrapper,
  Icon,
  Detail,
  ButtonContainer,
} from "./CartItemElements";

import { clearItemFromCart } from "../../../../redux/cart/cart.actions";
import { Button } from "../../Button/ButtonElement";

const CartItem = ({ item, clearItemFromCart }) => {
  const { t } = useTranslation();

  const { icon, price, name, firstName, lastName, days } = item;

  return (
    <>
      <CartItemContainer>
        <IconContainer>
          <Icon src={icon} />
        </IconContainer>

        <Wrapper>
          <Detail>
            {firstName} {lastName}
          </Detail>

          <Detail>{t(name)}</Detail>

          <Detail>
            {item.timePeriod
              ? item.timePeriod !== "days"
                ? `${item.timePeriod} x ${price}RON = ${price} RON`
                : `${days} days x ${price}RON = ${days * price}RON`
              : `${days} days x ${price}RON = ${days * price}RON`}
          </Detail>
        </Wrapper>

        <ButtonContainer>
          <Button buttonType="close" onClick={() => clearItemFromCart(item)}>
            ❌
          </Button>
        </ButtonContainer>
      </CartItemContainer>
    </>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default React.memo(connect(null, mapDispatchToProps)(CartItem));
