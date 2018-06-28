import React from 'react'
import './NotFound.css';

const NotFound = ({ error }) => {

  return (
    error
    ? <div
        className='alert alert-danger alert-msg'
        role='alert'>
        { error }
      </div>
    : null
  );

}

export default NotFound;