import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth } from "../../firebase/utils";
import { handleSaveCategory } from "./category.helpers";
import categoryTypes from "./category.types";

export function* addCategory({ payload: { categoryName, status } }) {
  try {
    const timestamp = new Date();
    yield handleSaveCategory({
      categoryName,
      status,
      categoryAdminUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (error) {
    // console.log(error);
  }
}

export function* onAddCategoryStart() {
  yield takeLatest(categoryTypes.ADD_CATEGORY_START, addCategory);
}

export default function* categoriesSagas() {
  yield all([call(onAddCategoryStart)]);
}
