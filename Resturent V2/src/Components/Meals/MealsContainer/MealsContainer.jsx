import "./MealsContainer.css";
import MealsItem from "../MealsItem/MealsItem";
import DummyMeals from "../../../assets/DummyMeals/DummyMeals";
import Ui from "../../UI/Ui";
const MealsContainer = () => {
  return (
    <>
      <Ui>
        {DummyMeals.map((meals) => {
          return (
            <MealsItem
              id={meals.id}
              key={meals.id}
              itemName={meals.itemName}
              price={meals.price}
              img={meals.img}
            />
          );
        })}
      </Ui>
    </>
  );
};

export default MealsContainer;
