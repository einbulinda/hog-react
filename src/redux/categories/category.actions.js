import categoryTypes from "./category.types";

export const addCategoryStart = (categoryData) => ({
  type: categoryTypes.ADD_CATEGORY_START,
  payload: categoryData,
});

export const fetchCategoriesStart = () => ({
  type: categoryTypes.FETCH_CATEGORIES_START,
});

export const setCategories = (categories) => ({
  type: categoryTypes.SET_CATEGORIES,
  payload: categories,
});

export const deleteCategoryStart = (categoryID) => ({
  type: categoryTypes.DELETE_CATEGORY_START,
  payload: categoryID,
});
