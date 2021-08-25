import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth } from "../../firebase/utils";
import productTypes from "./products.types";
import { handleAddProduct, handleFetchProducts } from "./products.helpers";
import { setProducts, fetchProductsStart } from "./product.actions";

export function* addProduct({
  payload: {
    productName,
    retailPrice,
    salePrice,
    category,
    skuCode,
    stockQuantity,
    attributes,
    description,
    imageUrl,
  },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productName,
      retailPrice,
      salePrice,
      category,
      skuCode,
      stockQuantity,
      attributes,
      description,
      imageUrl,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {
    // console.log(error)
  }
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (error) {
    // console.log(error)
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductsStart)]);
}
