import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">AWESOME</h1>
        <h2 className="secondary-title">BLACKJACK GAME!</h2>
        <p className="text">Choose a card and good luck!</p>
        <div className="container-cards"></div>
        <div className="container-buttons">
          <button className="click">Get Card</button>
          <button className="click2">Play Again</button>
          <button className="click3">Stand</button>
        </div>
      </div>
    );
  }
}

export default App;
