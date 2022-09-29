import { useEffect, useState } from "react";
import { Card } from "../../UI/Card/Card";
import { MealItem } from "../MealItem/MealItem";
import "./AvailableMeals.css";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodorderapp-3283c-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="MealsLoading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="MealsError">
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((e) => (
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
