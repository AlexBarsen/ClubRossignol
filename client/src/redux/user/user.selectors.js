import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectAcountModalHidden = createSelector(
  [selectUser],
  (user) => user.accountModalHidden
);

export const selectUserDropdownHidden = createSelector(
  [selectUser],
  (user) => user.userDropdownHidden
);

// * CURRENT USER
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsUserLoaded = createSelector(
  [selectUser],
  (user) => !!user.currentUser
);

// * USER ORDERS
export const selectUserOrders = createSelector(
  [selectUser],
  (user) => user.orders
);

export const selectIsUserOrdersLoaded = createSelector(
  [selectUser],
  (user) => !!user.orders
);

export const selectUserOrdersError = createSelector(
  [selectUser],
  (user) => user.error
);
