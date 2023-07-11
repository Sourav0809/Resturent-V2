import "./MealsForm.css";

const MealsForm = () => {
  return (
    <form className="meals-form">
      <div className="quantity-input">
        <label className="meals-form-label" htmlFor="Price">
          Amount
        </label>
        <input className="meals-form-input" type="number" defaultValue={1} />
      </div>
      <div className="quantity-btn">
        <button type="submit">+Add</button>
      </div>
    </form>
  );
};

export default MealsForm;
