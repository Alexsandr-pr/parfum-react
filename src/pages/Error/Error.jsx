import React from 'react'
import "./error.scss"

const Error = () => {
  return (
    <div className='error__container'>
        <h1 className="error__title">404</h1>
        <p className='error__text'>"Page Not Found"</p>
    </div>
  )
}

export default Error;