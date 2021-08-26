import { firestore } from "../../firebase/utils";

const ref = firestore.collection("categories");

export const handleSaveCategory = (category) => {
  return new Promise((resolve, reject) => {
    ref
      .doc()
      .set(category)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
