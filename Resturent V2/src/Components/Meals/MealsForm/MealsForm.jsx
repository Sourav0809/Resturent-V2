import { useState } from "react";
import "./MealsForm.css";

const MealsForm = (props) => {
  const [mealsAmount, setMealsAmount] = useState(1);
  const mealsAmountHandeler = (e) => {
    setMealsAmount(Number(e.target.value));
  };

  return (
    <form
      className="meals-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(Number(mealsAmount));
      }}
    >
      <div className="quantity-input">
        <label className="meals-form-label" htmlFor="Price">
          Amount
        </label>
        <input
          className="meals-form-input"
          type="number"
          onChange={mealsAmountHandeler}
          value={mealsAmount}
        />
      </div>
      <div className="quantity-btn">
        <button type="submit">+Add</button>
      </div>
    </form>
  );
};

export default MealsForm;
