"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = exports.Player = void 0;
class Player {
    constructor() {
        this.cards = [];
        this.totalPoints = 0;
        this.stand = false;
    }
    getPoints() {
        this.totalPoints = 0;
        for (let index = 0; index < this.cards.length; index++) {
            this.totalPoints += this.cards[index].getPoints();
        }
        return this.totalPoints;
    }
    printHand() {
        let outputString = "";
        outputString += "Your Hand: ";
        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }
        outputString += this.cards[this.cards.length - 1].printCard();
        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Bust!)`;
        }
        else {
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }
    setHand(newHand) {
        this.cards = newHand;
    }
    addToHand(newCard) {
        this.cards.push(newCard);
    }
}
exports.Player = Player;
class Dealer extends Player {
    dealerFirstPrintHand() {
        let outputString = "";
        outputString += "Dealer's hand: ";
        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }
        outputString += "[hidden]";
        console.log(outputString);
    }
    printHand() {
        let outputString = "";
        outputString += "Dealer's hand ";
        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }
        outputString += this.cards[this.cards.length - 1].printCard();
        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Bust!)`;
        }
        else {
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }
    dealerHits() {
        let outputString = "";
        outputString += "Dealer hits ";
        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }
        outputString += this.cards[this.cards.length - 1].printCard();
        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Dealer Busts!)`;
        }
        else {
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }
}
exports.Dealer = Dealer;
