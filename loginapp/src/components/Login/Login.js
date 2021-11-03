import React, { useState, useEffect, useReducer } from 'react';

import Card from '../card/Card';
import './Login.css';
import Button from '../button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'User Input') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'Input Blur') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const Login = ({ onLogin }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => clearTimeout(timeout)
  // }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'User Input', val: event.target.value })

  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
    setFormIsValid(
      email.isValid && enteredPassword.trim().length > 6
    )
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'Input Blur' })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(email.value, enteredPassword);
  };

  return (
    <Card className='login'>
      <form onSubmit={submitHandler}>
        <div
          className={`control ${email.isValid === false ? 'invalid' : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`control ${passwordIsValid === false ? 'invalid' : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className='actions'>
          <Button type="submit" className='btn' disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
