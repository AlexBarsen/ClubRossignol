export const updateOrderStatus = (orders, payload) => {
  const { orderID, orderStatus } = payload;

  const order = orders.find((order) => order.orderID === orderID);

  const updatedOrder = {
    ...order,
    status: orderStatus,
  };

  return orders.map((order) =>
    order.orderID === orderID ? updatedOrder : order
  );
};
