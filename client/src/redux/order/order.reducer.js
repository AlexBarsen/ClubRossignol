import OrderActionTypes from "./order.types";
import { updateOrderStatus } from "./order.utils";
import { toast } from "react-toastify";
import i18next from "i18next";

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
      toast.success(
        i18next.language === "en"
          ? "Order status has been successfully updated"
          : "Statusul comenzii a fost actualizat cu succes"
      );
      return {
        ...state,
        isUpdating: false,
        orders: updateOrderStatus(state.orders, action.payload),
      };
    case OrderActionTypes.UPDATE_ORDER_STATUS_FAILURE:
      toast.success(
        i18next.language === "en"
          ? `Order status update has failed. Error: ${action.payload.message}`
          : `Actualizarea statusului comenzii a eșuat. Error: ${action.payload.message}`
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
