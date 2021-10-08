import { UserActionTypes } from "./user.types";

// * UserActions
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleAcountModalHidden = () => ({
  type: UserActionTypes.TOGGLE_ACCOUNT_MODAL_HIDDEN,
});

export const toggleUserDropdownHidden = () => ({
  type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

// * SignUp
export const emailSignUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

// * SignIn
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// *SignOut
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const passwordResetStart = (email) => ({
  type: UserActionTypes.PASSWORD_RESET_START,
  payload: email,
});

export const passwordResetSuccess = () => ({
  type: UserActionTypes.PASSWORD_RESET_SUCCESS,
});

export const passwordResetFailure = (error) => ({
  type: UserActionTypes.PASSWORD_RESET_FAILURE,
  payload: error,
});

// * Orders

export const fetchUserOrdersStart = (email) => ({
  type: UserActionTypes.FETCH_USER_ORDERS_START,
  payload: email,
});

export const fetchUserOrdersSuccess = (ordersMap) => ({
  type: UserActionTypes.FETCH_USER_ORDERS_SUCCESS,
  payload: ordersMap,
});

export const fetchUserOrdersFailure = (error) => ({
  type: UserActionTypes.FETCH_USER_ORDERS_FAILURE,
  payload: error,
});
