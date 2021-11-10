import CartActionTypes from "./cart.types";

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (id) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id,
});

export const editItem = (item) => ({
  type: CartActionTypes.EDIT_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
