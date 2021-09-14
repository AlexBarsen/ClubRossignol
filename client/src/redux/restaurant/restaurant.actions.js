import { RestaurantActionTypes } from "./restaurant.types";

export const fetchRestaurantMenuStart = (email) => ({
  type: RestaurantActionTypes.FETCH_RESTAURANT_MENU_START,
  payload: email,
});

export const fetchRestaurantMenuSuccess = (menuMap) => ({
  type: RestaurantActionTypes.FETCH_RESTAURANT_MENU_SUCCESS,
  payload: menuMap,
});

export const fetchRestaurantMenuFailure = (errorMessage) => ({
  type: RestaurantActionTypes.FETCH_RESTAURANT_MENU_FAILURE,
  payload: errorMessage,
});
