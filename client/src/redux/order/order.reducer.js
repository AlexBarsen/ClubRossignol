import OrderActionTypes from "./order.types";
import { updateOrderStatus } from "./order.utils";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  orders: null,
  isFetching: false,
  error: null,
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
        error: action.payload,
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_START:
      return {
        ...state,
        isUpdating: true,
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      toast.success("Order status has been updated sucessfully");
      return {
        ...state,
        isUpdating: false,
        orders: updateOrderStatus(state.orders, action.payload),
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_FAILURE:
      toast.error(
        `Order status has failed to update. Error: ${action.payload.message} `
      );
      return {
        ...state,
        isUpdating: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
