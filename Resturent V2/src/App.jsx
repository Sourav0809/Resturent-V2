import "./App.css";
import Header from "./Components/Header/Header";
import CoverSection from "./Components/Cover/CoverSection";
import MealsContainer from "./Components/Meals/MealsContainer/MealsContainer";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const onCartShow = () => {
    setCartShow(true);
  };
  const cartHideHandeler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart onCartHide={cartHideHandeler} />}
      <Header onCartShow={onCartShow} />
      <CoverSection />
      <MealsContainer />
    </CartProvider>
  );
}

export default App;
