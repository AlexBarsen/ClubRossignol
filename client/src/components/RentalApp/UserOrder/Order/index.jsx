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

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
  };

  console.log(order.orderedAt);
  const orderDate = transformDate(order.orderedAt.toDate());

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
