import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../card/Card';
import './Login.css';
import Button from '../button/Button';
import AuthContext from '../../context/auth-context';


const emailReducer = (state, action) => {
  if (action.type === 'User Input') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'Input Blur') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'Password Input') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'Input Blur') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = ({ onLogin }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })
  const [password, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false })

  const context = useContext(AuthContext)

  const { isValid: emailIsValid } = email
  const { isValid: passwordIsValid } = password


  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);
    return () => clearTimeout(timeout)
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'User Input', val: event.target.value })
    // setFormIsValid(
    //   event.target.value.includes('@') && password.isValid)
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'Password Input', val: event.target.value })
    // setFormIsValid(
    //   email.isValid && event.target.value.trim().length > 6)
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'Input Blur' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'Input Blur' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(email.value, password.value);
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
          className={`control ${password.isValid === false ? 'invalid' : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
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
