import React, { useRef, useImperativeHandle } from 'react'
import './Input.css'

const Input = React.forwardRef(({ isValid, label, id, type, value, onChange, onBlur, ref }) => {
  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(
    ref, () => {
      return {
        focus: focus
      }
    })

  return (
    <div
      className={`control ${isValid === false ? 'invalid' : ''
        }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
})

export default Input
