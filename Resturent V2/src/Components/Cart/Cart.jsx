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
            <button> delete</button>
          </div>
        );
      })}
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
