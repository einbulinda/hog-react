import { all, call } from "redux-saga/effects";
import userSaga from "./User/user.sagas";
import productsSagas from "./Products/products.sagas";

// Creating generator functions
export default function* rootSaga() {
  yield all([call(userSaga), call(productsSagas)]);
}
