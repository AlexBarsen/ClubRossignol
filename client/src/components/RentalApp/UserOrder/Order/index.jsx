import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";

import {
  OrderContainer,
  Container,
  OrderedItems,
  WrapperLeft,
  WrapperRight,
  OrderInfo,
  OrderInfoSpan,
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
            <OrderInfo>
              <OrderInfoSpan>{t("order_id")}: </OrderInfoSpan>
              {order.orderID}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>{t("order_date")}: </OrderInfoSpan> {orderDate}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>{t("items_ordered")}: </OrderInfoSpan>{" "}
              {orderedItems.length}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>{t("order_total")}: </OrderInfoSpan> {order.total}
              RON
            </OrderInfo>
          </WrapperLeft>

          <WrapperRight>
            <OrderInfo>
              <OrderInfoSpan>Status: </OrderInfoSpan>{" "}
              {order.status === "received" ? `📩 (${t(order.status)})` : null}
              {order.status === "prepared" ? `☑️ (${t(order.status)})` : null}
              {order.status === "complete" ? `✅ (${t(order.status)})` : null}
            </OrderInfo>

            <Button buttonType="order" onClick={() => setIsOpen(!isOpen)}>
              Details &#x2193;
            </Button>
          </WrapperRight>
        </Container>

        <Collapsible open={isOpen}>
          <OrderedItems>
            {orderedItems.map((item) => (
              <OrderItem key={item.id} item={item} total={total} />
            ))}
          </OrderedItems>
        </Collapsible>
      </OrderContainer>
    </>
  );
};

export default Order;
