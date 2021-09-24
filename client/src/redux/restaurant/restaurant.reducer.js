import { RestaurantActionTypes } from "./restaurant.types";

const INITIAL_STATE = {
  menu: null,
  error: null,
  isFetching: false,
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantActionTypes.FETCH_RESTAURANT_MENU_START:
      return {
        ...state,
        isFetching: true,
      };
    case RestaurantActionTypes.FETCH_RESTAURANT_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.payload,
      };
    case RestaurantActionTypes.FETCH_RESTAURANT_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
