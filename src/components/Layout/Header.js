import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
