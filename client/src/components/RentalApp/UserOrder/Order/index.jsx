import React, { useState } from "react";

import {
  OrderContainer,
  Container,
  OrderedItems,
  Wrapper,
  OrderInfo,
  OrderInfoSpan,
  Wrapper2,
} from "./OrderElements";

import { Button } from "../../Button/ButtonElement";

import OrderItem from "../OrderItem/index";

import Collapsible from "react-collapsible";

import { useTranslation } from "react-i18next";

const Order = ({ order }) => {
  const { orderedItems, total } = order;
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
  };

  const orderDate = transformDate(order.orderedAt.toDate());

  return (
    <>
      <OrderContainer>
        <Container isOpen={isOpen}>
          <Wrapper>
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
          </Wrapper>

          <Wrapper2>
            <OrderInfo>
              <OrderInfoSpan>Status: </OrderInfoSpan>{" "}
              {order.status === "received" ? `📩 (${t(order.status)})` : null}
              {order.status === "prepared" ? `☑️ (${t(order.status)})` : null}
              {order.status === "complete" ? `✅ (${t(order.status)})` : null}
            </OrderInfo>

            <Button buttonType="order" onClick={() => setIsOpen(!isOpen)}>
              Details &#x2193;
            </Button>
          </Wrapper2>
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
