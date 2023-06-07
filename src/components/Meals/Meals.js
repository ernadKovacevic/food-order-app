import AvailableMeals from './AvailableMeals.js';
import MealsSummary from './MealsSummary.js';
import { Fragment } from 'react';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
