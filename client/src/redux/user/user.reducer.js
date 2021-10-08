import { UserActionTypes } from "./user.types";
import CartActionTypes from "../cart/cart.types";
import { toast } from "react-toastify";
import i18next from "i18next";

const INITIAL_STATE = {
  currentUser: null,
  accountModalHidden: true,
  userDropdownHidden: true,
  isFetching: false,
  error: null,
  orders: null,
};

// * reducers take in a current state + action -> return a new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // * OTHER
    case UserActionTypes.TOGGLE_ACCOUNT_MODAL_HIDDEN:
      return {
        ...state,
        accountModalHidden: !state.accountModalHidden,
        userDropdownHidden: true,
      };
    case UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN:
      return {
        ...state,
        userDropdownHidden: !state.userDropdownHidden,
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        userDropdownHidden: true,
      };

    case UserActionTypes.SIGN_IN_START:
      return {
        ...state,
      };

    // * SUCCESSES
    case UserActionTypes.SIGN_UP_SUCCESS:
      toast.success(
        i18next.language === "en"
          ? "A verification Email has been sent."
          : "Un Email de confirmare v-a fost trimis."
      );
      return {
        ...state,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      toast.success(
        i18next.language === "en" ? "Signed in sucessfully." : "Logare reușită"
      );
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        accountModalHidden: true,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      toast.success(
        i18next.language === "en"
          ? "Signed out sucessfully."
          : "Deconectare reușită."
      );
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.PASSWORD_RESET_SUCCESS:
      toast.success(
        i18next.language === "en"
          ? "A password reset link has been sent to your Email."
          : "Un link pentru resetarea parolei v-a fost trimis pe Email."
      );
      return {
        ...state,
        accountModalHidden: true,
      };

    // * FAILURES
    case UserActionTypes.SIGN_IN_FAILURE:
      switch (action.payload.code) {
        case "auth/wrong-password":
          toast.error(
            i18next.language === "en"
              ? "The password is invalid."
              : "Parola este greșită."
          );
          return {
            ...state,
            error: action.payload,
          };
        case "auth/user-not-found":
          toast.error(
            i18next.language === "en"
              ? "There is no user registered with this Email."
              : "Nu există un utilizator înregistrat cu acest Email."
          );
          return {
            ...state,
            error: action.payload,
          };
        default:
          toast.error(
            i18next.language === "en"
              ? `An error has occured. Error: ${action.payload.message}`
              : `A apărut o eroare. Error: ${action.payload.message}`
          );
      }

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
      switch (action.payload.code) {
        case "auth/email-already-in-use":
          toast.error(
            "The email address is already in use by another account."
          );
          break;
        default:
          toast.error(`An error has occured. Error: ${action.payload.message}`);
      }

      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.PASSWORD_RESET_FAILURE:
      switch (action.payload.code) {
        case "auth/user-not-found":
          toast.error(
            i18next.language === "en"
              ? "There is no user registered with this Email."
              : "Nu există un utilizator înregistrat cu acest Email."
          );
          return {
            ...state,
            error: action.payload,
          };
        default:
          toast.error(
            i18next.language === "en"
              ? `An error has occured. Error: ${action.payload.message}`
              : `A apărut o eroare. Error: ${action.payload.message}`
          );
      }
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
