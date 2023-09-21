import React from 'react';
import '../Components/Button.css'

const Button = (props) => {
    return (
        <>
          <button onClick={props.go} style={{background: props.color}}  className='btn'>{props.title}</button>
        </>
    );
}

export default Button;
