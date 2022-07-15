import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import WomenhomeReducer from "./homeDirectory/womenDirectory/womenDirectory.reducer";
import menhomeReducer from "./homeDirectory/menDirectory/menDirectory.reducer";
import otherhomeReducer from "./homeDirectory/otherDirectory/otherDirectory.reducer";
import shopReducer from "./ShopPageDirectory/ShopPageDirectory.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};


const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    women: WomenhomeReducer,
    men: menhomeReducer,
    other: otherhomeReducer,
    shop: shopReducer,
});


export default persistReducer(persistConfig, rootReducer);