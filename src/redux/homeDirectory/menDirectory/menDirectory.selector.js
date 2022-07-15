import { createSelector } from "reselect";


const selectDirectory = (state) => state.men;


export const selectmenhomeDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.mensections
);
