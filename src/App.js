import React from 'react';
import './App.css';
import BoardHeader from './components/BoardHeader';
import BoardFooter from './components/BoardFooter'
import Board from './components/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: 0,
        finished: 0
    }
  }

  updateFooterData = (active, finished) => {
    this.setState({active: active})
    this.setState({finished: finished})
  }

  render() {
    return (
      <div className="App">
        <BoardHeader />
        <Board updateFooterData={this.updateFooterData}/>
        <BoardFooter activeTasks={this.state.active} finishedTasks={this.state.finished} />
      </div>
  );
  }
}

export default App;
