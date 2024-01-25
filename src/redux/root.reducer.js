import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import ArticoliReducer from "./articoli/articoli.reducer";
import CarrelloReducer from "./carrello/carrello.reducer";
import { persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    articoli: ArticoliReducer,
    cart: CarrelloReducer
});

export default persistReducer (persistConfig, rootReducer);