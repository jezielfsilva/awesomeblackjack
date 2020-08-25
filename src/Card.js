import React, { Component } from "react";

class Card extends Component {
    render() {
        const { card } = this.props;

        return (
            <div className="card">
                {card.suit === "clubs" && <span className="suit suit-clubs">&clubs;</span>}
                {card.suit === "hearts" && (<span className="suit suit-hearts">&hearts;</span>)}
                {card.suit === "spades" && (<span className="suit suit-spades">&spades;</span>)}
                {card.suit === "diams" && (<span className="suit suit-diams">&diams;</span>)}
                <span className={`top-value ${card.suit}`}>{card.label}</span>
                <span className={`bottom-value ${card.suit}`}>{card.label}</span>
            </div>
        );
    }
}

export default Card;