import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import categoriesReducer from "./Categories/category.reducer";
import cartReducer from "./Cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  categoriesData: categoriesReducer,
  cartData: cartReducer,
});
