import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth } from "../../firebase/utils";
import { fetchCategoriesStart, setCategories } from "./category.actions";
import {
  handleDeleteCategory,
  handleFetchCategories,
  handleSaveCategory,
} from "./category.helpers";
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
    yield put(fetchCategoriesStart());
  } catch (error) {
    // console.log(error);
  }
}

export function* onAddCategoryStart() {
  yield takeLatest(categoryTypes.ADD_CATEGORY_START, addCategory);
}

export function* fetchCategories() {
  try {
    const categories = yield handleFetchCategories();
    yield put(setCategories(categories));
  } catch (error) {
    // console.log(error)
  }
}

export function* onFetchCategoriesStart() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* deleteCategory({ payload }) {
  try {
    yield handleDeleteCategory(payload);
    yield put(fetchCategoriesStart());
  } catch (error) {
    // console.log(error);
  }
}

export function* onDeleteCategoryStart() {
  yield takeLatest(categoryTypes.DELETE_CATEGORY_START, deleteCategory);
}

export default function* categoriesSagas() {
  yield all([
    call(onAddCategoryStart),
    call(onFetchCategoriesStart),
    call(onDeleteCategoryStart),
  ]);
}
