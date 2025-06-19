"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const deck_1 = require("./deck");
const player_1 = require("./player");
const player_2 = require("./player");
const prompt = (0, prompt_sync_1.default)();
let playerFunds = 100;
while (playerFunds > 0) {
    console.log(`Player's funds: $${playerFunds}`);
    let playerBet = parseInt(prompt("Enter your bet: "));
    while (Number.isNaN(playerBet) || playerBet > playerFunds || playerBet < 1) {
        console.log("Invalid Bet");
        playerBet = parseInt(prompt("Enter your bet: "));
    }
    playerFunds -= playerBet;
    const ourDeck = new deck_1.deck();
    ourDeck.shuffleArray();
    // ourDeck.printDeck();
    const player = new player_1.Player();
    player.setHand(ourDeck.initialDeal());
    player.printHand();
    const dealer = new player_2.Dealer();
    dealer.setHand(ourDeck.initialDeal());
    dealer.dealerFirstPrintHand();
    let userOption = prompt("Your action (hit/stand): ");
    while (userOption === "hit" && player.getPoints() <= 21) {
        let cardDrawn = ourDeck.drawCard();
        player.addToHand(cardDrawn);
        player.printHand();
        if (player.getPoints() > 21) {
            break;
        }
        else {
            userOption = prompt("Your action (hit/stand): ");
        }
    }
    dealer.printHand();
    while (dealer.getPoints() < 17) {
        let newCard = ourDeck.drawCard();
        dealer.addToHand(newCard);
        dealer.dealerHits();
    }
    if (player.getPoints() <= 21) {
        if (dealer.getPoints() > 21 || player.getPoints() > dealer.getPoints()) {
            console.log("You win $" + `${playerBet * 1.5}`);
            playerFunds += playerBet * 1.5;
        }
        else if (player.getPoints() === dealer.getPoints()) {
            console.log("It's a push, Your bet is returned");
            playerFunds += playerBet;
        }
        else if (dealer.getPoints() <= 21) {
            console.log(`Dealer wins. You lose ${playerBet}`);
        }
    }
    else {
        if (dealer.getPoints() <= 21) {
            console.log(`Dealer wins. You lose ${playerBet}`);
        }
        else {
            console.log("It's a push, Your bet is returned");
            playerFunds += playerBet;
        }
    }
}
