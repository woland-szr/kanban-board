import React from 'react';
import './index.css';
import Button from './../Button';
import Input from './../Input';

const Block = ({blockName}) => {
    return (
    <div className="block">
        <div className="block-header">{blockName}</div>
        <div>
            <Input display='block'/>
        </div>
        <div>
            <Button btnType='add' btnText='+Add card' btnStatus='active' />
        </div>
    </div>
    )
}

export default Block;