import { createSelector } from "reselect";


const selectDirectory = (state) => state.shop;

export const selectshopDirectorySections = createSelector(
[selectDirectory],
(directory) => directory.shopdata
);

export const selectvaluesSections = createSelector(
[selectDirectory],
(directory) => directory.values
);
