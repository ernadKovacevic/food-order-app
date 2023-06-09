import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => {
  return value.trim() === '';
};

const isFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreeIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreeIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreeIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputsValidity.name && classes.invalid
        }`}
      >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.street && classes.invalid
        }`}
      >
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.postalCode && classes.invalid
        }`}
      >
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInput} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postalCode (5 characters long)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.city && classes.invalid
        }`}
      >
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
