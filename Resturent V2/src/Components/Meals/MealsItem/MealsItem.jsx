/* eslint-disable react/prop-types */
import "./MealsItem.css";

const MealsItem = (props) => {
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
        <div className="item-count">
          <button className="btn-count">-</button>
          <h3 className="btn-text">0</h3>
          <button className="btn-count">+</button>
        </div>

        <button className="item-quantity-btn">Add</button>
      </div>
    </div>
  );
};

export default MealsItem;
