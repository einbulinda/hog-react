export const existingCartItem = (prevCartItems, nextCartItem) => {
  return prevCartItems.find(
    (item) => item.documentID === nextCartItem.documentID
  );
};

export const handleCartQuantity = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem(prevCartItems, nextCartItem);

  // existing item in cart
  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID === nextCartItem.documentID
        ? // Increment quantity if product in cart is of same ID
          {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : //   exists but not same as one being added
          cartItem
    );
  }
  // New Product
  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};
