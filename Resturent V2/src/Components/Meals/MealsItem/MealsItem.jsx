/* eslint-disable react/prop-types */
import "./MealsItem.css";
import MealsForm from "../MealsForm/MealsForm";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  // when user add something to the cart
  const mealsFormSubmit = (mealsAmount) => {
    const addedCartItems = {
      addedItemName: props.itemName,
      addedItemPrice: props.price,
      addedItemQuantity: mealsAmount,
      addedItemImage: props.img,
      addedItemId: props.id,
    };
    cartCtx.addItem(addedCartItems);
  };

  return (
    <div className="container-items">
      <div className="items-image">
        <img src={props.img} alt="logo" />
      </div>
      <div className="item-text">
        <h1>{props.itemName}</h1>
        <h2>${props.price}</h2>
        <p>
          Biriyani, also known as ponir, is a fresh acid-set cheese common in
          the Indian subcontinent made from full-fat buffalo milk or cow milk.
          It is a non-aged.
        </p>
      </div>
      <div className="items-descrip">
        <MealsForm onSubmit={mealsFormSubmit} />
      </div>
    </div>
  );
};

export default MealsItem;
