import { Card } from "./card";
import { deckTypes } from "./enum";

export class deck {
    private cards: Card[] = [];
    private values: (number | string)[] = [
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
    private decks: deckTypes[] = [
        deckTypes.Clover,
        deckTypes.Diamond,
        deckTypes.Hearts,
        deckTypes.Spade,
    ];

    constructor() {
        for (let i = 0; i < this.decks.length; i++) {
            let currDeck: deckTypes = this.decks[i];

            for (let j = 0; j < this.values.length; j++) {
                let newcard: Card = new Card(currDeck, this.values[j]);
                // newcard.printCard();
                this.cards.push(newcard);
            }
        }
    }

    public shuffleArray(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    public printDeck(): void {
        for (let index = 0; index < this.cards.length; index++) {
            this.cards[index].printCard();
        }
    }

    public initialDeal(): Card[] {
        let card1 = this.cards[0];
        let card2 = this.cards[1];
        this.cards.splice(0, 1);
        this.cards.splice(0, 1);
        return [card1, card2];
    }

    public drawCard() : Card {
        let card1 = this.cards[0];
        this.cards.splice(0, 1);
        return card1;
    }
}
