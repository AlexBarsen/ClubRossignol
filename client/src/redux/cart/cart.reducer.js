import CartActionTypes from "./cart.types";
import { toast } from "react-toastify";
import { editItem } from "./cart.utils";
import i18next from "i18next";
import UserActionTypes from "../user/user.types";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

// * reducers take in a current state + action -> return a new state
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    case UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN:
      return {
        ...state,
        cartHidden: false,
      };
    case CartActionTypes.ADD_ITEM:
      toast.success(
        i18next.language === "en"
          ? "Item has been added to your cart."
          : "Produsul a fost adăugat în coș."
      );
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      toast.warning(
        i18next.language === "en"
          ? "Item has been removed from your cart."
          : "Produsul a fost eliminat din coș."
      );
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.EDIT_ITEM:
      toast.success(
        i18next.language === "en"
          ? "Item has been successfully edited."
          : "Produsul a fost editat cu succes."
      );
      return {
        ...state,
        cartItems: editItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload,
      };
    case UserActionTypes.TOGGLE_ACCOUNT_MODAL_HIDDEN:
      return {
        ...state,
        cartHidden: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
