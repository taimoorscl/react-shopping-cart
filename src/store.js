import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./redux/reducers/cartReducer";
import { productsReducer } from "./redux/reducers/productsReducer";
import { orderReducer } from "./redux/reducers/orderReducer";

const initialState = {};
const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
