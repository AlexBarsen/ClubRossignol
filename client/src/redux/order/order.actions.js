import OrderActionTypes from "./order.types";

export const fetchOrdersStart = () => ({
  type: OrderActionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (ordersMap) => ({
  type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
  payload: ordersMap,
});

export const fetchOrdersFailure = (errorMessage) => ({
  type: OrderActionTypes.FETCH_ORDERS_FAILURE,
  payload: errorMessage,
});
