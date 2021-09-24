import OrderActionTypes from "./order.types";

export const fetchOrdersStart = () => ({
  type: OrderActionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (ordersMap) => ({
  type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
  payload: ordersMap,
});

export const fetchOrdersFailure = (error) => ({
  type: OrderActionTypes.FETCH_ORDERS_FAILURE,
  payload: error,
});

export const updateOrderStatusStart = (orderIDAndStatus) => ({
  type: OrderActionTypes.UPDATE_ORDER_STATUS_START,
  payload: orderIDAndStatus,
});

export const updateOrderStatusSuccess = (orderIDAndStatus) => ({
  type: OrderActionTypes.UPDATE_ORDER_STATUS_SUCCESS,
  payload: orderIDAndStatus,
});

export const updateOrderStatusFailure = (errorMessage) => ({
  type: OrderActionTypes.UPDATE_ORDER_STATUS_FAILURE,
  payload: errorMessage,
});
