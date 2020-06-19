import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
