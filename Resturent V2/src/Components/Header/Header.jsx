/* eslint-disable react/prop-types */
import "./Header.css";
const Header = (props) => {
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
        <h2 className="cart-quantity">3</h2>
      </div>
    </header>
  );
};

export default Header;
