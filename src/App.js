import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["clubs", "hearts", "spades", "diams"]
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">AWESOME</h1>
        <h2 className="secondary-title">BLACKJACK GAME!</h2>
        <p className="text">Choose a card and good luck!</p>
        <div className="container-cards">
          <div className="card">
            <span className="suit suit-clubs">&clubs;</span>
            <span className="top-value clubs">K</span>
            <span className="bottom-value clubs">K</span>
          </div>
          <div className="card">
            <span className="suit suit-hearts">&hearts;</span>
            <span className="top-value hearts">K</span>
            <span className="bottom-value hearts">K</span>
          </div>
          <div className="card">
            <span className="suit suit-spades">&spades;</span>
            <span className="top-value spades">K</span>
            <span className="bottom-value spades">K</span>
          </div>
          <div className="card">
            <span className="suit suit-diams">&diams;</span>
            <span className="top-value diams">K</span>
            <span className="bottom-value diams">K</span>
          </div>
        </div>
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
