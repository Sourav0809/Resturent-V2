/* eslint-disable react/prop-types */
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import useStopScroll from "../../Hooks/useStopScroll";
const Cart = (props) => {
  /* calling the customhooks to prevent the scroll when cart conatiner is shown */
  useStopScroll();
  // using the cart context to gettig the cart values
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  return (
    <Modal>
      {cartItems.length != 0 ? (
        <>
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
        </>
      ) : (
        <>
          <div className="empty-cart-container">
            <h1 className="empty-cart-text">Your Cart is Empty </h1>
            <div className="empty-item-div"></div>
          </div>
          <button onClick={props.onCartHide} className="close-btn">
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default Cart;
