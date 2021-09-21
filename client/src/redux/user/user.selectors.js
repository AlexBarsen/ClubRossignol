import { createSelector } from "reselect";

// * select user from state
const selectUser = (state) => state.user;

// * select currentUser from user
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// * select userSignInHidden from state
export const selectUserSignInHidden = createSelector(
  [selectUser],
  (user) => user.userSignInHidden
);

export const selectUserSignUpHidden = createSelector(
  [selectUser],
  (user) => user.userSignUpHidden
);

// export const isOrdersFetching = createSelector(
//   [selectUser],
//   (user) => user.isFetching
// );

export const selectDidCheckUserSession = createSelector(
  [selectUser],
  (user) => !!user.checkUserSession
);

export const selectIsUserOrdersLoaded = createSelector(
  [selectUser],
  (user) => !!user.orders
);

export const selectIsUserLoaded = createSelector(
  [selectUser],
  (user) => !!user.currentUser
);

export const selectUserOrders = createSelector(
  [selectUser],
  (user) => user.orders
);
