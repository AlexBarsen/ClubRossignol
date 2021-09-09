import React, { useState } from "react";

import {
  OrderContainer,
  Container,
  OrderedItems,
  Wrapper,
  OrderInfo,
  OrderInfoSpan,
  OrderInfoStatus,
  OrderInfoStatusSpan,
  Wrapper2,
} from "./OrderElements";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import { Button } from "../../Button/ButtonElement";

import OrderItem from "../OrderItem/index";

import Collapsible from "react-collapsible";

const Order = ({ order }) => {
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

  const orderDate = transformDate(order.orderedAt.toDate());

  return (
    <>
      <OrderContainer>
        <Container isOpen={isOpen}>
          <Wrapper>
            <OrderInfo>
              <OrderInfoSpan>Order ID: </OrderInfoSpan>
              {order.orderID}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>Order Date: </OrderInfoSpan> {orderDate}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>Items ordered: </OrderInfoSpan>{" "}
              {orderedItems.length}
            </OrderInfo>
            <OrderInfo>
              <OrderInfoSpan>Order total: </OrderInfoSpan> {order.total}RON
            </OrderInfo>
          </Wrapper>

          <Wrapper2>
            <OrderInfoStatus>
              <OrderInfo>
                <OrderInfoStatusSpan>Status: </OrderInfoStatusSpan>
              </OrderInfo>
              {order.status ? (
                <AiFillCheckCircle
                  style={{
                    filter:
                      "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);}} size={25}",
                  }}
                />
              ) : (
                <AiFillCloseCircle
                  style={{
                    filter:
                      "invert(13%) sepia(96%) saturate(6523%) hue-rotate(359deg) brightness(107%) contrast(109%)",
                  }}
                  size={25}
                />
              )}
            </OrderInfoStatus>
            <Button onClick={() => setIsOpen(!isOpen)}>Details</Button>
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