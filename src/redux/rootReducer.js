import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import categoriesReducer from "./categories/category.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  categoriesData: categoriesReducer,
});
