/* eslint-disable react/prop-types */
import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemHandeler = (items) => {
    setCartItems((prevItems) => {
      let isPresent = false;
      const newArr = prevItems.map((values) => {
        if (values.addedItemId === items.addedItemId) {
          isPresent = true;
          values.addedItemQuantity = items.addedItemQuantity;
        }
        return values;
      });
      if (isPresent === true) {
        return newArr;
      } else {
        return [...newArr, items];
      }
    });
  };
  const removeItemHandeler = (id) => {};

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemHandeler,
    removeItem: removeItemHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
