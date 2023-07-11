import "./App.css";
import Header from "./Components/Header/Header";
import CoverSection from "./Components/Cover/CoverSection";
import MealsContainer from "./Components/Meals/MealsContainer/MealsContainer";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <Cart />
      <Header />
      <CoverSection />
      <MealsContainer />
    </>
  );
}

export default App;
