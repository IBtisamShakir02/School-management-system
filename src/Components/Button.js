import React from 'react';
import '../Components/Button.css'

const Button = (props) => {
    return (
        <>
          <button  className='btn'>{props.title}</button>
        </>
    );
}

export default Button;
