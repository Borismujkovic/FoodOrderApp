import { Card } from "../../UI/Card/Card";
import { MealItem } from "../MealItem/MealItem";
import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((e) => (
    <MealItem
      id={e.id}
      key={e.id}
      name={e.name}
      description={e.description}
      price={e.price}
    />
  ));

  return (
    <section className="meals">
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
};
