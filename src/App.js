import React from 'react';
import './App.css';

import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suits: ["clubs", "hearts", "spades", "diams"],
      cards: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      deck: [],
      userCards: []
    }
  }

  componentDidMount() {
    this.createDeck();
  }

  getCardValue = (card) => {
    if (card === "A") {
      return 1;
    }

    if (card === "Q" || card === "J" || card === "K") {
      return 10;
    }

    return Number(card);
  }

  createDeck = () => {
    const { cards, suits } = this.state;

    const deck = [];

    cards.forEach((card) => {
      suits.forEach((suit) => {
        deck.push({
          label: card,
          value: this.getCardValue(card),
          suit
        });
      });
    });

    this.setState({
      deck
    });
  };

  getCard = () => {
    const { deck } = this.state;

    const index = Math.floor(Math.random() * (51 - 0 + 1)) + 0;

    return deck[index];
  };

  newCard = () => {
    const card = this.getCard();

    this.setState({
      userCards: this.state.userCards.concat(card)
    });
  };

  renderGame = () => {
    const { userCards } = this.state;

    return (
      <div>
        <div className="box-cards">
          {userCards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { deck } = this.state;

    return (
      <div className="App">
        <h1 className="main-title">AWESOME 21</h1>
        <h2 className="secondary-title">BLACKJACK!</h2>
        <p className="text">Choose a card and good luck!</p>
        <div className="container-cards">
          {deck.length > 0 ? this.renderGame() : <span>criando baralho</span>}
        </div>
        <div className="container-buttons">
          <button className="click" onClick={this.newCard}>Get Card</button>
          <button className="click2">Play Again</button>
          <button className="click3">Stand</button>
        </div>
      </div>
    );
  }
}

export default App;
