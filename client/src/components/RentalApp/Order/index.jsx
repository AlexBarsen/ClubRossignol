import React from "react";

import OrderItem from "../OrderItem/index";

const Order = ({ order }) => {
  const { orderedItems } = order;

  return (
    <>
      {orderedItems.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default Order;
