import { RestaurantActionTypes } from "./restaurant.types";

const INITIAL_STATE = {
  menu: null,
  error: null,
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantActionTypes.FETCH_USER_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case RestaurantActionTypes.FETCH_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload,
      };
    case RestaurantActionTypes.FETCH_USER_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
