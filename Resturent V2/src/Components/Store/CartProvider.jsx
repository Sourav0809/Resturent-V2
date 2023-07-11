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
  // calculating the total price of the cart
  let totalPrice = 0;
  cartItems.forEach((value) => {
    totalPrice += value.addedItemPrice * value.addedItemQuantity;
  });

  // when user increment quantity from cart page
  const incrementHandeler = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((values) => {
        if (id === values.addedItemId) {
          values.addedItemQuantity += 1;
        }
        return values;
      });
    });
  };
  // when user decrement quantity from cart page
  const decrementHandeler = (id) => {
    setCartItems((prevItems) => {
      const newArr = prevItems.map((values) => {
        if (id === values.addedItemId) {
          if (values.addedItemQuantity <= 0) {
            values.addedItemQuantity = 0;
          } else {
            values.addedItemQuantity -= 1;
          }
        }
        return values;
      });
      // if user decrease quantity to zero
      const filteredArr = newArr.filter((values) => {
        return values.addedItemQuantity !== 0;
      });
      return filteredArr;
    });
  };

  const cartContext = {
    items: cartItems,
    totalAmount: totalPrice,
    addItem: addItemHandeler,
    incrementCartItem: incrementHandeler,
    decrementCartItem: decrementHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
