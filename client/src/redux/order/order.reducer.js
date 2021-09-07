import OrderActionTypes from "./order.types";
import { updateOrderStatus } from "./order.utils";

const INITIAL_STATE = {
  orders: null,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case OrderActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload,
      };
    case OrderActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_START:
      return {
        ...state,
        isUpdating: true,
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        orders: updateOrderStatus(state.orders, action.payload),
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        isUpdating: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
