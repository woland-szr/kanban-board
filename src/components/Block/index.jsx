import React from 'react';
import './index.css';
import BoardButton from '../BoardButton';
import BoardInput from '../BoardInput';

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            showInput: false
        }
    }

    showInput = () => {
        this.setState({showInput: true});
        if (this.props.blockId !== 1 && this.props.prevItem) {
            this.setState({newItem: this.props.prevItem[0]})
        }
        this.props.submitStatusChange()
    }

    onChangeInput = event => {
        const item = event.target.value;
        this.setState({newItem: item});
        };

    addItem = () => {
        const item = this.state.newItem;
        if (item !== '') {
            if (this.props.blockId > 1) {
                let prevArr = this.props.prevItem
                prevArr = prevArr.filter(element => element !== item)
                this.props.updateItems(this.props.blockId-1, prevArr)
            }
                   
            const newArr = this.props.blockItems.concat(item)
            this.props.updateItems(this.props.blockId, newArr)

            this.setState({showInput: false});
            this.setState({newItem: ''});

            this.props.submitStatusChange()            
        }
    }

    render() {
        let showInput = this.state.showInput;
        let prevItem=this.props.prevItem;
        let addBtn = <BoardButton btnType='add' btnText='+Add card' btnStatus={!showInput} onClickBtn = {this.showInput}/>;
        let submitStatus = this.props.submitStatus;

        if ((this.props.blockId > 1 && this.props.prevItem.length === 0) || submitStatus) {
            addBtn = <BoardButton btnType='add' btnText='+Add card' btnStatus={false}/>;
        } 

        let submitBtn;

        if (showInput) { 
            this.props.blockId === 1 ? prevItem = false : prevItem=this.props.prevItem;
            submitBtn = <BoardButton btnType='submit' btnText='Submit' btnStatus='true' onClickBtn = {this.addItem}/>;
        }
        let input = <BoardInput showInput={showInput} onChange={this.onChangeInput} prevItem={prevItem}/>;

        return (
        <div className="block">
            <div className="block-header">{this.props.blockName}</div>
            {this.props.blockItems.map((item, id) => {
                return (
                    <div className="item" key={id}>{item}</div>
                )
            }
            )}
            {input}
            <div className="buttons">
                {addBtn}
                {submitBtn}
            </div>
        </div>
        )
    }
}

export default Block;