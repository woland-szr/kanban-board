import React from 'react';
import './index.css';
import Block from './../Block';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [
            {id: 1, blockName: 'Backlog', items: []},
            {id: 2, blockName: 'Ready', items: []}, 
            {id: 3, blockName: 'In Progress', items: []},
            {id: 4, blockName: 'Finished', items: []}
            ],
            submitStatus: false,
        }
    }

    submitStatusChange = () => {
        this.setState({submitStatus: !this.state.submitStatus})
    }

    updateItems = (blockId, newItems) => {
        let active = 0;
        let finished = 0;
        const blocksArr = this.state.blocks.map((item) => {
            if (item.id === blockId) { item.items = newItems }
            if (item.id === 1) { active = item.items.length }  
            if (item.id === 4) { finished = item.items.length } 
            return item
            })
        this.setState({ blocks: blocksArr})
        this.props.updateFooterData(active, finished)
    }

    render() {
        return(
            <main className="main">
                <div className="main-wrapper">
                    {this.state.blocks.map((item) => {
                    let prevItem = this.state.blocks.find(tmp => tmp.id === item.id-1)
                    if (item.id > 1) {prevItem = prevItem.items} else {prevItem = []}
                        return (
                            <Block 
                                key = {item.id} 
                                blockId = {item.id} 
                                blockName = {item.blockName} 
                                blockItems = {item.items} 
                                updateItems = {this.updateItems} 
                                prevItem = {prevItem} 
                                submitStatus = {this.state.submitStatus} 
                                submitStatusChange = {this.submitStatusChange}/>
                        );
                    })
                    }
                </div>
            </main>
        )
    }

}

export default Board;