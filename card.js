"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(deck, face) {
        this.deck = deck;
        this.face = face;
        if (typeof face === "string") {
            if (face === "A") {
                this.points = 1;
            }
            else {
                this.points = 10;
            }
        }
        else {
            this.points = face;
        }
    }
    getDeck() {
        return this.deck;
    }
    getPoints() {
        return this.points;
    }
    setPoints(newPoints) {
        this.points = newPoints;
    }
    getFace() {
        return this.face;
    }
    printCard() {
        return (`${this.face}${this.deck}`);
    }
}
exports.Card = Card;
