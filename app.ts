import PromptSync from "prompt-sync";
import { deck } from "./deck";
import { Player } from "./player";
import { Card } from "./card";
import { playerTurn } from "./enum";
import { Dealer } from "./player";
const prompt = PromptSync();

let playerFunds: number = 100;
while (playerFunds > 0) {
console.log(`Player's funds: $${playerFunds}`);
let playerBet = parseInt(prompt("Enter your bet: "));

while (Number.isNaN(playerBet) || playerBet > playerFunds || playerBet < 1) {
    console.log("Invalid Bet");
    playerBet = parseInt(prompt("Enter your bet: "));
}

playerFunds -= playerBet;

const ourDeck: deck = new deck();
ourDeck.shuffleArray();
// ourDeck.printDeck();

const player: Player = new Player();
player.setHand(ourDeck.initialDeal());
player.printHand();

const dealer: Dealer = new Dealer();
dealer.setHand(ourDeck.initialDeal());
dealer.dealerFirstPrintHand();



let userOption = prompt("Your action (hit/stand): ");
while (userOption === "hit" && player.getPoints() <= 21) {
    let cardDrawn: Card = ourDeck.drawCard();
    player.addToHand(cardDrawn);
    player.printHand();
    if (player.getPoints() > 21){
        break;
    }
    else{
        userOption = prompt("Your action (hit/stand): ");
    }
}

dealer.printHand();
while (dealer.getPoints() < 17) {
    let newCard: Card = ourDeck.drawCard();
    dealer.addToHand(newCard);
    dealer.dealerHits();
}


if (player.getPoints() <= 21) {

    if (dealer.getPoints() > 21 || player.getPoints() > dealer.getPoints()) {
        console.log("You win $" + `${playerBet * 1.5}`);
        playerFunds += playerBet * 1.5;
    }
    else if (player.getPoints() === dealer.getPoints()) {
        console.log("It's a push, Your bet is returned")
        playerFunds += playerBet;
    }
    else if(dealer.getPoints() <=21 ){
        console.log(`Dealer wins. You lose ${playerBet}`);
    }
}
else{
    if (dealer.getPoints() <= 21){
        console.log(`Dealer wins. You lose ${playerBet}`);
    }
    else{
        console.log("It's a push, Your bet is returned")
        playerFunds += playerBet;
    }
}
}
