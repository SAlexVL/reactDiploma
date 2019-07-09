import React from 'react';
import './errorMessage.css'
import img from './error.jpg';

const ErrorMessage = () => {
  return (
    <div className="shop__error">
      <img src={img} alt='error'></img>
      <span>Warning!!! Something goes wrong!!!</span>
    </div>
  )
}

export default ErrorMessage;