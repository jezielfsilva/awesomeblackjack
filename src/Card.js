import React, { Component } from "react";

class Card extends Component {
    chooseSuit = (suit) => {
        switch (suit) {
            case "clubs":
                return "♣";
            case "hearts":
                return "♥";
            case "spades":
                return "♠";
            case "diams":
                return "♦";
            default:
                return "";
        }
    }

    render() {
        const { card } = this.props;

        return (
            <div className="card">
                <div className="inside-card">
                    <span className={`suit suit-${card.suit}`}>
                        {this.chooseSuit(card.suit)}
                    </span>
                </div>
                <span className={`top-value ${card.suit}`}>{card.label}</span>
                <span className={`bottom-value ${card.suit}`}>{card.label}</span>
            </div>
        );
    }
}

export default Card;