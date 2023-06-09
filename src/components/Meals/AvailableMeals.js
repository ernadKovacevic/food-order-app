import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const loadedMeals = [];
    fetch('https://food-order-app-81819-default-rtdb.firebaseio.com/meals.json')
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            loadedMeals.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price,
            });
          }
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading meals</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
