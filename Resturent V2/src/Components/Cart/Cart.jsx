import "./Cart.css";
import Modal from "../UI/Modal";
const Cart = () => {
  return (
    <Modal>
      <div>
        <h1>biriyani</h1>
        <h1>100</h1>
        <h1>5</h1>
      </div>
      <div className="cart-btn">
        <button className="order-btn">Order</button>
        <button className="close-btn">Close</button>
      </div>
    </Modal>
  );
};

export default Cart;