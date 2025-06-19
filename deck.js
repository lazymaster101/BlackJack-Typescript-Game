"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deck = void 0;
const card_1 = require("./card");
const enum_1 = require("./enum");
class deck {
    constructor() {
        this.cards = [];
        this.values = [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            "J",
            "Q",
            "K",
            "A",
        ];
        this.decks = [
            enum_1.deckTypes.Clover,
            enum_1.deckTypes.Diamond,
            enum_1.deckTypes.Hearts,
            enum_1.deckTypes.Spade,
        ];
        for (let i = 0; i < this.decks.length; i++) {
            let currDeck = this.decks[i];
            for (let j = 0; j < this.values.length; j++) {
                let newcard = new card_1.Card(currDeck, this.values[j]);
                // newcard.printCard();
                this.cards.push(newcard);
            }
        }
    }
    shuffleArray() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    printDeck() {
        for (let index = 0; index < this.cards.length; index++) {
            this.cards[index].printCard();
        }
    }
    initialDeal() {
        let card1 = this.cards[0];
        let card2 = this.cards[1];
        this.cards.splice(0, 1);
        this.cards.splice(0, 1);
        return [card1, card2];
    }
    drawCard() {
        let card1 = this.cards[0];
        this.cards.splice(0, 1);
        return card1;
    }
}
exports.deck = deck;
