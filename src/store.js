import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/productsReducer";

const initialState = {};
const reducers = combineReducers({
  products: productsReducer,
});
const store = createStore(reducers, initialState, composeWithDevTools());

export default store;
