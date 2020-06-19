import React from 'react';
import './index.css';

const Input = ({showInput}) => {
    const display = showInput ? 'block' : 'none';
    return (
        <input className="inputText" style={{display: display}}></input>
    )
}

export default Input;