/* eslint-disable react/prop-types */
import "./Header.css";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const Header = (props) => {
  const cartCtx = useContext(CartContext);

  // getting how much product are added to our cart
  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    console.log(item);
    return Number(currNum) + Number(item.addedItemQuantity);
  }, 0);

  return (
    <header className="header">
      <div>
        <h2 onClick={() => location.reload()}>Kolkata Local</h2>
      </div>
      <div onClick={props.onCartShow} className="cart-header">
        <h2>
          <i className="bx bx-cart"></i>
        </h2>
        <h2>Your Cart</h2>
        <h2 className="cart-quantity">{numOfCartItems}</h2>
      </div>
    </header>
  );
};

export default Header;
