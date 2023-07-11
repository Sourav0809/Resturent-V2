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
            <h1>{items.addedItemName}</h1>
            <h1>{items.addedItemPrice}</h1>
            <h1>{items.addedItemQuantity}</h1>
            <button
              onClick={() => {
                cartCtx.incrementCartItem(items.addedItemId);
              }}
            >
              Inc
            </button>
            <button
              onClick={() => {
                cartCtx.decrementCartItem(items.addedItemId);
              }}
            >
              Dec
            </button>
          </div>
        );
      })}
      <h1>Total Price {cartCtx.totalAmount}</h1>
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
