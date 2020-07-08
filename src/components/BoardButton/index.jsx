import React from 'react';
import './index.css';

const BoardButton = ({btnType, btnText, btnStatus, onClickBtn}) => {
    const btnClass = `btn ${btnType} ${btnStatus}`;
    const dsblBtn = btnStatus ? '' : 'disabled';
    return (
        <button disabled={dsblBtn} className={btnClass} onClick={onClickBtn}>{btnText}</button>
    )
}

export default BoardButton;