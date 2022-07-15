import SHOP_DATA from "./shopdata";

const INITIAL_STATE = {
shopdata: SHOP_DATA,
};

const shopdirectoryReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
        default:
        return state;
   }

};
export default shopdirectoryReducer;