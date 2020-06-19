import React from 'react';
import './index.css';
import Block from './../Block'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [
            {blockName: 'Backlog', items: [], showInput: false},
            {blockName: 'Ready', items: [], showInput: false}, 
            {blockName: 'In Progress', items: [], showInput: false},
            {blockName: 'Finished', items: [], showInput: false}
            ]
        }
    }

    showInput = (event) => {
            console.log(event);
    }

    render() {
        return(
            <main className="App-main">
                <div className="main-wrapper">
                    {this.state.blocks.map((item) => {
                        return (
                            <Block blockName = {item.blockName} />
                        );
                    })
                    }
                </div>
            </main>
        )
    }

}

export default Board;