import { createSelector } from "reselect";

const selectDirectory = (state) => state.other;

export const selectotherhomeDirectorySections = createSelector(
   [selectDirectory],
   (directory) => directory.othersections
);