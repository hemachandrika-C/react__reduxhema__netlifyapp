import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectItemsFromCart = createSelector(
[selectCart],
(el) => el.cartItems
);

export const selectTotalItem = createSelector([ selectItemsFromCart], (el) =>
el.reduce(
(accummulator,currentItem) => accummulator+ currentItem.quantity *currentItem.price,
0
)
);

export const selectHiddenToggleStatus = createSelector(
[selectCart],
(el) => el.hidden
);

export const selectCountItems = createSelector(
[ selectItemsFromCart],
(el) =>
el.reduce((accummulator, currentItem) =>accummulator + currentItem.quantity, 0)
);