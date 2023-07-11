import "./App.css";
import Header from "./Components/Header/Header";
import CoverSection from "./Components/Cover/CoverSection";
import MealsContainer from "./Components/Meals/MealsContainer/MealsContainer";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const onCartShow = () => {
    setCartShow(true);
  };
  const cartHideHandeler = () => {
    setCartShow(false);
  };
  return (
    <>
      {cartShow && <Cart onCartHide={cartHideHandeler} />}
      <Header onCartShow={onCartShow} />
      <CoverSection />
      <MealsContainer />
    </>
  );
}

export default App;
