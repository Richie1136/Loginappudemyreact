import React from 'react';

import './Button.css';

const Button = ({ type, className, onClick, children, disabled }) => {
  return (
    <button
      type={type || 'button'}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
