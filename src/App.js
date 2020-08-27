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
      userCards: [],
      points: 0,
      winner: false,
      loser: false
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
    const { points } = this.state;
    const card = this.getCard();

    const allPoints = points + card.value;

    this.setState({
      userCards: this.state.userCards.concat(card),
      points: this.state.points + card.value
    });

    if (allPoints > 21) {
      this.setState({
        loser: true
      });
    }

    if (allPoints === 21) {
      this.setState({
        winner: true
      });
    }
  };

  newGame = () => {
    this.setState({
      userCards: [],
      points: 0,
      winner: false,
      loser: false
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
    const { deck, points, winner, loser } = this.state;

    return (
      <div className="App">
        <h1 className="main-title">AWESOME 21!<span className="secondary-title">BLACKJACK!</span></h1>
        <p className="text">Choose a card and good luck!</p>
        <div className="container-cards">
          {deck.length > 0 ? this.renderGame() : <span>criando baralho</span>}
        </div>
        <span className="text-number">{points}</span>
        {winner && <span className="text-win">Parabéns, você tem sorte!</span>}
        {loser && <span className="text-lose">mais sorte na próxima vez,tente novamente!</span>}
        <div className="container-buttons">
          {!winner && !loser && (
            <button className="click" onClick={this.newCard}>Get Card</button>
          )}
          <button className="click2" onClick={this.newGame}>Play Again</button>
        </div>
      </div>
    );
  }
}

export default App;