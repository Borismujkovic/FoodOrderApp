import { MealsSummary } from "../MealsSummary/MealsSummary";
import { AvailableMeals } from "../AvailableMeals/AvailableMeals";
import { Fragment } from "react/cjs/react.production.min";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
