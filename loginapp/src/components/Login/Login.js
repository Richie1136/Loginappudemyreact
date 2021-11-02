import React, { useState, useEffect } from 'react';

import Card from '../card/Card';
import './Login.css';
import Button from '../button/Button';

const Login = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => clearTimeout(timeout)
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className='login'>
      <form onSubmit={submitHandler}>
        <div
          className={`control ${emailIsValid === false ? 'invalid' : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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
