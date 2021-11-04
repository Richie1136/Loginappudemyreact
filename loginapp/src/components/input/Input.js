import React from 'react'
import './Input.css'

const Input = ({ isValid, label, id, type, value, onChange, onBlur }) => {
  return (
    <div
      className={`control ${isValid === false ? 'invalid' : ''
        }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input
