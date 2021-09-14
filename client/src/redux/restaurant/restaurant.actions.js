import { RestaurantActionTypes } from "./restaurant.types";

export const fetchRestaurantMenuStart = (email) => ({
  type: RestaurantActionTypes.FETCH_USER_ORDERS_START,
  payload: email,
});

export const fetchRestaurantMenuSuccess = (menuMap) => ({
  type: RestaurantActionTypes.FETCH_USER_ORDERS_SUCCESS,
  payload: menuMap,
});

export const fetchRestaurantMenuFailure = (errorMessage) => ({
  type: RestaurantActionTypes.FETCH_USER_ORDERS_FAILURE,
  payload: errorMessage,
});
