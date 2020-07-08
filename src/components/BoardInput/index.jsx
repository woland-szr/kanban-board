import React from 'react';
import './index.css';

const BoardInput = ({showInput, onChange, prevItem}) => {
    const display = showInput ? 'block' : 'none';
    if (prevItem) {
        return (
            <select className='inputText select' style={{display: display}} onChange={onChange}>
                {prevItem.map((item, id) => {
                    return (
                        <option value={item} key={id}>{item}</option>
                    )
                    })
                }
            </select>
        )
    }
    else {
        return (
            <input className="inputText" style={{display: display}} onChange={onChange}/>
        )
    }
    
}

export default BoardInput;