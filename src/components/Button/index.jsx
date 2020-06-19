import React from 'react';
import './index.css';

const Button = ({btnType, btnText, btnStatus}) => {
    const btnClass = `btn ${btnType} ${btnStatus}`;
    return (
    <button className={btnClass}>{btnText}</button>
    )
}

export default Button;