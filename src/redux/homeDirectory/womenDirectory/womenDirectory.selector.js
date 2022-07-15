import { createSelector } from "reselect";

const selectDirectory = (state) => state.women;

export const selectwomenhomeDirectorySections = createSelector(
   [selectDirectory],
   (directory) => directory.womensections
);