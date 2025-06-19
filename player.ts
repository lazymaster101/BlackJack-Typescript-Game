import { Card } from "./card";

export class Player {
    protected cards: Card[] = [];
    protected totalPoints: number = 0;
    protected stand: boolean = false;

    public getPoints(): number {
        this.totalPoints = 0;
        for (let index = 0; index < this.cards.length; index++) {
            this.totalPoints += this.cards[index].getPoints();
        }
        return this.totalPoints;
    }

    public printHand(): void {
        let outputString: string = "";

        outputString += "Your Hand: ";

        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }

        outputString += this.cards[this.cards.length - 1].printCard();

        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Bust!)`;
        }
        else{
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }
    public setHand(newHand: Card[]) {
        this.cards = newHand;
    }

    public addToHand(newCard: Card): void {
        this.cards.push(newCard);
    }
}

export class Dealer extends Player {
    public dealerFirstPrintHand(): void {
        let outputString: string = "";
        outputString += "Dealer's hand: ";
        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }
        outputString += "[hidden]";
        console.log(outputString)
    }
    override printHand(): void {
        let outputString: string = "";

        outputString += "Dealer's hand ";

        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }

        outputString += this.cards[this.cards.length - 1].printCard();

        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Bust!)`;
        }
        else{
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }

    public dealerHits(): void {
        let outputString: string = "";

        outputString += "Dealer hits ";

        for (let index = 0; index < this.cards.length - 1; index++) {
            outputString += this.cards[index].printCard() + " , ";
        }

        outputString += this.cards[this.cards.length - 1].printCard();

        if (this.getPoints() > 21) {
            outputString += `   (Total: ${this.getPoints()} - Dealer Busts!)`;
        }
        else{
            outputString += `   (Total: ${this.getPoints()})`;
        }
        console.log(outputString);
    }


    
}
