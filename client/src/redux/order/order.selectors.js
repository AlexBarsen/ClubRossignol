import { createSelector } from "reselect";

export const selectOrder = (state) => state.order;

export const selectOrders = createSelector(
  [selectOrder],
  (order) => order.orders
);

export const selectIsOrdersLoaded = createSelector(
  [selectOrder],
  (order) => !!order.orders
);

export const selectOrdersError = createSelector(
  [selectOrder],
  (order) => order.error
);
