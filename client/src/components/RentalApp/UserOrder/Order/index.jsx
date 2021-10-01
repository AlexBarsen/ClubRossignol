import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";

import {
  OrderContainer,
  Container,
  OrderedItems,
  WrapperLeft,
  WrapperRight,
  OrderInfoLeft,
  OrderInfoRight,
  OrderInfoSpan,
  ButtonContainer,
} from "./OrderElements";

import OrderItem from "../OrderItem/index";
import { Button } from "../../Button/ButtonElement";

const Order = ({ order }) => {
  const { t } = useTranslation();

  const { orderedItems, total } = order;

  const [isOpen, setIsOpen] = useState(false);

  const orderDate =
    order.orderedAt.toDate().toLocaleDateString() +
    " " +
    order.orderedAt.toDate().toLocaleTimeString();

  return (
    <>
      <OrderContainer>
        <Container isOpen={isOpen}>
          <WrapperLeft>
            <OrderInfoLeft>
              <OrderInfoSpan>{t("order_id")}:</OrderInfoSpan>
              {order.orderID}
            </OrderInfoLeft>
            <OrderInfoLeft>
              <OrderInfoSpan>{t("order_date")}:</OrderInfoSpan> {orderDate}
            </OrderInfoLeft>
            <OrderInfoLeft>
              <OrderInfoSpan>{t("items_ordered")}:</OrderInfoSpan>{" "}
              {orderedItems.length}
            </OrderInfoLeft>
            <OrderInfoLeft>
              <OrderInfoSpan>{t("order_total")}:</OrderInfoSpan> {order.total}
              RON
            </OrderInfoLeft>
          </WrapperLeft>

          <WrapperRight>
            <OrderInfoRight>
              <OrderInfoSpan>Status: </OrderInfoSpan>{" "}
              {order.status === "received" ? `📥(${t(order.status)})` : null}
              {order.status === "prepared" ? `☑️ (${t(order.status)})` : null}
              {order.status === "complete" ? `✅ (${t(order.status)})` : null}
            </OrderInfoRight>

            <ButtonContainer>
              <Button buttonType="order" onClick={() => setIsOpen(!isOpen)}>
                Details &#x2193;
              </Button>
            </ButtonContainer>
          </WrapperRight>
        </Container>

        <Collapsible style={{ margin: 0 }} open={isOpen}>
          <OrderedItems>
            {orderedItems.map((item, index) => (
              <OrderItem
                key={item.id}
                item={item}
                total={total}
                index={index}
              />
            ))}
          </OrderedItems>
        </Collapsible>
      </OrderContainer>
    </>
  );
};

export default Order;
