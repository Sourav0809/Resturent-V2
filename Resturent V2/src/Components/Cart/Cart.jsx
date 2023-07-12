/* eslint-disable react/prop-types */
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  return (
    <Modal>
      {cartItems.map((items) => {
        return (
          <div key={items.addedItemId}>
            <div className="cart-items-container">
              <div className="cart-item-image-name">
                <div className="cart-image-container">
                  <img src={items.addedItemImage} alt="logo" />
                </div>
                <div className="cart-item-name">
                  <h2>{items.addedItemName}</h2>
                </div>
              </div>
              <div className="cart-item-quantity">
                <button
                  className="cart-qunatity-btn"
                  onClick={() => {
                    cartCtx.incrementCartItem(items.addedItemId);
                  }}
                >
                  +
                </button>
                <h2> &#x2716; {items.addedItemQuantity}</h2>
                <button
                  className="cart-qunatity-btn"
                  onClick={() => {
                    cartCtx.decrementCartItem(items.addedItemId);
                  }}
                >
                  -
                </button>
              </div>
              <div className="cart-item-price">
                <h2>${items.addedItemPrice}</h2>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="total-amount-container">
        <h1>Total Price</h1>
        <h1>${cartCtx.totalAmount}</h1>
      </div>

      <div className="cart-btn">
        <button className="order-btn">Order</button>
        <button onClick={props.onCartHide} className="close-btn">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
