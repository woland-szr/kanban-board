import React from 'react';
import './index.css';

const InfoBlock = (props) => {

    const changeActive = () => {
        window.history.back();
    }

    console.log(props);

    return (
    <div className="info-wrapper">
        <div className="infoblock">
        <span className="close" onClick={changeActive}>✖</span>
        <h3>Items: {props.match.params.name}</h3>
        
        {props.items.map((item, id) => {
                return (
                    <div className="items-list" key={id}>{item}</div>
                )
            })
        }
        </div> 
      
    </div>
    );
}

export default InfoBlock;