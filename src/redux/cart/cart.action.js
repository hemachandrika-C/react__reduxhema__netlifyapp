import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART } from "./cart.types";

export const toggleButton = () => ({
type: TOGGLE_CART_HIDDEN,
});

export const addingItemToCart = (item) => ({
type: ADD_ITEM,
payload: item,
});

export const clearItemFromCart = (item) => ({
type: CLEAR_ITEM_FROM_CART,
payload: item,
});
