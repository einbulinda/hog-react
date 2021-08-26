import categoryTypes from "./category.types";

export const addCategoryStart = (categoryData) => ({
  type: categoryTypes.ADD_CATEGORY_START,
  payload: categoryData,
});
