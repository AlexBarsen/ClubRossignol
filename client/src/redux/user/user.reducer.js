import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userSignInHidden: true,
  userSignUpHidden: true,
  error: null,
  orders: null,
};

// * reducers take in a current state + action -> return a new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        userSignInHidden: true,
      };
    case UserActionTypes.TOGGLE_USER_SIGN_IN_HIDDEN:
      return {
        ...state,
        userSignInHidden: !state.userSignInHidden,
      };
    case UserActionTypes.TOGGLE_USER_SIGN_UP_HIDDEN:
      return {
        ...state,
        userSignUpHidden: !state.userSignUpHidden,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload,
      };
    case UserActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
