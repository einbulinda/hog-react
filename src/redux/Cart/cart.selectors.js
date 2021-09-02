import { createSelector } from "reselect";

// get cart data

export const selectCartData = (state) => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems
);

// custom selector for unique items

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((qty, item) => qty + item.quantity, 0)
);
