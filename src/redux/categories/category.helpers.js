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

export const handleFetchCategories = () => {
  return new Promise((resolve, reject) => {
    ref
      .get()
      .then((snapshot) => {
        const categoriesArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(categoriesArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteCategory = (documentID) => {
  return new Promise((resolve, reject) => {
    ref
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
