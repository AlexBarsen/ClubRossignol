import { UserActionTypes } from "./user.types";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  currentUser: null,
  accountModalHidden: true,
  isFetching: false,
  error: null,
  orders: null,
  checkUserSession: false,
};

// * reducers take in a current state + action -> return a new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // * OTHER
    case UserActionTypes.CHECK_USER_SESSION: {
      return {
        ...state,
        checkUserSession: true,
      };
    }
    case UserActionTypes.TOGGLE_ACCOUNT_MODAL_HIDDEN:
      return {
        ...state,
        accountModalHidden: !state.accountModalHidden,
      };

    // * SIGN IN/OUT SUCESS
    case UserActionTypes.SIGN_IN_SUCCESS:
      // toast.success("Sign in Sucesss"); // * not sure yet if to add
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        userSignInHidden: true,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    // * ACCOUNT FAILURES
    case UserActionTypes.SIGN_IN_FAILURE:
      action.payload.code === "auth/wrong-password"
        ? toast.error("The password is invalid.")
        : toast.error("There is no user registred to this e-mail.");
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      action.payload.code === "auth/email-already-in-use"
        ? toast.error("The email address is already in use by another account.")
        : toast.error(action.payload.message);
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.PASSWORD_RESET_FAILURE:
      action.payload.code === "auth/user-not-found"
        ? toast.error("There is no user registered to this e-mail.")
        : toast.error(action.payload.message);
      return {
        ...state,
        error: action.payload,
      };
    // * FETCH ORDERS
    case UserActionTypes.FETCH_USER_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.FETCH_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload,
      };
    case UserActionTypes.FETCH_USER_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
